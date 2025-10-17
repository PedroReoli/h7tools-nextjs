'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import { Rating } from './Rating';
import { Product } from '@/types';
import { ShoppingCart, Heart } from 'lucide-react';

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
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      {/* Badge de Desconto */}
      {product.discount && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-secondary to-yellow-500 text-primary px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full shadow-lg">
          -{product.discount}% OFF
        </div>
      )}

      {/* Botão Favorito */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <Heart 
          size={20} 
          className={`transition-all duration-300 ${
            isFavorite 
              ? 'fill-secondary text-secondary' 
              : 'text-gray-600 hover:text-secondary'
          }`}
        />
      </button>

      {/* Imagem do Produto */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
          onClick={() => onView?.(product)}
        />
      </div>

      {/* Informações do Produto */}
      <div className="p-6">
        {/* Categoria */}
        <div className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">
          {product.category || 'Ferramentas'}
        </div>

        {/* Nome do Produto */}
        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-1 tracking-tight">
          {product.name}
        </h3>

        {/* Descrição */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Features/Tags */}
        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Preço e Botão */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through mb-1">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-3xl font-bold text-primary">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => onBuy?.(product)}
            className="bg-gradient-to-r from-secondary to-yellow-500 text-primary px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:from-yellow-500 hover:to-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-xl group/btn"
          >
            <ShoppingCart size={18} className="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
            <span>Comprar</span>
          </button>
        </div>

        {/* Rating e Estoque */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Rating rating={product.rating} reviews={product.reviews} size="sm" />
          </div>
          <div className="text-xs font-semibold text-green-600">
            {product.inStock !== false ? 'Em Estoque' : 'Indisponível'}
          </div>
        </div>
      </div>
    </div>
  );
};


