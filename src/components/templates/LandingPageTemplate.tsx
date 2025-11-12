'use client';

import React from 'react';
import {
  Navbar,
  HeroSection,
  ProductCarouselSection,
  ProductGrid,
  AboutSection,
  ContactSection,
  ContactForm,
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
        
        {/* Formulário de Contato Centralizado */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Fale <span className="text-secondary">Conosco</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </section>
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

