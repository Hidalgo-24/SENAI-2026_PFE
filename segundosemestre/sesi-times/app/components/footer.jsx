export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '2rem 1rem',
      textAlign: 'center',
      backgroundColor: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.3rem',
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }}>
      <span>Todos os direitos reservados à</span>
      <p style={{
        fontWeight: '700',
        fontSize: '1.05rem',
        color: 'var(--primary)',
        letterSpacing: '0.5px'
      }}>
        SESI Mirandópolis 🔴
      </p>
    </footer>
  );
}