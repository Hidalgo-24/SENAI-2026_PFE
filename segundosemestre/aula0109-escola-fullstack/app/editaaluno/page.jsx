'use client';

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Header from "../componentes/header";
import styles from "./page.module.css";

export default function EditaAluno() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const id = searchParams.get("id");


    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');


    useEffect(() => {

        if (!id) {
            return;
        }


        async function carregarAluno() {

            try {

                const resposta = await fetch("/api/alunos");

                const dados = await resposta.json();


                const aluno = dados.find(
                    (item) => item.id_aluno === Number(id)
                );


                if (!aluno) {

                    alert("Aluno não encontrado!");

                    router.push("/listalunos");

                    return;

                }


                setNome(aluno.nome);
                setIdade(aluno.idade);
                setSerie(aluno.serie);
                setRa(aluno.ra);


            } catch (error) {

                console.error(error);

                alert("Erro ao carregar aluno");

            }

        }


        carregarAluno();

    }, [id, router]);


    async function salvarAluno(e) {

        e.preventDefault();


        try {

            const resposta = await fetch("/api/alunos", {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    id_aluno: Number(id),

                    nome: nome,

                    idade: Number(idade),

                    serie: serie,

                    ra: ra

                })

            });


            const dados = await resposta.json();


            if (!resposta.ok) {

                alert(dados.mensagem);

                return;

            }


            alert("Aluno atualizado com sucesso!");


            router.push("/listalunos");


        } catch (error) {

            console.error(error);

            alert("Erro ao atualizar aluno");

        }

    }


    return (
        <>
            <Header />

            <main className={styles.container}>

                <div className={styles.card}>

                    <h2>Editar Aluno</h2>

                    <p className={styles.subtitulo}>
                        Altere os dados do aluno
                    </p>


                    <form onSubmit={salvarAluno}>


                        <div className={styles.campo}>

                            <label htmlFor="nome">
                                Nome
                            </label>

                            <input
                                id="nome"
                                type="text"
                                placeholder="Digite o nome do aluno"
                                value={nome}
                                onChange={(e) =>
                                    setNome(e.target.value)
                                }
                                required
                            />

                        </div>


                        <div className={styles.linha}>


                            <div className={styles.campo}>

                                <label htmlFor="idade">
                                    Idade
                                </label>

                                <input
                                    id="idade"
                                    type="number"
                                    placeholder="Digite a idade"
                                    value={idade}
                                    onChange={(e) =>
                                        setIdade(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            <div className={styles.campo}>

                                <label htmlFor="serie">
                                    Série
                                </label>

                                <input
                                    id="serie"
                                    type="text"
                                    placeholder="Ex: 3B"
                                    value={serie}
                                    onChange={(e) =>
                                        setSerie(e.target.value)
                                    }
                                    required
                                />

                            </div>


                        </div>


                        <div className={styles.campo}>

                            <label htmlFor="ra">
                                RA
                            </label>

                            <input
                                id="ra"
                                type="text"
                                placeholder="Digite o RA"
                                value={ra}
                                onChange={(e) =>
                                    setRa(e.target.value)
                                }
                                required
                            />

                        </div>


                        <button type="submit">
                            Salvar alterações
                        </button>


                        <button
                            type="button"
                            onClick={() => router.push("/listalunos")}
                        >
                            Cancelar
                        </button>


                    </form>

                </div>

            </main>
        </>
    );
}