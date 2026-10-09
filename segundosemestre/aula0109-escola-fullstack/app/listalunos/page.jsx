
'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../componentes/header";
import styles from "./page.module.css";

export default function ListAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [carregando, setCarregando] = useState(true);

    const router = useRouter();

    useEffect(() => {
        buscarAlunos();
    }, []);

    async function buscarAlunos() {
        try {
            const resposta = await fetch("/api/alunos");
            const dados = await resposta.json();

            if (resposta.ok && Array.isArray(dados)) {
                setAlunos(dados);
            } else {
                setAlunos([]);
                alert(dados.erro || "Erro ao buscar alunos.");
            }
        } catch (erro) {
            console.error("Erro ao buscar alunos:", erro);
            alert("Não foi possível carregar os alunos.");
        } finally {
            setCarregando(false);
        }
    }

    function editarAluno(id) {
        router.push(`/editaaluno?id=${encodeURIComponent(id)}`);
    }

    function excluirAluno(id) {
        router.push(`/excluialuno?id=${encodeURIComponent(id)}`);
    }

    const alunosFiltrados = alunos.filter((aluno) => {
        const termo = pesquisa.trim().toLowerCase();

        return (
            String(aluno.id_aluno ?? "").toLowerCase().includes(termo) ||
            String(aluno.nome ?? "").toLowerCase().includes(termo) ||
            String(aluno.idade ?? "").toLowerCase().includes(termo) ||
            String(aluno.serie ?? "").toLowerCase().includes(termo) ||
            String(aluno.ra ?? "").toLowerCase().includes(termo)
        );
    });

    return (
        <>
            <Header />

            <main className={styles.container}>
                <section className={styles.headerSection}>
                    <h2>Lista de Alunos</h2>

                    <p>
                        Consulte todos os alunos cadastrados no sistema.
                    </p>
                </section>

                <section className={styles.tableCard}>
                    <div className={styles.actions}>
                        <input
                            type="text"
                            placeholder="Pesquisar aluno..."
                            aria-label="Pesquisar aluno"
                            className={styles.search}
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                        />

                        <div className={styles.total}>
                            Total: {alunosFiltrados.length}{" "}
                            {alunosFiltrados.length === 1
                                ? "aluno"
                                : "alunos"}
                        </div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Série</th>
                                    <th>RA</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {carregando ? (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className={styles.empty}
                                        >
                                            Carregando alunos...
                                        </td>
                                    </tr>
                                ) : alunosFiltrados.length > 0 ? (
                                    alunosFiltrados.map((aluno) => (
                                        <tr key={aluno.id_aluno}>
                                            <td>{aluno.id_aluno}</td>
                                            <td>{aluno.nome}</td>
                                            <td>{aluno.idade}</td>
                                            <td>{aluno.serie}</td>
                                            <td>{aluno.ra}</td>

                                            <td>
                                                <div className={styles.buttons}>
                                                    <button
                                                        type="button"
                                                        className={styles.editButton}
                                                        onClick={() =>
                                                            editarAluno(
                                                                aluno.id_aluno
                                                            )
                                                        }
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className={styles.deleteButton}
                                                        onClick={() =>
                                                            excluirAluno(
                                                                aluno.id_aluno
                                                            )
                                                        }
                                                    >
                                                        Excluir
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className={styles.empty}
                                        >
                                            Nenhum aluno encontrado.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}

