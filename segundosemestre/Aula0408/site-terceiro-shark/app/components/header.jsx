import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>
        <Link href='/' style={styles.logoLink}>
          Terceirão <span style={styles.logoHighlight}>Shark</span> 🦈
        </Link>
      </h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link href='/' style={styles.navLink}>Home</Link></li>
          <li><Link href='/sobre' style={styles.navLink}>Sobre</Link></li>
          <li><Link href='/fotos' style={styles.navLink}>Fotos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 2.5rem',
    backgroundColor: 'rgba(7, 15, 21, 0.85)',
    borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '800',
    letterSpacing: '1px',
  },
  logoLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  logoHighlight: {
    color: '#00E5FF',
    textShadow: '0 0 10px rgba(0, 229, 255, 0.6)',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#F4F6F8',
    fontSize: '1rem',
    fontWeight: '500',
    textDecoration: 'none',
    padding: '0.4rem 0.8rem',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
  },
};
