
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../componentes/header";
import styles from "./page.module.css";

export default function ListNotas() {
    const [notas, setNotas] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [carregando, setCarregando] = useState(true);

    const router = useRouter();

    useEffect(() => {
        carregarNotas();
    }, []);

    async function carregarNotas() {
        try {
            const resposta = await fetch("/api/notas");
            const dados = await resposta.json();

            if (!resposta.ok || !Array.isArray(dados)) {
                throw new Error(dados.erro || "Erro ao buscar notas.");
            }

            setNotas(dados);
        } catch (erro) {
            console.error("Erro ao buscar notas:", erro);
            alert("Não foi possível carregar as notas.");
        } finally {
            setCarregando(false);
        }
    }

    function editarNota(id) {
        router.push(`/editanotas?id=${encodeURIComponent(id)}`);
    }

    function excluirNota(id) {
        router.push(`/excluinotas?id=${encodeURIComponent(id)}`);
    }

    const notasFiltradas = notas.filter((nota) => {
        const termo = pesquisa.trim().toLowerCase();

        return (
            String(nota.nome ?? "").toLowerCase().includes(termo) ||
            String(nota.t1 ?? "").toLowerCase().includes(termo) ||
            String(nota.t2 ?? "").toLowerCase().includes(termo) ||
            String(nota.n1 ?? "").toLowerCase().includes(termo) ||
            String(nota.n2 ?? "").toLowerCase().includes(termo) ||
            String(nota.n3 ?? "").toLowerCase().includes(termo)
        );
    });

    return (
        <>
            <Header />

            <main className={styles.container}>
                <section className={styles.headerSection}>
                    <h2>Lista de Notas</h2>

                    <p>
                        Consulte as notas cadastradas dos alunos.
                    </p>
                </section>

                <section className={styles.tableCard}>
                    <div className={styles.actions}>
                        <input
                            type="text"
                            placeholder="Pesquisar nota ou aluno..."
                            aria-label="Pesquisar notas"
                            className={styles.search}
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                        />

                        <div className={styles.total}>
                            Total: {notasFiltradas.length}{" "}
                            {notasFiltradas.length === 1
                                ? "registro"
                                : "registros"}
                        </div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Nome do aluno</th>
                                    <th>T1</th>
                                    <th>T2</th>
                                    <th>N1</th>
                                    <th>N2</th>
                                    <th>N3</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {carregando ? (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className={styles.empty}
                                        >
                                            Carregando notas...
                                        </td>
                                    </tr>
                                ) : notasFiltradas.length > 0 ? (
                                    notasFiltradas.map((nota) => (
                                        <tr key={nota.id_notas}>
                                            <td>{nota.nome}</td>
                                            <td>{nota.t1}</td>
                                            <td>{nota.t2}</td>
                                            <td>{nota.n1}</td>
                                            <td>{nota.n2}</td>
                                            <td>{nota.n3}</td>

                                            <td>
                                                <div className={styles.buttons}>
                                                    <button
                                                        type="button"
                                                        className={styles.editButton}
                                                        onClick={() =>
                                                            editarNota(
                                                                nota.id_notas
                                                            )
                                                        }
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className={styles.deleteButton}
                                                        onClick={() =>
                                                            excluirNota(
                                                                nota.id_notas
                                                            )
                                                        }
                                                    >
                                                        Deletar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className={styles.empty}
                                        >
                                            Nenhuma nota encontrada.
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

