import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/Banner.png";

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        {/* Seção Hero com o Banner */}
        <section style={styles.heroSection}>
          <div style={styles.bannerWrapper}>
            <Image
              src={Banner}
              alt="Banner Terceirão Shark 2026"
              priority
              style={styles.bannerImg}
            />
          </div>
        </section>

        {/* Seção de Boas-Vindas */}
        <section style={styles.welcomeSection}>
          <h2 style={styles.title}>
            Bem-vindos ao Ano do <span style={styles.highlight}>Tubarão</span> 🦈
          </h2>
          <p style={styles.subtitle}>
            A jornada do 3B - SESI Mirandópolis rumo à formatura de 2026 começou.
            Prepare-se para registrar cada momento, festa e conquista da nossa turma!
          </p>
        </section>

        {/* Grid de Destaques / Funcionalidades */}
        <section style={styles.gridSection}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>📸</div>
            <h3 style={styles.cardTitle}>Galeria de Fotos</h3>
            <p style={styles.cardText}>
              Confira os melhores registros dos nossos eventos, trotes e momentos inesquecíveis.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🎓</div>
            <h3 style={styles.cardTitle}>Nossa História</h3>
            <p style={styles.cardText}>
              Saiba mais sobre a trajetória da turma do 3B e o orgulho de fazer parte do SESI.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🌊</div>
            <h3 style={styles.cardTitle}>Rumo ao Futuro</h3>
            <p style={styles.cardText}>
              O Terceirão é só o começo. Estamos prontos para dominar novos mares!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem 1.5rem',
  },
  heroSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  bannerWrapper: {
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 229, 255, 0.25), 0 0 15px rgba(0, 0, 0, 0.8)',
    border: '1px solid rgba(0, 229, 255, 0.3)',
  },
  bannerImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
  },
  welcomeSection: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 3.5rem auto',
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: '1rem',
  },
  highlight: {
    color: '#00E5FF',
    textShadow: '0 0 12px rgba(0, 229, 255, 0.5)',
  },
  subtitle: {
    fontSize: '1.15rem',
    color: '#8E9AAF',
    lineHeight: '1.7',
  },
  gridSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'rgba(13, 27, 42, 0.7)',
    border: '1px solid rgba(0, 95, 115, 0.6)',
    borderRadius: '12px',
    padding: '2rem 1.5rem',
    textAlign: 'center',
    backdropFilter: 'blur(5px)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#00E5FF',
    marginBottom: '0.8rem',
  },
  cardText: {
    color: '#8E9AAF',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
};
