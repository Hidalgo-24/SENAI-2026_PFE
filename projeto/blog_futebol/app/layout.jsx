import "./globals.css";

export const metadata = {
  title: "FutBlog | Notícias de Futebol",
  description:
    "Notícias, atualizações e informações sobre o mundo do futebol.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}