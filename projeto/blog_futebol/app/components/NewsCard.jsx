import Link from "next/link";

export default function NewsCard({ noticia }) {
  // Define a rota para a notícia usando o slug (ou id se preferir: `/noticias/${noticia.id}`)
  const linkHref = noticia.slug ? `/noticias/${noticia.slug}` : "/noticias";

  return (
    <article className="news-card">
      <Link href={linkHref}>
        <div className="news-content">
          <div className="news-header">
            <span className="news-category">
              {noticia.categoria}
            </span>
            <time className="news-date">
              {noticia.data}
            </time>
          </div>

          <h3>
            {noticia.titulo}
          </h3>

          {noticia.resumo && (
            <p className="news-excerpt">
              {noticia.resumo}
            </p>
          )}

          <span className="news-read-more">
            Ler artigo →
          </span>
        </div>
      </Link>
    </article>
  );
}