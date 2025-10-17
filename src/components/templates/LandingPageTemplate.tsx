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

interface LandingPageTemplateProps {
  heroProducts: Product[];
  gridProducts: Product[];
  statistics: Statistic[];
}

export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  heroProducts,
  gridProducts,
  statistics,
}) => {
  const handleBuy = (product: Product) => {
    console.log('Comprar:', product);
    // Implementar lógica de compra
  };

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
          onBuy={handleBuy}
          onView={handleView}
        />
        <AboutSection statistics={statistics} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};


