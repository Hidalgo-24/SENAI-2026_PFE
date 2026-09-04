    'use client';

    import { useState } from "react";
    import Header from "../componentes/header";

    export default function CadAlunos() {

        const [nome, setNome] = useState("");
        const [idade, setIdade] = useState("");
        const [serie, setSerie] = useState("");
        const [ra, setRa] = useState("");

        function salvarAluno(e) {

            e.preventDefault();

            if (!nome || !idade || !serie || !ra) {
                alert("Preencha todos os campos.");
                return;
            }

            const alunosSalvos =
                JSON.parse(localStorage.getItem("alunos")) || [];

            const novoAluno = {
                id: Date.now(),
                nome,
                idade,
                serie,
                ra
            };

            alunosSalvos.push(novoAluno);

            localStorage.setItem(
                "alunos",
                JSON.stringify(alunosSalvos)
            );

            alert("Aluno cadastrado com sucesso!");

            setNome("");
            setIdade("");
            setSerie("");
            setRa("");
        }

        return (
            <>
                <Header />

                <main>

                    <div className="form-container">

                        <div className="form-header">

                            <h2>
                                Cadastro de Alunos
                            </h2>

                            <p>
                                Cadastre um novo aluno no Sistema Escolar SESI.
                            </p>

                        </div>

                        <form
                            className="form"
                            onSubmit={salvarAluno}
                        >

                            <div className="campo">

                                <label htmlFor="nome">
                                    Nome completo
                                </label>

                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="Digite o nome do aluno"
                                    value={nome}
                                    onChange={(e) =>
                                        setNome(e.target.value)
                                    }
                                />

                            </div>

                            <div className="form-row">

                                <div className="campo">

                                    <label htmlFor="idade">
                                        Idade
                                    </label>

                                    <input
                                        id="idade"
                                        type="number"
                                        placeholder="Ex: 15"
                                        value={idade}
                                        onChange={(e) =>
                                            setIdade(e.target.value)
                                        }
                                    />

                                </div>

                                <div className="campo">

                                    <label htmlFor="serie">
                                        Série
                                    </label>

                                    <select
                                        id="serie"
                                        value={serie}
                                        onChange={(e) =>
                                            setSerie(e.target.value)
                                        }
                                    >

                                        <option value="">
                                            Selecione
                                        </option>

                                        <option value="6º Ano">
                                            6º Ano
                                        </option>

                                        <option value="7º Ano">
                                            7º Ano
                                        </option>

                                        <option value="8º Ano">
                                            8º Ano
                                        </option>

                                        <option value="9º Ano">
                                            9º Ano
                                        </option>

                                        <option value="1º Ano">
                                            1º Ano
                                        </option>

                                        <option value="2º Ano">
                                            2º Ano
                                        </option>

                                        <option value="3º Ano">
                                            3º Ano
                                        </option>

                                    </select>

                                </div>

                            </div>

                            <div className="campo">

                                <label htmlFor="ra">
                                    RA
                                </label>

                                <input
                                    id="ra"
                                    type="text"
                                    placeholder="Digite o RA do aluno"
                                    value={ra}
                                    onChange={(e) =>
                                        setRa(e.target.value)
                                    }
                                />

                            </div>

                            <button
                                type="submit"
                                className="botao"
                            >
                                Salvar aluno
                            </button>

                        </form>

                    </div>

                </main>
            </>
        );
    }