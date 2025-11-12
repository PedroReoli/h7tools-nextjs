import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/hooks/useCart';
import { FlyToCartProvider } from '@/contexts/FlyToCartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'H7TOOLS - Ferramentas Profissionais',
  description: 'Sua loja de ferramentas profissionais com os melhores preços e qualidade garantida.',
  keywords: 'ferramentas, profissional, h7tools, equipamentos, construção',
  authors: [{ name: 'H7TOOLS' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <FlyToCartProvider>{children}</FlyToCartProvider>
        </CartProvider>
      </body>
    </html>
  );
}

