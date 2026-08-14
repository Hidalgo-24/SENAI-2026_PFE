import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
  title: 'SESI Times - Terceirão 2026',
  description: 'Portal oficial do Terceirão - SESI Mirandópolis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header titulo="SESI TIMES" />
        <main style={{ flex: 1, padding: '2.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}