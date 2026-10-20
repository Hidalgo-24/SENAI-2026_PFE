'use client';

import { useState, useEffect } from "react";
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
                setNotas([]);
                return;
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

    async function excluirNota(id) {
        if (!confirm("Deseja realmente excluir esta nota?")) {
            return;
        }

        try {
            const resposta = await fetch(`/api/notas/${id}`, {
                method: "DELETE",
            });

            if (!resposta.ok) {
                // Fallback para envio com body
                await fetch("/api/notas", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id_notas: id }),
                });
            }

            alert("Nota excluída com sucesso!");
            carregarNotas();
        } catch (erro) {
            console.error("Erro ao excluir nota:", erro);
            router.push(`/excluinotas?id=${encodeURIComponent(id)}`);
        }
    }

    // FILTRO DE BUSCA
    const notasFiltradas = notas.filter((nota) => {
        const termo = pesquisa.trim().toLowerCase();

        return (
            String(nota.nome ?? "").toLowerCase().includes(termo) ||
            String(nota.t1 ?? "").toLowerCase().includes(termo) ||
            String(nota.t2 ?? "").toLowerCase().includes(termo) ||
            String(nota.n1 ?? nota.nota1 ?? "").toLowerCase().includes(termo) ||
            String(nota.n2 ?? nota.nota2 ?? "").toLowerCase().includes(termo) ||
            String(nota.n3 ?? nota.nota3 ?? "").toLowerCase().includes(termo)
        );
    });

    return (
        <>
            <Header />

            <main className={styles.main || styles.container}>

                <section className={styles.tituloArea || styles.headerSection}>
                    <h2>Lista de Notas</h2>

                    <p>
                        Consulte todas as notas cadastradas no sistema.
                    </p>
                </section>

                <section className={styles.tabelaContainer || styles.tableCard}>

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
                            {notasFiltradas.length === 1 ? "registro" : "registros"}
                        </div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.tabela || styles.table}>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
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
                                        <td colSpan="8" className={styles.empty}>
                                            Carregando notas...
                                        </td>
                                    </tr>
                                ) : notasFiltradas.length > 0 ? (
                                    notasFiltradas.map((nota) => (
                                        <tr key={nota.id_notas || nota.id_nota || nota.id_aluno}>
                                            <td>{nota.id_notas || nota.id_nota || "-"}</td>
                                            <td>{nota.nome || nota.nome_aluno || "-"}</td>
                                            <td>{nota.t1 ?? "-"}</td>
                                            <td>{nota.t2 ?? "-"}</td>
                                            <td>{nota.n1 ?? nota.nota1 ?? "-"}</td>
                                            <td>{nota.n2 ?? nota.nota2 ?? "-"}</td>
                                            <td>{nota.n3 ?? nota.nota3 ?? "-"}</td>

                                            <td>
                                                <div className={styles.buttons}>
                                                    <button
                                                        type="button"
                                                        className={styles.botaoEditar || styles.editButton}
                                                        onClick={() => editarNota(nota.id_notas || nota.id_nota)}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className={styles.botaoExcluir || styles.deleteButton}
                                                        onClick={() => excluirNota(nota.id_notas || nota.id_nota)}
                                                    >
                                                        Excluir
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className={styles.empty}>
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