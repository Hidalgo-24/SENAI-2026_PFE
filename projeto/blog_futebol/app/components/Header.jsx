import Link from "next/link";

export default function Header() {
  return (
    <header className="header">

      <div className="header-main">

        <Link
          href="/"
          className="logo"
        >
          FUT<span>+</span>
        </Link>

        <div className="social-links">

          <a href="#">
            Instagram
          </a>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            YouTube
          </a>

        </div>

      </div>

      <nav className="navbar">

        <div className="nav-container">

          <Link href="/">
            Início
          </Link>

          <Link href="/noticias">
            Notícias
          </Link>

          <Link href="/noticias">
            Brasileirão
          </Link>

          <Link href="/noticias">
            Mercado da Bola
          </Link>

          <Link href="/noticias">
            Futebol Internacional
          </Link>

          <Link href="/noticias">
            Seleção Brasileira
          </Link>

        </div>

      </nav>

    </header>
  );
}