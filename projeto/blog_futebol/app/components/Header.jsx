import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-main">
        <Link href="/" className="logo">
          FUT<span>+</span>
        </Link>

        <div className="social-links">
          <a href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="#" target="_blank" rel="noreferrer">
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

          <Link href="/noticias?categoria=brasileirao">
            Brasileirão
          </Link>

          <Link href="/noticias?categoria=mercado-da-bola">
            Mercado da Bola
          </Link>

          <Link href="/noticias?categoria=internacional">
            Futebol Internacional
          </Link>

          <Link href="/noticias?categoria=selecao">
            Seleção Brasileira
          </Link>
        </div>
      </nav>
    </header>
  );
}