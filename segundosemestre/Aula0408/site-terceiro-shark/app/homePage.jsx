import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/Banner.jpg";

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
              alt="Banner Terceirão mais troxa de 2026"
              priority
              style={styles.bannerImg}
            />
          </div>
        </section>

        {/* Seção de Boas-Vindas */}
        <section style={styles.welcomeSection}>
          <h2 style={styles.title}>
            Bem-vindos ao Ano do <span style={styles.highlight}>Terceirão</span> 🦈
          </h2>
          <p style={styles.subtitle}>
            A jornada do 3B - SESI Mirandópolis rumo ao fim de 2026 começou.
            Prepare-se para registrar cada momento, festa e conquista dessa turma troxa!
          </p>
        </section>

        {/* Grid de Destaques / Funcionalidades */}
        <section style={styles.gridSection}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>📸</div>
            <h3 style={styles.cardTitle}>Fotos sapequilas do 3B</h3>
            <p style={styles.cardText}>
              Confira os melhores registros dos nossos eventos, trotes e momentos inesquecíveis.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🎓</div>
            <h3 style={styles.cardTitle}>O fim do 3B</h3>
            <p style={styles.cardText}>
              Saiba mais sobre a trajetória da turma do 3B e o orgulho de fazer parte do SESI.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🌊</div>
            <h3 style={styles.cardTitle}>Rumo ao Futuro</h3>
            <p style={styles.cardText}>
              O Terceirão é o fim. Nunca mais iremos ver as cara de troxa desses alunos feios!
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
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '4rem 1.5rem 6rem 1.5rem',
  },
  heroSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3.5rem',
  },
  bannerWrapper: {
    width: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 12px 32px rgba(168, 85, 247, 0.25), 0 0 20px rgba(0, 0, 0, 0.8)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
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
    margin: '0 auto 4rem auto',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '900',
    color: '#F8FAFC',
    marginBottom: '1rem',
    letterSpacing: '-0.5px',
  },
  highlight: {
    color: '#A855F7',
    textShadow: '0 0 16px rgba(168, 85, 247, 0.6)',
  },
  subtitle: {
    fontSize: '1.15rem',
    color: '#94A3B8',
    lineHeight: '1.7',
    fontWeight: '400',
  },
  gridSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'rgba(23, 15, 38, 0.55)',
    border: '1px solid rgba(168, 85, 247, 0.25)',
    borderRadius: '16px',
    padding: '2.5rem 1.75rem',
    textAlign: 'center',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
  },
  cardIcon: {
    fontSize: '2.8rem',
    marginBottom: '1.25rem',
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: '#C084FC',
    marginBottom: '0.75rem',
    fontWeight: '700',
  },
  cardText: {
    color: '#94A3B8',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
};