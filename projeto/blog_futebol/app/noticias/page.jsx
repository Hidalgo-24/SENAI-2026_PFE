import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";

const noticias = [
  {
    id: 1,
    titulo: "Mercado da bola movimenta os grandes clubes",
    categoria: "Mercado da Bola",
    data: "11 de agosto de 2026",
    imagem: "/images/futebol1.jpg",
  },

  {
    id: 2,
    titulo: "Brasileirão chega a uma fase decisiva",
    categoria: "Brasileirão",
    data: "11 de agosto de 2026",
    imagem: "/images/futebol2.jpg",
  },

  {
    id: 3,
    titulo: "Brasileiros são destaque no futebol europeu",
    categoria: "Internacional",
    data: "10 de agosto de 2026",
    imagem: "/images/futebol3.jpg",
  },

  {
    id: 4,
    titulo: "Confira os principais jogos desta semana",
    categoria: "Futebol",
    data: "10 de agosto de 2026",
    imagem: "/images/futebol4.jpg",
  },

  {
    id: 5,
    titulo: "Clubes se preparam para os próximos desafios",
    categoria: "Clubes",
    data: "09 de agosto de 2026",
    imagem: "/images/futebol1.jpg",
  },

  {
    id: 6,
    titulo: "Veja as novidades da Seleção Brasileira",
    categoria: "Seleção",
    data: "09 de agosto de 2026",
    imagem: "/images/futebol2.jpg",
  },
];

export default function Noticias() {
  return (
    <>
      <Header />

      <main>

        <section className="page-title">

          <div className="container">

            <span>
              FUT+
            </span>

            <h1>
              Notícias
            </h1>

            <p>
              As principais atualizações
              do mundo do futebol.
            </p>

          </div>

        </section>

        <section className="section">

          <div className="container">

            <div className="news-grid">

              {noticias.map((noticia) => (
                <NewsCard
                  key={noticia.id}
                  noticia={noticia}
                />
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}