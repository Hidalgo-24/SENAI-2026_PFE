import Link from "next/link";
import Header from "../componentes/header";

export default function Principal() {
    return (
        <>
            <Header />

            <main className="pagina-principal">

                <section className="hero">

                    <small>SISTEMA ESCOLAR SESI</small>

                    <h1>
                        Bem-vindo ao Sistema Escolar
                    </h1>

                    <p>
                        Gerencie alunos, cadastros e notas de forma
                        simples e organizada através do sistema escolar.
                    </p>

                </section>

                <section className="cards">

                    <div className="card">
                        <div className="icone">👨‍🎓</div>

                        <h3>Alunos</h3>

                        <p>
                            Cadastre novos alunos e consulte
                            as informações dos estudantes.
                        </p>

                        <Link href="/cadalunos">
                            Cadastrar aluno →
                        </Link>
                    </div>

                    <div className="card">
                        <div className="icone">📚</div>

                        <h3>Notas</h3>

                        <p>
                            Registre e acompanhe as notas
                            dos alunos cadastrados.
                        </p>

                        <Link href="/cadanotas">
                            Cadastrar nota →
                        </Link>
                    </div>

                    <div className="card">
                        <div className="icone">🏫</div>

                        <h3>SESI</h3>

                        <p>
                            O SESI São Paulo atua na educação,
                            oferecendo formação e desenvolvimento
                            para seus estudantes.
                        </p>
                    </div>

                </section>

                <section
                    style={{
                        marginTop: "35px",
                        background: "#fff",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
                    }}
                >

                    <h2 style={{ marginBottom: "12px" }}>
                        Sobre o sistema
                    </h2>

                    <p style={{
                        color: "#666",
                        lineHeight: "1.7"
                    }}>
                        Este sistema foi desenvolvido para facilitar
                        o gerenciamento das informações escolares,
                        permitindo cadastrar alunos, consultar registros
                        e administrar notas.
                    </p>

                </section>

            </main>
        </>
    );
}