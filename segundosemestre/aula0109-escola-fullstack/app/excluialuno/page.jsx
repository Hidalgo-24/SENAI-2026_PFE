
'use client';

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Header from "../componentes/header";
import styles from "./page.module.css";

export default function EditaAluno() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const id = searchParams.get("id");

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");

    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);

    useEffect(() => {
        if (!id) {
            setCarregando(false);
            return;
        }

        async function carregarAluno() {
            try {
                const resposta = await fetch("/api/alunos");
                const dados = await resposta.json();

                if (!resposta.ok) {
                    throw new Error("Erro ao buscar alunos.");
                }

                const listaAlunos = Array.isArray(dados)
                    ? dados
                    : dados.alunos;

                if (!Array.isArray(listaAlunos)) {
                    throw new Error("Lista de alunos inválida.");
                }

                const aluno = listaAlunos.find(
                    (item) => Number(item.id_aluno) === Number(id)
                );

                if (!aluno) {
                    alert("Aluno não encontrado!");
                    router.push("/listalunos");
                    return;
                }

                setNome(
                    (aluno.nome || "").replace(/[0-9]/g, "")
                );

                setIdade(aluno.idade ?? "");
                setSerie(aluno.serie || "");
                setRa(aluno.ra || "");

            } catch (error) {
                console.error("Erro ao carregar aluno:", error);
                alert("Erro ao carregar os dados do aluno.");
                router.push("/listalunos");

            } finally {
                setCarregando(false);
            }
        }

        carregarAluno();
    }, [id, router]);

    async function salvarAluno(event) {
        event.preventDefault();

        const nomeLimpo = nome.replace(/[0-9]/g, "").trim();

        if (!nomeLimpo) {
            alert("Digite o nome do aluno.");
            return;
        }

        if (!id) {
            alert("Nenhum aluno foi selecionado.");
            return;
        }

        setSalvando(true);

        try {
            const resposta = await fetch("/api/alunos", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_aluno: Number(id),
                    nome: nomeLimpo,
                    idade,
                    serie,
                    ra
                })
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                alert(
                    dados.mensagem ||
                    dados.erro ||
                    "Erro ao atualizar o aluno."
                );
                return;
            }

            alert("Aluno atualizado com sucesso!");
            router.push("/listalunos");

        } catch (error) {
            console.error("Erro ao atualizar aluno:", error);
            alert("Erro de conexão ao atualizar o aluno.");

        } finally {
            setSalvando(false);
        }
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <p className={styles.status}>SISTEMA ONLINE</p>

                    <h2>Edição de Alunos</h2>

                    <p className={styles.subtitulo}>
                        Preencha os dados do aluno para realizar o cadastro no sistema.
                    </p>

                    {carregando ? (
                        <p>Carregando dados do aluno...</p>
                    ) : !id ? (
                        <p>Nenhum aluno selecionado.</p>
                    ) : (
                        <form
                            className={styles.form}
                            onSubmit={salvarAluno}
                        >
                            <div className={styles.campo}>
                                <label htmlFor="nome">Nome</label>

                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Digite o nome do aluno"
                                    value={nome}
                                    onChange={(e) => {
                                        const texto = e.target.value;
                                        setNome(
                                            texto.replace(/[0-9]/g, "")
                                        );
                                    }}
                                    onInput={(e) => {
                                        const texto = e.currentTarget.value;
                                        const textoSemNumeros =
                                            texto.replace(/[0-9]/g, "");

                                        if (texto !== textoSemNumeros) {
                                            e.currentTarget.value =
                                                textoSemNumeros;

                                            setNome(textoSemNumeros);
                                        }
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
                                    onChange={(e) =>
                                        setIdade(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setSerie(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="ra">RA</label>

                                <input
                                    id="ra"
                                    name="ra"
                                    type="text"
                                    placeholder="Digite o RA"
                                    value={ra}
                                    onChange={(e) =>
                                        setRa(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.botao}
                                disabled={salvando}
                            >
                                {salvando
                                    ? "Salvando..."
                                    : "Atualizar Aluno"}
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </>
    );
}
