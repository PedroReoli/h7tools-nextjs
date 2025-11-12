'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useFlyToCart } from '@/contexts/FlyToCartContext';

interface ProductCardProps {
  product: Product;
  onView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onView,
}) => {
  const { addItem } = useCart();
  const { triggerAnimation } = useFlyToCart();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSolicitar = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      // Passa null para cartRef, deixando o contexto usar o ref interno
      triggerAnimation(
        buttonRef.current,
        null,
        product.image,
        product.name
      );
    }
    addItem(product);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply rounded-t-2xl"
          onClick={() => onView?.(product)}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 space-y-6">
        <h3 className="text-xl font-bold text-primary line-clamp-2 tracking-tight">
          {product.name}
        </h3>

        <div className="flex justify-center">
          <button
            ref={buttonRef}
            onClick={handleSolicitar}
            className="bg-gradient-to-r from-secondary to-yellow-500 text-primary px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:from-yellow-500 hover:to-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-xl group/btn"
          >
            <ShoppingCart size={18} className="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
            <span>Adicionar ao Carrinho</span>
          </button>
        </div>
      </div>
    </div>
  );
};

