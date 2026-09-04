
'use client'

import { useEffect, useState } from "react";
import Header from "../componentes/header";

export default function ListAlunos() {

    const [alunos, setAlunos] = useState([
        {
            id: "07",
            nome: "Estevan Fernando",
            idade: 17,
            serie: "3º B",
            ra: "3876"
        }
    ]);

    const [busca, setBusca] = useState("");

    useEffect(() => {

        const alunosSalvos = localStorage.getItem("alunos");

        if (alunosSalvos) {
            const dados = JSON.parse(alunosSalvos);

            if (dados.length > 0) {
                setAlunos(dados);
            }
        }

    }, []);

    function deletarAluno(id) {

        const confirmacao = confirm(
            "Tem certeza que deseja excluir este aluno?"
        );

        if (!confirmacao) return;

        const novaLista = alunos.filter(
            (aluno) => aluno.id !== id
        );

        setAlunos(novaLista);

        localStorage.setItem(
            "alunos",
            JSON.stringify(novaLista)
        );
    }

    const alunosFiltrados = alunos.filter((aluno) =>
        aluno.nome.toLowerCase().includes(busca.toLowerCase()) ||
        String(aluno.ra).includes(busca)
    );

    return (
        <>
            <Header />

            <main>

                {/* CABEÇALHO DA PÁGINA */}

                <div className="titulo-pagina">

                    <h2>
                        Lista de Alunos
                    </h2>

                    <p>
                        Consulte e gerencie os alunos cadastrados
                        no Sistema Escolar SESI.
                    </p>

                </div>


                {/* RESUMO */}

                <div className="cards">

                    <div className="card">

                        <div className="icone">
                            👨‍🎓
                        </div>

                        <h3>
                            Total de alunos
                        </h3>

                        <p style={{
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "#e30613",
                            marginTop: "10px"
                        }}>
                            {alunos.length}
                        </p>

                    </div>


                    <div className="card">

                        <div className="icone">
                            🏫
                        </div>

                        <h3>
                            Instituição
                        </h3>

                        <p>
                            SESI - São Paulo
                        </p>

                    </div>


                    <div className="card">

                        <div className="icone">
                            📚
                        </div>

                        <h3>
                            Sistema
                        </h3>

                        <p>
                            Gestão Escolar
                        </p>

                    </div>

                </div>


                {/* LISTA */}

                <div
                    className="tabela-container"
                    style={{ marginTop: "30px" }}
                >

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "20px",
                            marginBottom: "20px",
                            flexWrap: "wrap"
                        }}
                    >

                        <div>
                            <h3>
                                Alunos cadastrados
                            </h3>

                            <p style={{
                                color: "#777",
                                marginTop: "5px",
                                fontSize: "14px"
                            }}>
                                Consulte as informações dos estudantes.
                            </p>
                        </div>


                        {/* PESQUISA */}

                        <input
                            type="text"
                            placeholder="🔎 Buscar aluno ou RA..."
                            value={busca}
                            onChange={(e) =>
                                setBusca(e.target.value)
                            }
                            style={{
                                padding: "12px 15px",
                                border: "1px solid #d3d3d3",
                                borderRadius: "7px",
                                width: "280px",
                                outline: "none",
                                fontSize: "14px"
                            }}
                        />

                    </div>


                    {/* TABELA */}

                    {alunosFiltrados.length > 0 ? (

                        <table className="tabela">

                            <thead>
                                <tr>

                                    <th>
                                        ID
                                    </th>

                                    <th>
                                        Nome
                                    </th>

                                    <th>
                                        Idade
                                    </th>

                                    <th>
                                        Série
                                    </th>

                                    <th>
                                        RA
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                    <th>
                                        Ações
                                    </th>

                                </tr>
                            </thead>


                            <tbody>

                                {alunosFiltrados.map((aluno) => (

                                    <tr key={aluno.id}>

                                        <td>
                                            <strong>
                                                {aluno.id}
                                            </strong>
                                        </td>

                                        <td>
                                            <strong>
                                                {aluno.nome}
                                            </strong>
                                        </td>

                                        <td>
                                            {aluno.idade} anos
                                        </td>

                                        <td>
                                            {aluno.serie}
                                        </td>

                                        <td>
                                            {aluno.ra}
                                        </td>

                                        <td>

                                            <span
                                                style={{
                                                    background: "#e8f7ee",
                                                    color: "#087f3f",
                                                    padding: "5px 10px",
                                                    borderRadius: "20px",
                                                    fontSize: "12px",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                Ativo
                                            </span>

                                        </td>

                                        <td>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "8px"
                                                }}
                                            >

                                                <button
                                                    style={{
                                                        border: "none",
                                                        background: "#eeeeee",
                                                        padding: "8px 12px",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        fontWeight: "bold"
                                                    }}
                                                    onClick={() =>
                                                        alert(
                                                            `Editar aluno: ${aluno.nome}`
                                                        )
                                                    }
                                                >
                                                    ✏️ Editar
                                                </button>


                                                <button
                                                    style={{
                                                        border: "none",
                                                        background: "#ffe5e5",
                                                        color: "#d60000",
                                                        padding: "8px 12px",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        fontWeight: "bold"
                                                    }}
                                                    onClick={() =>
                                                        deletarAluno(aluno.id)
                                                    }
                                                >
                                                    🗑️ Deletar
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    ) : (

                        <div
                            style={{
                                textAlign: "center",
                                padding: "50px 20px",
                                color: "#777"
                            }}
                        >

                            <div
                                style={{
                                    fontSize: "45px",
                                    marginBottom: "15px"
                                }}
                            >
                                🔍
                            </div>

                            <h3>
                                Nenhum aluno encontrado
                            </h3>

                            <p style={{
                                marginTop: "8px"
                            }}>
                                Tente pesquisar por outro nome ou RA.
                            </p>

                        </div>

                    )}

                </div>

            </main>
        </>
    );
}
