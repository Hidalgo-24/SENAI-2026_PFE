import Link from "next/link";

export default function Header({ titulo = "SESI TIMES" }) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(8px)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ fontSize: '1.4rem' }}>🎓</span>
        <h1 style={{
          fontSize: '1.2rem',
          fontWeight: '800',
          letterSpacing: '0.5px',
          color: 'var(--primary)',
          textTransform: 'uppercase'
        }}>
          {titulo}
        </h1>
      </div>

      <nav>
        <ul style={{
          display: 'flex',
          gap: '1.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center'
        }}>
          <li>
            <Link href="/" style={{ fontWeight: '600', fontSize: '0.95rem' }}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/times" style={{ fontWeight: '600', fontSize: '0.95rem' }}>
              Times
            </Link>
          </li>
          <li>
            <Link href="/times/3b" style={{
              fontWeight: '700',
              fontSize: '0.9rem',
              color: 'var(--secondary)',
              background: 'rgba(46, 213, 115, 0.12)',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: '1px solid var(--secondary)'
            }}>
              Terceiro B ✨
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}