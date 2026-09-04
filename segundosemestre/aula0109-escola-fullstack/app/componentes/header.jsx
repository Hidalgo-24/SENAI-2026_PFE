import Link from "next/link";
import Image from "next/image";
import logo from "../image/Sesi-SP.jpg";

export default function Header() {
    return (
        <header className="header">

            <div className="top-bar">

                <div className="logo-area">
                    <Image
                        src={logo}
                        alt="Logo SESI"
                        width={180}
                        height={65}
                        className="logo"
                    />

                    <div className="logo-info">
                        <strong>SISTEMA ESCOLAR</strong>
                        <span>SESI - São Paulo</span>
                    </div>
                </div>

                <div className="header-info">
                    <span>🏫 Educação SESI</span>
                    <span>📚 Sistema Escolar</span>
                </div>

            </div>

            <nav className="navbar">
                <div className="nav-container">

                    <ul className="menu">

                        <li>
                            <Link href="/">
                                🏠 Início
                            </Link>
                        </li>

                        <li className="cad-alunos">
                            <Link href="/cadalunos">
                                👨‍🎓 Cadastro - Alunos
                            </Link>
                        </li>

                        <li className="list-alunos">
                            <Link href="/listalunos">
                                📋 Lista - Alunos
                            </Link>
                        </li>

                        <li className="cad-notas">
                            <Link href="/cadanotas">
                                📝 Cadastro - Notas
                            </Link>
                        </li>

                        <li className="list-notas">
                            <Link href="/listanotas">
                                📊 Lista - Notas
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>

        </header>
    );
}