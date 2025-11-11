'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Rating } from './Rating';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
  onView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onView,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCart();

  const handleSolicitar = () => {
    addItem(product);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
          onClick={() => onView?.(product)}
        />
      </div>

      <div className="p-6">
        <div className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">
          {product.category || 'Ferramentas'}
        </div>

        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-1 tracking-tight">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex justify-end items-center mb-4">
          <button
            onClick={handleSolicitar}
            className="bg-gradient-to-r from-secondary to-yellow-500 text-primary px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:from-yellow-500 hover:to-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-xl group/btn"
          >
            <ShoppingCart size={18} className="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
            <span>Solicitar</span>
          </button>
        </div>

        <div className="pt-4 border-t border-gray-100" />
      </div>
    </div>
  );
};


