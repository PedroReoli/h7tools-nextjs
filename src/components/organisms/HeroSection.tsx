'use client';

import React from 'react';
import { Text } from '@/components/atoms';
import { ProductCarousel } from '@/components/molecules';
import { Product } from '@/types';

interface HeroSectionProps {
  products: Product[];
  onBuy?: (product: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ products, onBuy }) => {
  return (
    <section id="home" className="relative min-h-screen bg-primary pt-20 md:pt-24">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Text variant="h1" color="white" className="mb-4">
            Produtos em <span className="text-secondary">Destaque</span>
          </Text>
          <Text variant="h5" className="text-gray-300">
            Ferramentas profissionais com os melhores preços
          </Text>
        </div>

        {/* Carousels Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProductCarousel
            products={products.slice(0, Math.ceil(products.length / 2))}
            onBuy={onBuy}
          />
          <ProductCarousel
            products={products.slice(Math.ceil(products.length / 2))}
            onBuy={onBuy}
            interval={6000}
          />
        </div>
      </div>
    </section>
  );
};


