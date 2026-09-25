
'use client'

import { useEffect, useState } from "react"
import Header from "../componentes/header"
import styles from "./page.module.css"

export default function CadNotas() {

    const [nomeAluno, setNomeAluno] = useState('')
    const [t1, setT1] = useState('')
    const [t2, setT2] = useState('')
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')

    const [alunos, setAlunos] = useState([])
    const [idNotas, setIdNotas] = useState(null)
    const [editando, setEditando] = useState(false)

    // BUSCAR ALUNOS
    async function carregarAlunos() {

        try {

            const resposta = await fetch("/api/alunos")
            const dados = await resposta.json()

            setAlunos(dados)

        } catch (error) {

            console.error("Erro ao buscar alunos:", error)

        }
    }

    // VERIFICAR SE ESTÁ EDITANDO
    useEffect(() => {

        carregarAlunos()

        const notaSalva = localStorage.getItem("notaEditar")

        if (notaSalva) {

            const nota = JSON.parse(notaSalva)

            setIdNotas(nota.id_notas)
            setNomeAluno(nota.nome)
            setT1(nota.t1)
            setT2(nota.t2)
            setN1(nota.n1)
            setN2(nota.n2)
            setN3(nota.n3)

            setEditando(true)

            localStorage.removeItem("notaEditar")
        }

    }, [])

    // SALVAR OU EDITAR NOTA
    async function salvarNota(e) {

        e.preventDefault()

        // Procurar aluno pelo nome
        const aluno = alunos.find(
            (item) =>
                item.nome.toLowerCase() === nomeAluno.trim().toLowerCase()
        )

        if (!aluno) {

            alert("Aluno não encontrado. Cadastre o aluno primeiro.")

            return
        }

        try {

            let resposta

            if (editando) {

                // EDITAR
                resposta = await fetch("/api/notas", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_notas: idNotas,
                        aluno_id: aluno.id_aluno,
                        t1: t1,
                        t2: t2,
                        n1: n1,
                        n2: n2,
                        n3: n3
                    })
                })

            } else {

                // SALVAR
                resposta = await fetch("/api/notas", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        aluno_id: aluno.id_aluno,
                        t1: t1,
                        t2: t2,
                        n1: n1,
                        n2: n2,
                        n3: n3
                    })
                })

            }

            const dados = await resposta.json()

            if (!resposta.ok) {

                alert(dados.mensagem || dados.erro)

                return
            }

            if (editando) {

                alert("Notas atualizadas com sucesso!")

            } else {

                alert("Notas cadastradas com sucesso!")

            }

            // LIMPAR FORMULÁRIO
            setNomeAluno('')
            setT1('')
            setT2('')
            setN1('')
            setN2('')
            setN3('')

            setIdNotas(null)
            setEditando(false)

        } catch (error) {

            console.error("Erro ao salvar nota:", error)

            alert("Erro ao salvar nota")

        }
    }

    return (
        <>
            <Header />

            <main className={styles.container}>

                <div className={styles.card}>

                    <h2>
                        {editando
                            ? "Editar Notas"
                            : "Cadastro de Notas"}
                    </h2>

                    <p className={styles.subtitulo}>
                        {editando
                            ? "Altere as notas do aluno"
                            : "Preencha as notas do aluno"}
                    </p>

                    <form onSubmit={salvarNota}>

                        <div className={styles.campo}>

                            <label htmlFor="nomeAluno">
                                Nome do aluno
                            </label>

                            <input
                                id="nomeAluno"
                                type="text"
                                placeholder="Digite o nome do aluno"
                                value={nomeAluno}
                                onChange={(e) =>
                                    setNomeAluno(e.target.value)
                                }
                                required
                            />

                        </div>

                        <div className={styles.linha}>

                            <div className={styles.campo}>

                                <label htmlFor="t1">
                                    T1 - Trabalho 1
                                </label>

                                <input
                                    id="t1"
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    placeholder="0 a 10"
                                    value={t1}
                                    onChange={(e) =>
                                        setT1(e.target.value)
                                    }
                                    required
                                />

                            </div>

                            <div className={styles.campo}>

                                <label htmlFor="t2">
                                    T2 - Trabalho 2
                                </label>

                                <input
                                    id="t2"
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    placeholder="0 a 10"
                                    value={t2}
                                    onChange={(e) =>
                                        setT2(e.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>

                        <div className={styles.linha}>

                            <div className={styles.campo}>

                                <label htmlFor="n1">
                                    N1 - Nota 1
                                </label>

                                <input
                                    id="n1"
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    placeholder="0 a 10"
                                    value={n1}
                                    onChange={(e) =>
                                        setN1(e.target.value)
                                    }
                                    required
                                />

                            </div>

                            <div className={styles.campo}>

                                <label htmlFor="n2">
                                    N2 - Nota 2
                                </label>

                                <input
                                    id="n2"
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    placeholder="0 a 10"
                                    value={n2}
                                    onChange={(e) =>
                                        setN2(e.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>

                        <div className={styles.campo}>

                            <label htmlFor="n3">
                                N3 - Nota 3
                            </label>

                            <input
                                id="n3"
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                placeholder="0 a 10"
                                value={n3}
                                onChange={(e) =>
                                    setN3(e.target.value)
                                }
                                required
                            />

                        </div>

                        <button type="submit">

                            {editando
                                ? "Atualizar notas"
                                : "Salvar notas"}

                        </button>

                    </form>

                </div>

            </main>
        </>
    )
}
