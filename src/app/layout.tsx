import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'H7TOOLS - Ferramentas Profissionais',
  description: 'Sua loja de ferramentas profissionais com os melhores preços e qualidade garantida.',
  keywords: 'ferramentas, profissional, h7tools, equipamentos, construção',
  authors: [{ name: 'H7TOOLS' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


