
'use client';

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Header from "../componentes/header";
import styles from "./page.module.css";

export default function EditaNotas() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const id = searchParams.get("id");

    const [alunos, setAlunos] = useState([]);
    const [alunoId, setAlunoId] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");

    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);

    useEffect(() => {

        if (!id) {
            setCarregando(false);
            return;
        }

        async function carregarDados() {

            try {
                const [resNotas, resAlunos] = await Promise.all([
                    fetch("/api/notas"),
                    fetch("/api/alunos")
                ]);

                const notas = await resNotas.json();
                const listaAlunos = await resAlunos.json();

                if (!resNotas.ok || !resAlunos.ok) {
                    throw new Error("Erro ao carregar dados");
                }

                const nota = notas.find(
                    (item) => Number(item.id_notas) === Number(id)
                );

                if (!nota) {
                    alert("Nota não encontrada!");
                    router.push("/listanotas");
                    return;
                }

                setAlunos(listaAlunos);

                // Identifica o aluno associado à nota.
                const aluno = listaAlunos.find(
                    (item) =>
                        Number(item.id_aluno) === Number(nota.aluno_id)
                ) || listaAlunos.find(
                    (item) =>
                        item.nome.toLowerCase() ===
                        String(nota.nome).toLowerCase()
                );

                if (aluno) {
                    setAlunoId(String(aluno.id_aluno));
                }

                setT1(String(nota.t1 ?? ""));
                setT2(String(nota.t2 ?? ""));
                setN1(String(nota.n1 ?? ""));
                setN2(String(nota.n2 ?? ""));
                setN3(String(nota.n3 ?? ""));

            } catch (error) {
                console.error("Erro ao carregar nota:", error);
                alert("Erro ao carregar os dados da nota.");
                router.push("/listanotas");

            } finally {
                setCarregando(false);
            }
        }

        carregarDados();

    }, [id, router]);

    async function salvarNota(e) {

        e.preventDefault();

        if (!alunoId) {
            alert("Selecione um aluno.");
            return;
        }

        setSalvando(true);

        try {

            const resposta = await fetch("/api/notas", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_notas: Number(id),
                    aluno_id: Number(alunoId),
                    t1: Number(t1),
                    t2: Number(t2),
                    n1: Number(n1),
                    n2: Number(n2),
                    n3: Number(n3)
                })
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                alert(dados.mensagem || dados.erro || "Erro ao atualizar nota.");
                return;
            }

            alert("Notas atualizadas com sucesso!");
            router.push("/listanotas");

        } catch (error) {
            console.error("Erro ao atualizar nota:", error);
            alert("Erro ao conectar com o servidor.");

        } finally {
            setSalvando(false);
        }
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>

                    <h2>Editar Notas</h2>

                    <p className={styles.subtitulo}>
                        Altere os dados e as notas do aluno
                    </p>

                    {carregando ? (
                        <p>Carregando dados...</p>

                    ) : !id ? (
                        <p>Nenhuma nota selecionada.</p>

                    ) : (
                        <form onSubmit={salvarNota}>

                            <div className={styles.campo}>
                                <label htmlFor="aluno">
                                    Nome do aluno
                                </label>

                                <select
                                    id="aluno"
                                    value={alunoId}
                                    onChange={(e) =>
                                        setAlunoId(e.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Selecione um aluno
                                    </option>

                                    {alunos.map((aluno) => (
                                        <option
                                            key={aluno.id_aluno}
                                            value={aluno.id_aluno}
                                        >
                                            {aluno.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.linha}>
                                <div className={styles.campo}>
                                    <label htmlFor="t1">T1 - Trabalho 1</label>
                                    <input
                                        id="t1"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={t1}
                                        onChange={(e) => setT1(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="t2">T2 - Trabalho 2</label>
                                    <input
                                        id="t2"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={t2}
                                        onChange={(e) => setT2(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.linha}>
                                <div className={styles.campo}>
                                    <label htmlFor="n1">N1 - Nota 1</label>
                                    <input
                                        id="n1"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={n1}
                                        onChange={(e) => setN1(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="n2">N2 - Nota 2</label>
                                    <input
                                        id="n2"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={n2}
                                        onChange={(e) => setN2(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="n3">N3 - Nota 3</label>
                                <input
                                    id="n3"
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    value={n3}
                                    onChange={(e) => setN3(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.botoes}>
                                <button
                                    type="submit"
                                    disabled={salvando}
                                >
                                    {salvando ? "Salvando..." : "Salvar alterações"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => router.push("/listanotas")}
                                    disabled={salvando}
                                >
                                    Cancelar
                                </button>
                            </div>

                        </form>
                    )}
                </div>
            </main>
        </>
    );
}