'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // 1. IMPORTAR O ROUTER
import Header from "../componentes/header";
import styles from "./page.module.css";

export default function CadNotas() {
    const router = useRouter(); // 2. INICIALIZAR O ROUTER

    const [aluno_id, setAlunoId] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    const [alunos, setAlunos] = useState([]);
    const [idNotas, setIdNotas] = useState(null);
    const [editando, setEditando] = useState(false);

    async function carregarAlunos() {
        try {
            let resposta = await fetch("/api/alunos/lista");
            if (!resposta.ok) {
                resposta = await fetch("/api/alunos");
            }
            const dados = await resposta.json();

            if (Array.isArray(dados)) {
                setAlunos(dados);
            } else {
                setAlunos([]);
            }
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
        }
    }

    useEffect(() => {
        carregarAlunos();

        const notaSalva = localStorage.getItem("notaEditar");

        if (notaSalva) {
            const nota = JSON.parse(notaSalva);

            setIdNotas(nota.id_notas);
            setAlunoId(nota.aluno_id || nota.id_aluno || '');
            setT1(nota.t1 ?? '');
            setT2(nota.t2 ?? '');
            setN1(nota.n1 ?? '');
            setN2(nota.n2 ?? '');
            setN3(nota.n3 ?? '');

            setEditando(true);
            localStorage.removeItem("notaEditar");
        }
    }, []);

    async function salvarNota(event) {
        event.preventDefault();

        if (!aluno_id) {
            alert("Selecione um aluno válido.");
            return;
        }

        try {
            let resposta;

            if (editando) {
                resposta = await fetch("/api/notas", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id_notas: idNotas,
                        aluno_id,
                        t1, t2, n1, n2, n3
                    })
                });
            } else {
                resposta = await fetch("/api/notas", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        aluno_id,
                        t1, t2, n1, n2, n3
                    })
                });
            }

            const dados = await resposta.json();

            if (!resposta.ok) {
                alert(dados.mensagem || dados.erro || "Ocorreu um erro ao processar.");
                return;
            }

            alert(editando ? "Notas atualizadas com sucesso!" : "Notas cadastradas com sucesso!");
            
            // 3. REDIRECIONAR PARA A LISTA DE NOTAS
            router.push("/listanotas");

        } catch (error) {
            console.error("Erro ao salvar nota:", error);
            alert("Erro de conexão ao salvar a nota.");
        }
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <p className={styles.status}>SISTEMA ONLINE</p>

                    <h2>{editando ? "Editar Notas" : "Cadastro de Notas"}</h2>
                    <p className={styles.subtitulo}>Preencha os dados das notas do aluno no sistema.</p>

                    <form className={styles.form} onSubmit={salvarNota}>
                        <div className={styles.campo}>
                            <label htmlFor="aluno_id">Aluno</label>
                            <select
                                id="aluno_id"
                                value={aluno_id}
                                onChange={(e) => setAlunoId(e.target.value)}
                                required
                            >
                                <option value="">Selecione um aluno</option>
                                {alunos.map((aluno) => (
                                    <option key={aluno.id_aluno} value={aluno.id_aluno}>
                                        {aluno.nome} {aluno.ra ? `- RA ${aluno.ra}` : ''}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="trabalho1">Trabalho 1 (T1)</label>
                            <input
                                id="trabalho1"
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                placeholder="0 a 10"
                                value={t1}
                                onChange={(e) => setT1(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="trabalho2">Trabalho 2 (T2)</label>
                            <input
                                id="trabalho2"
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                placeholder="0 a 10"
                                value={t2}
                                onChange={(e) => setT2(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="nota1">Nota 1 (N1)</label>
                            <input
                                id="nota1"
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                placeholder="0 a 10"
                                value={n1}
                                onChange={(e) => setN1(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="nota2">Nota 2 (N2)</label>
                            <input
                                id="nota2"
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                placeholder="0 a 10"
                                value={n2}
                                onChange={(e) => setN2(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="nota3">Nota 3 (N3)</label>
                            <input
                                id="nota3"
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                placeholder="0 a 10"
                                value={n3}
                                onChange={(e) => setN3(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.botao}>
                            {editando ? "Atualizar Notas" : "Cadastrar Notas"}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}