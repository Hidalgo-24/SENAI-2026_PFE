'use client';

import { useEffect, useState } from "react";
import Header from "../componentes/header";

export default function ListaNotas() {

    const exemplo = {
        id: 1,
        alunoNome: "Estevan Fernando",
        t1: 7.0,
        t2: 9.0,
        n1: 6.5,
        n2: 9.5,
        n3: 8.0
    };

    const [notas, setNotas] = useState([exemplo]);
    const [busca, setBusca] = useState("");

    // Controle da edição
    const [editando, setEditando] = useState(null);

    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");

    // Carregar notas
    useEffect(() => {
        const notasSalvas = JSON.parse(
            localStorage.getItem("notas")
        );

        if (notasSalvas && notasSalvas.length > 0) {
            setNotas(notasSalvas);
        } else {
            localStorage.setItem(
                "notas",
                JSON.stringify([exemplo])
            );

            setNotas([exemplo]);
        }
    }, []);

    // Abrir edição
    function editarNota(nota) {
        setEditando(nota.id);

        setT1(nota.t1);
        setT2(nota.t2);
        setN1(nota.n1);
        setN2(nota.n2);
        setN3(nota.n3);
    }

    // Cancelar edição
    function cancelarEdicao() {
        setEditando(null);

        setT1("");
        setT2("");
        setN1("");
        setN2("");
        setN3("");
    }

    // Salvar edição
    function salvarEdicao(id) {

        const valores = [
            Number(t1),
            Number(t2),
            Number(n1),
            Number(n2),
            Number(n3)
        ];

        if (
            valores.some(
                (valor) =>
                    isNaN(valor) ||
                    valor < 0 ||
                    valor > 10
            )
        ) {
            alert("Digite todas as notas entre 0 e 10.");
            return;
        }

        const novasNotas = notas.map((nota) => {

            if (nota.id === id) {
                return {
                    ...nota,
                    t1: Number(t1),
                    t2: Number(t2),
                    n1: Number(n1),
                    n2: Number(n2),
                    n3: Number(n3)
                };
            }

            return nota;
        });

        setNotas(novasNotas);

        localStorage.setItem(
            "notas",
            JSON.stringify(novasNotas)
        );

        cancelarEdicao();

        alert("Notas atualizadas com sucesso!");
    }

    // Excluir nota
    function deletarNota(id) {

        const confirmar = confirm(
            "Tem certeza que deseja excluir estas notas?"
        );

        if (!confirmar) return;

        const novasNotas = notas.filter(
            (nota) => nota.id !== id
        );

        setNotas(novasNotas);

        localStorage.setItem(
            "notas",
            JSON.stringify(novasNotas)
        );
    }

    // Pesquisa
    const notasFiltradas = notas.filter((nota) =>
        nota.alunoNome
            .toLowerCase()
            .includes(busca.toLowerCase())
    );

    return (
        <>
            <Header />

            <main style={styles.container}>

                {/* TOPO */}
                <div style={styles.topo}>

                    <div>
                        <p style={styles.subtitulo}>
                            SISTEMA ESCOLAR
                        </p>

                        <h1 style={styles.titulo}>
                            Lista de Notas
                        </h1>

                        <p style={styles.descricao}>
                            Consulte e edite as notas dos alunos.
                        </p>
                    </div>

                    <a
                        href="/cadanotas"
                        style={styles.botaoNovo}
                    >
                        + Cadastrar notas
                    </a>

                </div>

                {/* PESQUISA */}
                <div style={styles.pesquisaBox}>

                    <input
                        type="text"
                        placeholder="Pesquisar aluno..."
                        value={busca}
                        onChange={(e) =>
                            setBusca(e.target.value)
                        }
                        style={styles.inputPesquisa}
                    />

                </div>

                {/* CARDS */}
                <div style={styles.cards}>

                    <div style={styles.card}>
                        <span style={styles.cardNumero}>
                            {notas.length}
                        </span>

                        <span style={styles.cardTexto}>
                            Alunos com notas
                        </span>
                    </div>

                    <div style={styles.card}>
                        <span style={styles.cardNumero}>
                            {notas.length * 2}
                        </span>

                        <span style={styles.cardTexto}>
                            Trabalhos cadastrados
                        </span>
                    </div>

                    <div style={styles.card}>
                        <span style={styles.cardNumero}>
                            {notas.length * 5}
                        </span>

                        <span style={styles.cardTexto}>
                            Notas cadastradas
                        </span>
                    </div>

                </div>

                {/* TABELA */}
                <div style={styles.tabelaContainer}>

                    <table style={styles.tabela}>

                        <thead>

                            <tr>

                                <th style={styles.th}>
                                    ID
                                </th>

                                <th style={styles.th}>
                                    Nome aluno
                                </th>

                                <th style={styles.th}>
                                    T1
                                </th>

                                <th style={styles.th}>
                                    T2
                                </th>

                                <th style={styles.th}>
                                    N1
                                </th>

                                <th style={styles.th}>
                                    N2
                                </th>

                                <th style={styles.th}>
                                    N3
                                </th>

                                <th style={styles.th}>
                                    Ações
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {notasFiltradas.map((nota) => (

                                <tr key={nota.id}>

                                    <td style={styles.td}>
                                        {nota.id}
                                    </td>

                                    <td style={styles.tdNome}>
                                        {nota.alunoNome}
                                    </td>

                                    <td style={styles.td}>
                                        {Number(nota.t1).toFixed(1)}
                                    </td>

                                    <td style={styles.td}>
                                        {Number(nota.t2).toFixed(1)}
                                    </td>

                                    <td style={styles.td}>
                                        {Number(nota.n1).toFixed(1)}
                                    </td>

                                    <td style={styles.td}>
                                        {Number(nota.n2).toFixed(1)}
                                    </td>

                                    <td style={styles.td}>
                                        {Number(nota.n3).toFixed(1)}
                                    </td>

                                    <td style={styles.acoes}>

                                        {/* EDITAR */}
                                        <button
                                            onClick={() =>
                                                editarNota(nota)
                                            }
                                            style={styles.botaoEditar}
                                        >
                                            Editar
                                        </button>

                                        {/* EXCLUIR */}
                                        <button
                                            onClick={() =>
                                                deletarNota(nota.id)
                                            }
                                            style={styles.botaoExcluir}
                                        >
                                            Excluir
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                    {notasFiltradas.length === 0 && (

                        <div style={styles.vazio}>
                            Nenhuma nota cadastrada.
                        </div>

                    )}

                </div>

            </main>

            {/* MODAL DE EDIÇÃO */}
            {editando !== null && (

                <div style={styles.overlay}>

                    <div style={styles.modal}>

                        <div style={styles.modalTopo}>

                            <div>

                                <p style={styles.modalSubtitulo}>
                                    SISTEMA ESCOLAR
                                </p>

                                <h2 style={styles.modalTitulo}>
                                    Editar notas
                                </h2>

                            </div>

                            <button
                                onClick={cancelarEdicao}
                                style={styles.botaoFechar}
                            >
                                ×
                            </button>

                        </div>

                        <p style={styles.modalDescricao}>
                            Altere as notas do aluno abaixo.
                        </p>

                        <div style={styles.linhaVermelha}></div>

                        <div style={styles.formGrid}>

                            {/* T1 */}
                            <div>

                                <label style={styles.label}>
                                    T1
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    value={t1}
                                    onChange={(e) =>
                                        setT1(e.target.value)
                                    }
                                    style={styles.input}
                                />

                            </div>

                            {/* T2 */}
                            <div>

                                <label style={styles.label}>
                                    T2
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    value={t2}
                                    onChange={(e) =>
                                        setT2(e.target.value)
                                    }
                                    style={styles.input}
                                />

                            </div>

                            {/* N1 */}
                            <div>

                                <label style={styles.label}>
                                    N1
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    value={n1}
                                    onChange={(e) =>
                                        setN1(e.target.value)
                                    }
                                    style={styles.input}
                                />

                            </div>

                            {/* N2 */}
                            <div>

                                <label style={styles.label}>
                                    N2
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    value={n2}
                                    onChange={(e) =>
                                        setN2(e.target.value)
                                    }
                                    style={styles.input}
                                />

                            </div>

                            {/* N3 */}
                            <div>

                                <label style={styles.label}>
                                    N3
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    value={n3}
                                    onChange={(e) =>
                                        setN3(e.target.value)
                                    }
                                    style={styles.input}
                                />

                            </div>

                        </div>

                        {/* BOTÕES */}
                        <div style={styles.modalBotoes}>

                            <button
                                onClick={cancelarEdicao}
                                style={styles.botaoCancelar}
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={() =>
                                    salvarEdicao(editando)
                                }
                                style={styles.botaoSalvar}
                            >
                                Salvar alterações
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
}


/* =========================
   ESTILOS
========================= */

const styles = {

    container: {
        minHeight: "100vh",
        background: "#f5f6f8",
        padding: "40px 6%",
        fontFamily: "Arial, sans-serif"
    },

    topo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
    },

    subtitulo: {
        color: "#d71920",
        fontSize: "13px",
        fontWeight: "bold",
        letterSpacing: "2px",
        marginBottom: "8px"
    },

    titulo: {
        fontSize: "32px",
        color: "#333",
        margin: 0
    },

    descricao: {
        color: "#777",
        marginTop: "10px"
    },

    botaoNovo: {
        background: "#d71920",
        color: "#fff",
        padding: "13px 20px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(215,25,32,0.2)"
    },

    pesquisaBox: {
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    },

    inputPesquisa: {
        width: "100%",
        padding: "13px",
        border: "1px solid #ddd",
        borderRadius: "7px",
        fontSize: "15px",
        boxSizing: "border-box",
        outline: "none"
    },

    cards: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginBottom: "25px"
    },

    card: {
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        borderTop: "4px solid #d71920"
    },

    cardNumero: {
        display: "block",
        fontSize: "30px",
        fontWeight: "bold",
        color: "#d71920"
    },

    cardTexto: {
        color: "#666",
        marginTop: "5px",
        display: "block"
    },

    tabelaContainer: {
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    },

    tabela: {
        width: "100%",
        borderCollapse: "collapse"
    },

    th: {
        background: "#d71920",
        color: "#fff",
        padding: "15px",
        textAlign: "left",
        fontWeight: "bold"
    },

    td: {
        padding: "14px",
        borderBottom: "1px solid #eee",
        color: "#555"
    },

    tdNome: {
        padding: "14px",
        borderBottom: "1px solid #eee",
        fontWeight: "bold",
        color: "#333"
    },

    acoes: {
        padding: "10px",
        borderBottom: "1px solid #eee",
        display: "flex",
        gap: "8px"
    },

    botaoEditar: {
        background: "#d71920",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold"
    },

    botaoExcluir: {
        background: "#b51218",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold"
    },

    vazio: {
        padding: "40px",
        textAlign: "center",
        color: "#777"
    },

    /* MODAL */

    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    },

    modal: {
        background: "#fff",
        width: "500px",
        maxWidth: "90%",
        padding: "30px",
        borderRadius: "14px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    },

    modalTopo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },

    modalSubtitulo: {
        color: "#d71920",
        fontSize: "11px",
        fontWeight: "bold",
        letterSpacing: "2px",
        margin: "0 0 5px 0"
    },

    modalTitulo: {
        margin: 0,
        color: "#333",
        fontSize: "25px"
    },

    modalDescricao: {
        color: "#666",
        marginBottom: "15px"
    },

    linhaVermelha: {
        height: "3px",
        background: "#d71920",
        borderRadius: "5px",
        marginBottom: "25px"
    },

    botaoFechar: {
        background: "#d71920",
        color: "#fff",
        border: "none",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        fontSize: "24px",
        lineHeight: "20px",
        cursor: "pointer"
    },

    formGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px"
    },

    label: {
        display: "block",
        marginBottom: "7px",
        fontWeight: "bold",
        color: "#333"
    },

    input: {
        width: "100%",
        padding: "11px",
        border: "1px solid #ccc",
        borderRadius: "7px",
        fontSize: "15px",
        boxSizing: "border-box",
        outline: "none"
    },

    modalBotoes: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "28px"
    },

    botaoCancelar: {
        background: "#eee",
        color: "#555",
        border: "none",
        padding: "11px 18px",
        borderRadius: "7px",
        cursor: "pointer",
        fontWeight: "bold"
    },

    botaoSalvar: {
        background: "#d71920",
        color: "#fff",
        border: "none",
        padding: "11px 18px",
        borderRadius: "7px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(215,25,32,0.2)"
    }
};