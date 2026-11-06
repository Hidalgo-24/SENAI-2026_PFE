
'use client';

import { useEffect, useState, use } from "react";
import Header from "../../componentes/header";
import styles from "./page.module.css";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function EditaAluno({ params: paramsPromise }) {
    const router = useRouter();
    const routeParams = useParams();
    const searchParams = useSearchParams();

    const resolvedParams = paramsPromise ? use(paramsPromise) : null;
    const id = resolvedParams?.id || routeParams?.id || searchParams?.get("id");

    const [id_aluno, setIdAluno] = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);

    function filtrarNome(valor) {
        return valor.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
    }

    function filtrarRA(valor) {
        return String(valor).replace(/\D/g, '').slice(0, 4);
    }

    useEffect(() => {
        if (id) {
            buscarAluno(id);
        } else {
            setCarregando(false);
        }
    }, [id]);

    async function buscarAluno(idAluno) {
        try {
            setCarregando(true);

            const resposta = await fetch(`/api/alunos/${idAluno}`);
            const dados = await resposta.json();

            const aluno = Array.isArray(dados)
                ? dados.find(
                    (item) => Number(item.id_aluno) === Number(idAluno)
                )
                : dados;

            if (!resposta.ok || !aluno || aluno.mensagem) {
                alert("Aluno não encontrado!");
                router.push("/listalunos");
                return;
            }

            setIdAluno(aluno.id_aluno || idAluno);
            setNome(filtrarNome(aluno.nome || ''));
            setIdade(aluno.idade ?? '');
            setSerie(aluno.serie || '');
            setRa(filtrarRA(aluno.ra || ''));

        } catch (erro) {
            console.error("Erro ao carregar aluno:", erro);
            alert("Erro ao carregar dados do aluno.");

        } finally {
            setCarregando(false);
        }
    }

    async function editarAluno(evento) {
        evento.preventDefault();

        const idFinal = id_aluno || id;
        const nomeLimpo = filtrarNome(nome).trim();
        const raLimpo = filtrarRA(ra);

        if (!idFinal) {
            alert("ID do aluno não foi encontrado.");
            return;
        }

        if (!nomeLimpo) {
            alert("Digite um nome válido para o aluno.");
            return;
        }

        if (raLimpo.length !== 4) {
            alert("O RA deve conter exatamente 4 números.");
            return;
        }

        setSalvando(true);

        try {
            const corpo = {
                id_aluno: Number(idFinal),
                nome: nomeLimpo,
                idade: Number(idade),
                serie,
                ra: raLimpo
            };

            let resposta = await fetch(`/api/alunos/${idFinal}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(corpo)
            });

            if (!resposta.ok) {
                resposta = await fetch("/api/alunos", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(corpo)
                });
            }

            const dados = await resposta.json();

            if (!resposta.ok) {
                alert(
                    dados.mensagem ||
                    dados.erro ||
                    "Erro ao atualizar aluno."
                );
                return;
            }

            alert(dados.mensagem || "Aluno atualizado com sucesso!");
            router.push("/listalunos");

        } catch (error) {
            console.error("Erro ao atualizar aluno:", error);
            alert("Erro ao atualizar aluno.");

        } finally {
            setSalvando(false);
        }
    }

    if (carregando) {
        return (
            <>
                <Header />

                <main className={styles.container}>
                    <div className={styles.card}>
                        <h2>Editar Aluno</h2>
                        <p className={styles.subtitulo}>
                            Carregando informações do aluno...
                        </p>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title || styles.titulo}>
                        Edição de Alunos
                    </h2>

                    <p className={styles.subtitle || styles.subtitulo}>
                        Preencha os dados do aluno para realizar a edição no sistema.
                    </p>

                    <form className={styles.form} onSubmit={editarAluno}>
                        <input
                            type="hidden"
                            value={id_aluno}
                            readOnly
                        />

                        <div className={styles.inputGroup || styles.campo}>
                            <label htmlFor="nome">Nome</label>

                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                value={nome}
                                placeholder="Digite o nome do aluno"
                                onChange={(e) => {
                                    setNome(filtrarNome(e.target.value));
                                }}
                                onKeyDown={(e) => {
                                    if (
                                        e.key.length === 1 &&
                                        !/[A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(e.key)
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

                        <div className={styles.inputGroup || styles.campo}>
                            <label htmlFor="idade">Idade</label>

                            <input
                                id="idade"
                                type="number"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                placeholder="Digite a idade"
                                min="1"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup || styles.campo}>
                            <label htmlFor="serie">Série</label>

                            <input
                                id="serie"
                                type="text"
                                value={serie}
                                onChange={(e) => setSerie(e.target.value)}
                                placeholder="Digite a série"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup || styles.campo}>
                            <label htmlFor="ra">RA</label>

                            <input
                                id="ra"
                                name="ra"
                                type="text"
                                value={ra}
                                placeholder="Digite os 4 números do RA"
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

                        <button
                            className={styles.button || styles.botao}
                            type="submit"
                            disabled={salvando}
                        >
                            {salvando ? "Salvando..." : "Editar Aluno"}
                        </button>

                        <button
                            type="button"
                            className={styles.buttonCancel || styles.botaoCancelar}
                            onClick={() => router.push("/listalunos")}
                            disabled={salvando}
                            style={{
                                marginTop: '10px',
                                backgroundColor: '#6c757d'
                            }}
                        >
                            Cancelar
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
    