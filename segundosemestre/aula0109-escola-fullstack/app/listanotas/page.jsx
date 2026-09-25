
'use client'

import { useEffect, useState } from "react"
import Header from "../componentes/header"
import styles from "./page.module.css"

export default function ListNotas() {

    const [notas, setNotas] = useState([])
    const [carregando, setCarregando] = useState(true)

    // BUSCAR NOTAS
    async function carregarNotas() {

        try {

            const resposta = await fetch("/api/notas")
            const dados = await resposta.json()

            setNotas(dados)

        } catch (error) {

            console.error("Erro ao buscar notas:", error)

        } finally {

            setCarregando(false)

        }
    }

    // EXCLUIR NOTA
    async function excluirNota(id) {

        const confirmar = confirm("Deseja realmente excluir esta nota?")

        if (!confirmar) {
            return
        }

        try {

            const resposta = await fetch("/api/notas", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_notas: id
                })
            })

            const dados = await resposta.json()

            if (!resposta.ok) {
                alert(dados.mensagem)
                return
            }

            alert("Nota excluída com sucesso!")

            carregarNotas()

        } catch (error) {

            console.error("Erro ao excluir nota:", error)

            alert("Erro ao excluir nota")

        }
    }

    // EDITAR NOTA
    function editarNota(nota) {

        localStorage.setItem(
            "notaEditar",
            JSON.stringify(nota)
        )

        window.location.href = "/cadanotas"

    }

    useEffect(() => {

        carregarNotas()

    }, [])

    return (
        <>
            <Header />

            <main className={styles.container}>

                <div className={styles.card}>

                    <h2>Lista de Notas</h2>

                    <p className={styles.subtitulo}>
                        Notas cadastradas dos alunos
                    </p>

                    <div className={styles.tabelaContainer}>

                        <table>

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
                                        <td colSpan="7">
                                            Carregando notas...
                                        </td>
                                    </tr>

                                ) : notas.length === 0 ? (

                                    <tr>
                                        <td colSpan="7">
                                            Nenhuma nota cadastrada.
                                        </td>
                                    </tr>

                                ) : (

                                    notas.map((nota) => (

                                        <tr key={nota.id_notas}>

                                            <td>
                                                {nota.nome}
                                            </td>

                                            <td>
                                                {nota.t1}
                                            </td>

                                            <td>
                                                {nota.t2}
                                            </td>

                                            <td>
                                                {nota.n1}
                                            </td>

                                            <td>
                                                {nota.n2}
                                            </td>

                                            <td>
                                                {nota.n3}
                                            </td>

                                            <td className={styles.acoes}>

                                                <button
                                                    className={styles.editar}
                                                    onClick={() => editarNota(nota)}
                                                >
                                                    Editar
                                                </button>

                                                <button
                                                    className={styles.deletar}
                                                    onClick={() => excluirNota(nota.id_notas)}
                                                >
                                                    Deletar
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>
        </>
    )
}

