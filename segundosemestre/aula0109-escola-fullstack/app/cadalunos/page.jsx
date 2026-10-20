'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // 1. IMPORTAR O ROUTER
import Header from "../componentes/header";
import styles from "./page.module.css";

export default function CadAlunos() {
    const router = useRouter(); // 2. INICIALIZAR O ROUTER

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');
    const [idAluno, setIdAluno] = useState(null);
    const [editando, setEditando] = useState(false);

    useEffect(() => {
        const alunoSalvo = localStorage.getItem("alunoEditar");
        if (alunoSalvo) {
            const aluno = JSON.parse(alunoSalvo);
            setIdAluno(aluno.id_aluno);
            setNome(aluno.nome || '');
            setIdade(aluno.idade || '');
            setSerie(aluno.serie || '');
            setRa(aluno.ra || '');
            setEditando(true);
            localStorage.removeItem("alunoEditar");
        }
    }, []);

    async function salvarAluno(event) {
        event.preventDefault();

        try {
            const URL = editando ? "/api/alunos" : "/api/alunos";
            const METODO = editando ? "PUT" : "POST";

            const bodyData = { nome, idade, serie, ra };
            if (editando) bodyData.id_aluno = idAluno;

            const resposta = await fetch(URL, {
                method: METODO,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyData)
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                alert(dados.mensagem || dados.erro || "Erro ao processar o cadastro.");
                return;
            }

            alert(editando ? "Aluno atualizado com sucesso!" : "Aluno cadastrado com sucesso!");
            
            // 3. REDIRECIONAR PARA A LISTA DE ALUNOS
            router.push("/listalunos");

        } catch (error) {
            console.error("Erro ao salvar aluno:", error);
            alert("Erro de conexão ao salvar.");
        }
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <p className={styles.status}>SISTEMA ONLINE</p>
                    <h2>{editando ? "Editar Aluno" : "Cadastro de Alunos"}</h2>
                    <p className={styles.subtitulo}>Preencha os dados do aluno para realizar o cadastro no sistema.</p>

                    <form className={styles.form} onSubmit={salvarAluno}>
                        <div className={styles.campo}>
                            <label htmlFor="nome">Nome</label>
                            <input
                                id="nome"
                                type="text"
                                placeholder="Digite o nome do aluno"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="idade">Idade</label>
                            <input
                                id="idade"
                                type="number"
                                placeholder="Digite a idade"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="serie">Série</label>
                            <input
                                id="serie"
                                type="text"
                                placeholder="Digite a série"
                                value={serie}
                                onChange={(e) => setSerie(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="ra">RA</label>
                            <input
                                id="ra"
                                type="text"
                                placeholder="Digite o RA"
                                value={ra}
                                onChange={(e) => setRa(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.botao}>
                            {editando ? "Atualizar Aluno" : "Cadastrar Aluno"}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}