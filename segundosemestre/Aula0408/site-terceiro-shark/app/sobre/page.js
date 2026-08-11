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
            Sobre a Turma <span style={styles.highlight}>Terceirão B</span> 🦈
          </h1>
          <p style={styles.subtitle}>
            Conheça quem faz parte dessa jornada do 3B - SESI 323 de Mirandópolis.
          </p>
        </section>

        {/* História / Manifesto */}
        <section style={styles.aboutCard}>
          <h2 style={styles.cardTitle}>Nossa História</h2>
          <p style={styles.text}>
            Chegamos ao último ano do ensino médio! O ano de 2026 marca o começo e o fim de um ciclo repleto de pessoas novas que foram importantes em todo o ano.
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
          <h2 style={styles.sectionHeading}>O Espírito Fracassado</h2>
         
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <div style={styles.icon}>🤝</div>
              <h3 style={styles.valueTitle}>Parceria</h3>
              <p style={styles.valueText}>
                Ninguém fica para trás. Do primeiro dia do ano até o interclasse, sempre juntos meu jogador!
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.icon}>🫷🫸</div>
              <h3 style={styles.valueTitle}>Aura</h3>
              <p style={styles.valueText}>
                Interclasses, trotes: onde o 3B passa, exala muita aura.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.icon}>🚀</div>
              <h3 style={styles.valueTitle}>Futuro</h3>
              <p style={styles.valueText}>
                Vestibulares, novos projetos e carreiras. O mundo é grande demais para pensar pequeno.
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
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '4rem 1.5rem 6rem 1.5rem',
  },
  titleSection: {
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
  aboutCard: {
    backgroundColor: 'rgba(23, 15, 38, 0.75)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: '20px',
    padding: '3rem 2.5rem',
    marginBottom: '3.5rem',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    overflow: 'hidden',
  },
  cardTitle: {
    color: '#C084FC',
    fontSize: '1.75rem',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  text: {
    color: '#E2E8F0',
    fontSize: '1.1rem',
    lineHeight: '1.8',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.75rem',
    marginBottom: '4.5rem',
  },
  statBox: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    border: '1px solid rgba(192, 132, 252, 0.2)',
    borderRadius: '16px',
    padding: '2rem 1.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },
  statNumber: {
    color: '#A855F7',
    fontSize: '2.5rem',
    fontWeight: '800',
    textShadow: '0 0 12px rgba(168, 85, 247, 0.5)',
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  valuesSection: {
    textAlign: 'center',
  },
  sectionHeading: {
    color: '#F8FAFC',
    fontSize: '2rem',
    fontWeight: '800',
    marginBottom: '2.5rem',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
  },
  valueCard: {
    backgroundColor: 'rgba(23, 15, 38, 0.55)',
    border: '1px solid rgba(168, 85, 247, 0.25)',
    borderRadius: '16px',
    padding: '2.5rem 1.75rem',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
  },
  icon: {
    fontSize: '2.8rem',
    marginBottom: '1.25rem',
  },
  valueTitle: {
    color: '#C084FC',
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
  },
  valueText: {
    color: '#94A3B8',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
};