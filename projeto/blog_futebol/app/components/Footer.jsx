import Link from "next/link";

export default function footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>
            FUT<span>+</span>
          </h2>

          <p>
            Notícias, informações e tudo
            o que acontece no mundo
            do futebol.
          </p>

        </div>

        <div className="footer-column">

          <h3>
            Navegação
          </h3>

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

        </div>

        <div className="footer-column">

          <h3>
            Futebol
          </h3>

          <Link href="/noticias">
            Futebol Internacional
          </Link>

          <Link href="/noticias">
            Seleção Brasileira
          </Link>

          <Link href="/noticias">
            Clubes
          </Link>

        </div>

        <div className="footer-column">

          <h3>
            Redes sociais
          </h3>

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

      <div className="footer-bottom">

        <p>
          © 2026 FUT+ — Todos os direitos reservados.
        </p>

      </div>

    </footer>
  );
}