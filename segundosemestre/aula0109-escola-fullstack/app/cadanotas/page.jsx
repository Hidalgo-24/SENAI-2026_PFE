'use client';

import { useEffect, useState } from "react";
import Header from "../componentes/header";

export default function CadNotas() {

    const [alunos, setAlunos] = useState([]);

    const [alunoSelecionado, setAlunoSelecionado] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");

    useEffect(() => {
        const alunosSalvos =
            JSON.parse(localStorage.getItem("alunos")) || [];

        setAlunos(alunosSalvos);
    }, []);

    function salvarNota(e) {
        e.preventDefault();

        if (
            !alunoSelecionado ||
            t1 === "" ||
            t2 === "" ||
            n1 === "" ||
            n2 === "" ||
            n3 === ""
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        const valores = [
            Number(t1),
            Number(t2),
            Number(n1),
            Number(n2),
            Number(n3)
        ];

        const notaInvalida = valores.some(
            (valor) => valor < 0 || valor > 10
        );

        if (notaInvalida) {
            alert("As notas devem estar entre 0 e 10.");
            return;
        }

        const aluno = alunos.find(
            (item) =>
                String(item.id) === String(alunoSelecionado)
        );

        if (!aluno) {
            alert("Aluno não encontrado.");
            return;
        }

        const notasSalvas =
            JSON.parse(localStorage.getItem("notas")) || [];

        const novaNota = {
            id: Date.now(),
            alunoId: aluno.id,
            alunoNome: aluno.nome,
            t1: Number(t1),
            t2: Number(t2),
            n1: Number(n1),
            n2: Number(n2),
            n3: Number(n3)
        };

        notasSalvas.push(novaNota);

        localStorage.setItem(
            "notas",
            JSON.stringify(notasSalvas)
        );

        alert("Notas cadastradas com sucesso!");

        setAlunoSelecionado("");
        setT1("");
        setT2("");
        setN1("");
        setN2("");
        setN3("");
    }

    return (
        <>
            <Header />

            <main style={styles.main}>

                <div style={styles.tituloPagina}>

                    <div style={styles.barraTitulo}></div>

                    <div>
                        <h2 style={styles.titulo}>
                            Cadastro de Notas
                        </h2>

                        <p style={styles.subtitulo}>
                            Cadastre as notas e trabalhos dos alunos.
                        </p>
                    </div>

                </div>


                <div style={styles.formContainer}>

                    <div style={styles.formHeader}>

                        <h3 style={styles.formTitulo}>
                            Notas do aluno
                        </h3>

                        <p style={styles.formSubtitulo}>
                            Preencha todos os campos abaixo.
                        </p>

                    </div>


                    <form
                        onSubmit={salvarNota}
                        style={styles.form}
                    >

                        {/* NOME DO ALUNO */}

                        <div style={styles.campo}>

                            <label style={styles.label}>
                                Nome do aluno
                            </label>

                            <select
                                value={alunoSelecionado}
                                onChange={(e) =>
                                    setAlunoSelecionado(
                                        e.target.value
                                    )
                                }
                                style={styles.input}
                            >

                                <option value="">
                                    Selecione o aluno
                                </option>

                                {alunos.map((aluno) => (

                                    <option
                                        key={aluno.id}
                                        value={aluno.id}
                                    >
                                        {aluno.nome}
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* TRABALHOS */}

                        <div style={styles.secao}>

                            <h4 style={styles.secaoTitulo}>
                                Trabalhos
                            </h4>

                            <div style={styles.linhaCampos}>

                                <div style={styles.campo}>

                                    <label style={styles.label}>
                                        T1 - Trabalho 1
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
                                        placeholder="0 a 10"
                                        style={styles.input}
                                    />

                                </div>


                                <div style={styles.campo}>

                                    <label style={styles.label}>
                                        T2 - Trabalho 2
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
                                        placeholder="0 a 10"
                                        style={styles.input}
                                    />

                                </div>

                            </div>

                        </div>


                        {/* NOTAS */}

                        <div style={styles.secao}>

                            <h4 style={styles.secaoTitulo}>
                                Notas
                            </h4>

                            <div style={styles.linhaCampos}>

                                <div style={styles.campo}>

                                    <label style={styles.label}>
                                        N1 - Nota 1
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
                                        placeholder="0 a 10"
                                        style={styles.input}
                                    />

                                </div>


                                <div style={styles.campo}>

                                    <label style={styles.label}>
                                        N2 - Nota 2
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
                                        placeholder="0 a 10"
                                        style={styles.input}
                                    />

                                </div>


                                <div style={styles.campo}>

                                    <label style={styles.label}>
                                        N3 - Nota 3
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
                                        placeholder="0 a 10"
                                        style={styles.input}
                                    />

                                </div>

                            </div>

                        </div>


                        <div style={styles.informacao}>
                            <span>ℹ️</span>

                            <span>
                                Todas as notas devem estar entre
                                0 e 10.
                            </span>
                        </div>


                        <button
                            type="submit"
                            style={styles.botao}
                        >
                            💾 Salvar notas
                        </button>

                    </form>

                </div>

            </main>
        </>
    );
}


const styles = {

    main: {
        minHeight: "calc(100vh - 150px)",
        backgroundColor: "#f4f6f8",
        padding: "45px 25px",
        fontFamily: "Arial, Helvetica, sans-serif",
    },

    tituloPagina: {
        maxWidth: "1000px",
        margin: "0 auto 30px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
    },

    barraTitulo: {
        width: "6px",
        height: "55px",
        backgroundColor: "#e30613",
        borderRadius: "5px",
    },

    titulo: {
        margin: 0,
        fontSize: "30px",
        color: "#222",
    },

    subtitulo: {
        marginTop: "7px",
        color: "#777",
        fontSize: "15px",
    },

    formContainer: {
        maxWidth: "850px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "14px",
        padding: "35px",
        boxShadow: "0 5px 25px rgba(0,0,0,0.07)",
        borderTop: "5px solid #e30613",
    },

    formHeader: {
        marginBottom: "28px",
    },

    formTitulo: {
        margin: 0,
        fontSize: "22px",
        color: "#222",
    },

    formSubtitulo: {
        marginTop: "6px",
        color: "#777",
        fontSize: "14px",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "25px",
    },

    secao: {
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        border: "1px solid #eee",
    },

    secaoTitulo: {
        margin: "0 0 18px",
        color: "#333",
        fontSize: "17px",
    },

    linhaCampos: {
        display: "flex",
        gap: "20px",
    },

    campo: {
        display: "flex",
        flexDirection: "column",
        gap: "7px",
        flex: 1,
    },

    label: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#444",
    },

    input: {
        width: "100%",
        padding: "13px 14px",
        border: "1px solid #d1d5db",
        borderRadius: "7px",
        fontSize: "15px",
        backgroundColor: "#fff",
        outline: "none",
        boxSizing: "border-box",
    },

    informacao: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "13px",
        backgroundColor: "#f5f7fa",
        borderRadius: "7px",
        color: "#666",
        fontSize: "13px",
    },

    botao: {
        border: "none",
        borderRadius: "7px",
        padding: "14px",
        backgroundColor: "#e30613",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
    },

};