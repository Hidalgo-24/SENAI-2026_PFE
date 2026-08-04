import Header from "../components/header";
import Footer from "../components/footer";

export default function Sobre() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        {/* Banner de Título */}
        <section style={styles.titleSection}>
          <h1 style={styles.title}>
            Sobre a Turma <span style={styles.highlight}>Terceirão Shark</span> 🦈
          </h1>
          <p style={styles.subtitle}>
            Conheça quem faz parte dessa jornada inesquecível no 3B - SESI Mirandópolis.
          </p>
        </section>

        {/* História / Manifesto */}
        <section style={styles.aboutCard}>
          <h2 style={styles.cardTitle}>Nossa História</h2>
          <p style={styles.text}>
            Chegamos ao topo do ensino médio! O ano de 2026 marca o encerramento de um ciclo
            recheado de gargalhadas, trotes fantásticos, provas intensas e amizades que vão
            durar para a vida toda. Como os tubarões, navegamos juntos pelos desafios e
            estamos prontos para dominar novos mares no futuro.
          </p>
        </section>

        {/* Grid de Informações / Estatísticas */}
        <section style={styles.statsGrid}>
          <div style={styles.statBox}>
            <span style={styles.statNumber}>3B</span>
            <span style={styles.statLabel}>Nossa Turma</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statNumber}>2026</span>
            <span style={styles.statLabel}>Ano da Formatura</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statNumber}>SESI</span>
            <span style={styles.statLabel}>Mirandópolis</span>
          </div>
        </section>

        {/* Seção de Valores / Espírito da Turma */}
        <section style={styles.valuesSection}>
          <h2 style={styles.sectionHeading}>O Espírito Tubarão</h2>
         
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <div style={styles.icon}>🤝</div>
              <h3 style={styles.valueTitle}>União</h3>
              <p style={styles.valueText}>
                Ninguém fica para trás. Do primeiro dia ao baile de formatura, jogamos juntos!
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.icon}>⚡</div>
              <h3 style={styles.valueTitle}>Energia</h3>
              <p style={styles.valueText}>
                Interclasses, gincanas e trotes: onde o 3B passa, a marca fica registrada.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.icon}>🚀</div>
              <h3 style={styles.valueTitle}>Futuro</h3>
              <p style={styles.valueText}>
                Vestibulares, novos projetos e carreiras. O oceano é grande demais para parar por aqui.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '3rem 1.5rem 5rem 1.5rem',
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '3rem',
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
  aboutCard: {
    backgroundColor: 'rgba(13, 27, 42, 0.7)',
    border: '1px solid rgba(0, 229, 255, 0.25)',
    borderRadius: '16px',
    padding: '2.5rem',
    marginBottom: '3rem',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
  },
  cardTitle: {
    color: '#00E5FF',
    fontSize: '1.6rem',
    marginBottom: '1rem',
  },
  text: {
    color: '#F4F6F8',
    fontSize: '1.05rem',
    lineHeight: '1.8',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  statBox: {
    backgroundColor: 'rgba(7, 15, 21, 0.8)',
    border: '1px solid #005f73',
    borderRadius: '12px',
    padding: '1.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  statNumber: {
    color: '#00E5FF',
    fontSize: '2.2rem',
    fontWeight: '800',
    textShadow: '0 0 10px rgba(0, 229, 255, 0.4)',
  },
  statLabel: {
    color: '#8E9AAF',
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  valuesSection: {
    textAlign: 'center',
  },
  sectionHeading: {
    color: '#FFFFFF',
    fontSize: '1.8rem',
    marginBottom: '2rem',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  valueCard: {
    backgroundColor: 'rgba(13, 27, 42, 0.5)',
    border: '1px solid rgba(0, 95, 115, 0.5)',
    borderRadius: '12px',
    padding: '2rem 1.5rem',
    transition: 'transform 0.3s ease',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  valueTitle: {
    color: '#00E5FF',
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
  },
  valueText: {
    color: '#8E9AAF',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
};