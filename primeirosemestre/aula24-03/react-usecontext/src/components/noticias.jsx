function Noticias() {
  return (
    <section className="noticias">
      <h2>Últimas Notícias</h2>

      <div className="container-cards">
        
        <div className="card">
          <img src="https://es1.com.br/wp-content/uploads/2022/10/001-scaled.jpg" alt="Notícia 1" />
          <h3>Propostas</h3>
          <p>O atual presidente Lula e o ex Bolsonaro e os atuias prefeitos das cidades estão fazendo suas propostas.</p>
        </div>

        <div className="card">
          <img src="https://es1.com.br/wp-content/uploads/2023/01/01-17-scaled.jpg" alt="Notícia 2" />
          <h3>Imigrantes iranianos</h3>
          <p>Imigrantes no Brasil, que estão entrando ilegalmente no Brasil por Pernanbuco.</p>
        </div>

        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-cRzUHue6EGZIQxGT40WVVZ-XhdBHDz8kg&shttps://via.placeholder.com/300x180" alt="Notícia 3" />
          <h3>Seguro de vida sem indenizaçaõ</h3>
          <p>Seguro sem indenização, apos grandes incendidos no interior de Minas Gerais.</p>
        </div>

      </div>
    </section>
  );
}

export default Noticias;