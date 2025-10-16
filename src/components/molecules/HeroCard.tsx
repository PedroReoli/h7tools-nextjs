'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Button, Text } from '@/components/atoms';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';

interface HeroCardProps {
  product: Product;
  onBuy?: (product: Product) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ product, onBuy }) => {
  return (
    <Card variant="transparent" className="h-full">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <Text variant="h4" color="white" className="mb-2">
            {product.name}
          </Text>
          <Text variant="body" color="gray" className="text-gray-300">
            {product.description}
          </Text>
        </div>

        <div className="flex items-baseline gap-3">
          <Text variant="h3" color="secondary" bold>
            R$ {product.price.toFixed(2)}
          </Text>
          {product.originalPrice && (
            <Text variant="body" className="line-through text-gray-400">
              R$ {product.originalPrice.toFixed(2)}
            </Text>
          )}
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={() => onBuy?.(product)}
          className="flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Comprar Agora
        </Button>
      </div>
    </Card>
  );
};


