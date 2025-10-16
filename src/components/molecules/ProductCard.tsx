'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Button, Text, Badge } from '@/components/atoms';
import { Rating } from './Rating';
import { Product } from '@/types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onBuy?: (product: Product) => void;
  onView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onBuy,
  onView,
}) => {
  return (
    <Card variant="elevated" className="group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-3 right-3">
            <Badge variant="danger">-{product.discount}%</Badge>
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <Text variant="h6" className="line-clamp-1">
            {product.name}
          </Text>
          <Text variant="caption" color="gray" className="line-clamp-2 mt-1">
            {product.description}
          </Text>
        </div>

        <Rating rating={product.rating} reviews={product.reviews} size="sm" />

        <div className="flex items-baseline gap-2">
          <Text variant="h5" color="secondary" bold>
            R$ {product.price.toFixed(2)}
          </Text>
          {product.originalPrice && (
            <Text variant="caption" className="line-through text-gray-400">
              R$ {product.originalPrice.toFixed(2)}
            </Text>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="primary"
            fullWidth
            onClick={() => onBuy?.(product)}
            className="flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Comprar
          </Button>
          <Button
            variant="outline"
            onClick={() => onView?.(product)}
            className="px-4"
          >
            <Eye size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
};


