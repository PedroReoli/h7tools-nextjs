'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Button, Text } from '@/components/atoms';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface HeroCardProps {
  product: Product;
  onBuy?: (product: Product) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ product, onBuy }) => {
  const { addItem } = useCart();

  const handleSolicitar = () => {
    addItem(product);
    onBuy?.(product);
  };

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

        <Button
          variant="primary"
          fullWidth
          onClick={handleSolicitar}
          className="flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Solicitar
        </Button>
      </div>
    </Card>
  );
};


