'use client';

import React from 'react';
import { Text } from '@/components/atoms';
import { ProductCard } from '@/components/molecules';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  onBuy?: (product: Product) => void;
  onView?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onBuy,
  onView,
}) => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Text variant="h2" color="primary" className="mb-4">
            Nossos <span className="text-secondary">Produtos</span>
          </Text>
          <Text variant="h6" color="gray" className="max-w-2xl mx-auto">
            Explore nossa ampla seleção de ferramentas e equipamentos profissionais
          </Text>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={onBuy}
              onView={onView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


