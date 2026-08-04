import Header from "../components/header";
import Footer from "../components/footer";

export default function Fotos() {
  // Exemplo de lista de fotos/eventos da turma (você pode trocar pelas imagens reais)
  const fotosTurma = [
    { id: 1, titulo: "Trote de Início de Ano", tag: "Trotes", emoji: "🎭" },
    { id: 2, titulo: "Interclasses SESI", tag: "Esportes", emoji: "🏆" },
    { id: 3, titulo: "Aula de Biologia Marinha", tag: "Aulas", emoji: "🔬" },
    { id: 4, titulo: "Churrasco do Terceirão", tag: "Festas", emoji: "🎉" },
    { id: 5, titulo: "Foto Oficial da Turma 3B", tag: "Oficial", emoji: "🦈" },
    { id: 6, titulo: "Dia do Cabelo Maluco", tag: "Trotes", emoji: "🤪" },
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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1.5rem 5rem 1.5rem',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '3.5rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: '0.8rem',
  },
  highlight: {
    color: '#00E5FF',
    textShadow: '0 0 12px rgba(0, 229, 255, 0.5)',
  },
  subtitle: {
    color: '#8E9AAF',
    fontSize: '1.1rem',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  photoCard: {
    backgroundColor: 'rgba(13, 27, 42, 0.7)',
    border: '1px solid rgba(0, 229, 255, 0.25)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(8px)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  imagePlaceholder: {
    width: '100%',
    height: '200px',
    backgroundColor: '#070f15',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(0, 95, 115, 0.4)',
    background: 'linear-gradient(135deg, #070f15 0%, #002b36 100%)',
  },
  cardEmoji: {
    fontSize: '3.5rem',
  },
  cardInfo: {
    padding: '1.2rem',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: 'rgba(0, 229, 255, 0.15)',
    color: '#00E5FF',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    padding: '0.25rem 0.6rem',
    borderRadius: '20px',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
    border: '1px solid rgba(0, 229, 255, 0.3)',
  },
  cardTitle: {
    color: '#F4F6F8',
    fontSize: '1.1rem',
    margin: 0,
    fontWeight: '600',
  },
};