import Header from "../components/header";
import Footer from "../components/footer";

export default function Fotos() {
  // Exemplo de lista de fotos/eventos da turma
  const fotosTurma = [
    { id: 1, titulo: "Trote do ano todo", tag: "Trotes", emoji: "🎭" },
    { id: 2, titulo: "Interclasses SESI", tag: "Interclasse", emoji: "🏆" },
    { id: 3, titulo: "Resenha o ano todo", tag: "Resenha", emoji: "😹" },
    { id: 4, titulo: "Churrasco de confraternização", tag: "Churrasco", emoji: "🎉" },
    { id: 5, titulo: "Foto Oficial da Turma 3B", tag: "Oficial", emoji: "🦈" },
    { id: 6, titulo: "Dia do Rato maluco", tag: "Rato", emoji: "🐀" },
  ];

  return (
    <>
      <Header />
      <main style={styles.main}>
        {/* Banner do Cabeçalho */}
        <section style={styles.headerSection}>
          <h1 style={styles.title}>
            Galeria do <span style={styles.highlight}>3B</span> 📸
          </h1>
          <p style={styles.subtitle}>
            Os melhores momentos e memórias da nossa trajetória em 2026.
          </p>
        </section>

        {/* Grid de Fotos */}
        <section style={styles.galleryGrid}>
          {fotosTurma.map((item) => (
            <div key={item.id} style={styles.photoCard}>
              <div style={styles.imagePlaceholder}>
                <span style={styles.cardEmoji}>{item.emoji}</span>
              </div>
              <div style={styles.cardInfo}>
                <span style={styles.tag}>{item.tag}</span>
                <h3 style={styles.cardTitle}>{item.titulo}</h3>
              </div>
            </div>
          ))}
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
  headerSection: {
    textAlign: 'center',
    marginBottom: '3.5rem',
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
    color: '#94A3B8',
    fontSize: '1.15rem',
    fontWeight: '400',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  photoCard: {
    backgroundColor: 'rgba(23, 15, 38, 0.75)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(12px)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
    background: 'radial-gradient(circle at center, #2e1065 0%, #0f172a 100%)',
  },
  cardEmoji: {
    fontSize: '3.5rem',
    filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))',
  },
  cardInfo: {
    padding: '1.5rem',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: 'rgba(168, 85, 247, 0.15)',
    color: '#C084FC',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '0.3rem 0.75rem',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.75rem',
    border: '1px solid rgba(168, 85, 247, 0.35)',
  },
  cardTitle: {
    color: '#F8FAFC',
    fontSize: '1.15rem',
    margin: 0,
    fontWeight: '700',
  },
};