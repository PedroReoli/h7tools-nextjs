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
import { Icon } from '@iconify/react';
import { getWhatsAppComercialUrl } from '@/utils/whatsapp';
import { FlyToCartAnimation } from '@/components/molecules/FlyToCartAnimation';
import { useFlyToCart } from '@/contexts/FlyToCartContext';

interface LandingPageTemplateProps {
  gridProducts: Product[];
  statistics: Statistic[];
}

export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  gridProducts,
  statistics,
}) => {
  const { animationState } = useFlyToCart();
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
        href={getWhatsAppComercialUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        aria-label="Contato via WhatsApp"
      >
        <Icon icon="ic:baseline-whatsapp" width={32} height={32} color="#ffffff" />
      </a>
      {animationState && (
        <FlyToCartAnimation
          startX={animationState.startX}
          startY={animationState.startY}
          endX={animationState.endX}
          endY={animationState.endY}
          productImage={animationState.productImage}
          productName={animationState.productName}
          onComplete={() => {}}
        />
      )}
    </div>
  );
};

