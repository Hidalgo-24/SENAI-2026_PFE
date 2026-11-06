
'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../componentes/header";
import styles from "./page.module.css";

export default function CadAlunos() {
    const router = useRouter();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');
    const [idAluno, setIdAluno] = useState(null);
    const [editando, setEditando] = useState(false);

    function filtrarNome(valor) {
        return valor.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    }

    function filtrarRA(valor) {
        return String(valor).replace(/\D/g, '').slice(0, 4);
    }

    useEffect(() => {
        const alunoSalvo = localStorage.getItem("alunoEditar");

        if (alunoSalvo) {
            try {
                const aluno = JSON.parse(alunoSalvo);

                setIdAluno(aluno.id_aluno);
                setNome(filtrarNome(aluno.nome || ''));
                setIdade(aluno.idade || '');
                setSerie(aluno.serie || '');
                setRa(filtrarRA(aluno.ra || ''));
                setEditando(true);

                localStorage.removeItem("alunoEditar");
            } catch (error) {
                console.error("Erro ao carregar aluno:", error);
            }
        }
    }, []);

    async function salvarAluno(event) {
        event.preventDefault();

        const nomeLimpo = filtrarNome(nome).trim();
        const raLimpo = filtrarRA(ra);

        if (!nomeLimpo) {
            alert("Digite um nome válido, usando apenas letras.");
            return;
        }

        if (raLimpo.length !== 4) {
            alert("O RA deve conter exatamente 4 números.");
            return;
        }

        try {
            const resposta = await fetch("/api/alunos", {
                method: editando ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nomeLimpo,
                    idade,
                    serie,
                    ra: raLimpo,
                    ...(editando ? { id_aluno: idAluno } : {})
                })
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                alert(
                    dados.mensagem ||
                    dados.erro ||
                    "Erro ao processar o cadastro."
                );
                return;
            }

            alert(
                editando
                    ? "Aluno atualizado com sucesso!"
                    : "Aluno cadastrado com sucesso!"
            );

            router.push("/listalunos");

        } catch (error) {
            console.error("Erro ao salvar aluno:", error);
            alert("Erro de conexão ao salvar.");
        }
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <p className={styles.status}>SISTEMA ONLINE</p>

                    <h2>
                        {editando ? "Editar Aluno" : "Cadastro de Alunos"}
                    </h2>

                    <p className={styles.subtitulo}>
                        Preencha os dados do aluno para realizar o cadastro no sistema.
                    </p>

                    <form className={styles.form} onSubmit={salvarAluno}>
                        <div className={styles.campo}>
                            <label htmlFor="nome">Nome</label>

                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                placeholder="Digite o nome do aluno"
                                value={nome}
                                onChange={(e) => {
                                    setNome(filtrarNome(e.target.value));
                                }}
                                onKeyDown={(e) => {
                                    if (
                                        e.key.length === 1 &&
                                        !/[a-zA-ZÀ-ÿ\s]/.test(e.key)
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                                onPaste={(e) => {
                                    e.preventDefault();

                                    const texto = e.clipboardData.getData("text");
                                    const campo = e.currentTarget;
                                    const inicio = campo.selectionStart;
                                    const fim = campo.selectionEnd;

                                    const novoValor =
                                        nome.slice(0, inicio) +
                                        filtrarNome(texto) +
                                        nome.slice(fim);

                                    setNome(novoValor);
                                }}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="idade">Idade</label>

                            <input
                                id="idade"
                                name="idade"
                                type="number"
                                placeholder="Digite a idade"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                min="1"
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="serie">Série</label>

                            <input
                                id="serie"
                                name="serie"
                                type="text"
                                placeholder="Digite a série"
                                value={serie}
                                onChange={(e) => setSerie(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="ra">RA</label>

                            <input
                                id="ra"
                                name="ra"
                                type="text"
                                placeholder="Digite os 4 números do RA"
                                value={ra}
                                maxLength={4}
                                inputMode="numeric"
                                autoComplete="off"
                                onChange={(e) => {
                                    setRa(filtrarRA(e.target.value));
                                }}
                                onInput={(e) => {
                                    const valor = filtrarRA(e.currentTarget.value);

                                    e.currentTarget.value = valor;
                                    setRa(valor);
                                }}
                                onPaste={(e) => {
                                    e.preventDefault();

                                    const texto = filtrarRA(
                                        e.clipboardData.getData("text")
                                    );

                                    setRa(texto);
                                }}
                                pattern="[0-9]{4}"
                                title="Digite exatamente 4 números."
                                required
                            />
                        </div>

                        <button type="submit" className={styles.botao}>
                            {editando ? "Atualizar Aluno" : "Cadastrar Aluno"}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
