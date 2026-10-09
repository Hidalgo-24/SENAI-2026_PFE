import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";

const noticias = [
  {
    id: 1,
    slug: "mercado-da-bola-movimenta-os-grandes-clubes",
    titulo: "Mercado da bola movimenta os grandes clubes",
    resumo: "Janela de transferências esquenta com novas propostas e negociações de peso para a temporada.",
    categoria: "Mercado da Bola",
    data: "11 de agosto de 2026",
  },
  {
    id: 2,
    slug: "brasileirao-chega-a-uma-fase-decisiva",
    titulo: "Brasileirão chega a uma fase decisiva",
    resumo: "Disputa pelo topo da tabela e briga contra o rebaixamento afunilam o campeonato.",
    categoria: "Brasileirão",
    data: "11 de agosto de 2026",
  },
  {
    id: 3,
    slug: "brasileiros-sao-destaque-no-futebol-europeu",
    titulo: "Brasileiros são destaque no futebol europeu",
    resumo: "Atletas nacionais se consolidam nas principais ligas da Europa com atuações decisivas.",
    categoria: "Internacional",
    data: "10 de agosto de 2026",
  },
  {
    id: 4,
    slug: "confira-os-principais-jogos-desta-semana",
    titulo: "Confira os principais jogos desta semana",
    resumo: "Guia completo com datas, horários e onde acompanhar os grandes confrontos.",
    categoria: "Futebol",
    data: "10 de agosto de 2026",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* DESTAQUE */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="hero-category">DESTAQUE</span>

              <h1>
                O futebol não para.
                <br />
                A gente conta tudo.
              </h1>

              <p>
                Notícias, atualizações, mercado da bola, Brasileirão e tudo
                que movimenta o mundo do futebol.
              </p>

              <Link href="/noticias" className="hero-button">
                VER NOTÍCIAS
              </Link>
            </div>
          </div>
        </section>

        {/* ÚLTIMAS NOTÍCIAS */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div className="heading-line"></div>
              <h2>Últimas notícias</h2>
            </div>

            <div className="news-grid">
              {noticias.map((noticia) => (
                <NewsCard key={noticia.id} noticia={noticia} />
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section className="categories-section">
          <div className="container">
            <div className="section-heading light">
              <div className="heading-line"></div>
              <h2>Explore o futebol</h2>
            </div>

            <div className="category-grid">
              <Link href="/noticias?categoria=brasileirao" className="category-box">
                <span>01</span>
                <h3>Brasileirão</h3>
                <p>Notícias e informações do campeonato brasileiro.</p>
              </Link>

              <Link href="/noticias?categoria=mercado-da-bola" className="category-box">
                <span>02</span>
                <h3>Mercado da Bola</h3>
                <p>Contratações, negociações e rumores.</p>
              </Link>

              <Link href="/noticias?categoria=internacional" className="category-box">
                <span>03</span>
                <h3>Internacional</h3>
                <p>Tudo sobre o futebol fora do Brasil.</p>
              </Link>

              <Link href="/noticias?categoria=selecao" className="category-box">
                <span>04</span>
                <h3>Seleção</h3>
                <p>Notícias da Seleção Brasileira.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* MAIS LIDAS */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div className="heading-line"></div>
              <h2>Mais lidas</h2>
            </div>

            <div className="popular">
              <article className="popular-item">
                <strong>01</strong>
                <div>
                  <span>FUTEBOL</span>
                  <h3>
                    <Link href="/noticias/as-principais-noticias-do-futebol-brasileiro">
                      As principais notícias do futebol brasileiro
                    </Link>
                  </h3>
                </div>
              </article>

              <article className="popular-item">
                <strong>02</strong>
                <div>
                  <span>MERCADO DA BOLA</span>
                  <h3>
                    <Link href="/noticias/clubes-brasileiros-movimentam-o-mercado">
                      Clubes brasileiros movimentam o mercado
                    </Link>
                  </h3>
                </div>
              </article>

              <article className="popular-item">
                <strong>03</strong>
                <div>
                  <span>INTERNACIONAL</span>
                  <h3>
                    <Link href="/noticias/brasileiros-ganham-destaque-no-futebol-europeu">
                      Brasileiros ganham destaque no futebol europeu
                    </Link>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}