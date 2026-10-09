"use client";

import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";

const noticias = [
  {
    id: 1,
    titulo: "Mercado da bola movimenta os grandes clubes",
    categoria: "Mercado da Bola",
    slugCategoria: "mercado-da-bola",
    data: "11 de agosto de 2026",
    imagem: "/images/futebol1.jpg",
  },
  {
    id: 2,
    titulo: "Brasileirão chega a uma fase decisiva",
    categoria: "Brasileirão",
    slugCategoria: "brasileirao",
    data: "11 de agosto de 2026",
    imagem: "/images/futebol2.jpg",
  },
  {
    id: 3,
    titulo: "Brasileiros são destaque no futebol europeu",
    categoria: "Futebol Internacional",
    slugCategoria: "internacional",
    data: "10 de agosto de 2026",
    imagem: "/images/futebol3.jpg",
  },
  {
    id: 4,
    titulo: "Confira os principais jogos desta semana",
    categoria: "Futebol",
    slugCategoria: "futebol",
    data: "10 de agosto de 2026",
    imagem: "/images/futebol4.jpg",
  },
  {
    id: 5,
    titulo: "Clubes se preparam para os próximos desafios",
    categoria: "Clubes",
    slugCategoria: "clubes",
    data: "09 de agosto de 2026",
    imagem: "/images/futebol1.jpg",
  },
  {
    id: 6,
    titulo: "Veja as novidades da Seleção Brasileira",
    categoria: "Seleção Brasileira",
    slugCategoria: "selecao",
    data: "09 de agosto de 2026",
    imagem: "/images/futebol2.jpg",
  },
];

export default function Noticias() {
  const searchParams = useSearchParams();
  const categoriaParam = searchParams.get("categoria");

  // Filtra as notícias se o parâmetro ?categoria= estiver na URL
  const noticiasFiltradas = categoriaParam
    ? noticias.filter((item) => item.slugCategoria === categoriaParam)
    : noticias;

  return (
    <>
      <Header />

      <main>
        <section className="page-title">
          <div className="container">
            <span>FUT+</span>

            <h1>
              {categoriaParam
                ? noticiasFiltradas[0]?.categoria || "Notícias"
                : "Notícias"}
            </h1>

            <p>
              {categoriaParam
                ? `Exibindo atualizações sobre ${noticiasFiltradas[0]?.categoria || "a categoria"}.`
                : "As principais atualizações do mundo do futebol."}
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {noticiasFiltradas.length > 0 ? (
              <div className="news-grid">
                {noticiasFiltradas.map((noticia) => (
                  <NewsCard key={noticia.id} noticia={noticia} />
                ))}
              </div>
            ) : (
              <p>Nenhuma notícia encontrada para esta categoria.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}