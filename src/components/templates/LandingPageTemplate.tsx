'use client';

import React from 'react';
import {
  Navbar,
  HeroSection,
  ProductCarouselSection,
  ProductGrid,
  AboutSection,
  ContactSection,
  Footer,
} from '@/components/organisms';
import { Product, Statistic } from '@/types';
import { MessageCircle } from 'lucide-react';

interface LandingPageTemplateProps {
  gridProducts: Product[];
  statistics: Statistic[];
}

export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  gridProducts,
  statistics,
}) => {
  const handleView = (product: Product) => {
    console.log('Ver:', product);
    // Implementar lógica de visualização
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductCarouselSection />
        <ProductGrid
          products={gridProducts}
          onView={handleView}
        />
        <AboutSection statistics={statistics} />
        <ContactSection />
      </main>
      <Footer />
      <a
        href="https://wa.me/552433531581?text=Ol%C3%A1%2C%20estava%20no%20site%20de%20voc%C3%AAs%20e%20estou%20entrando%20em%20contato."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

