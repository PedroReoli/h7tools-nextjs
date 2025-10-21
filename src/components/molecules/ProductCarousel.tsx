'use client';

import React from 'react';
import { Product } from '@/types';
import { HeroCard } from './HeroCard';
import { useCarousel } from '@/hooks/useCarousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ProductCarouselProps {
  products: Product[];
  onBuy?: (product: Product) => void;
  autoPlay?: boolean;
  interval?: number;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  onBuy,
  autoPlay = true,
  interval = 5000,
}) => {
  const { currentIndex, next, previous, goTo } = useCarousel({
    itemsCount: products.length,
    autoPlay,
    interval,
  });

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <HeroCard product={product} onBuy={onBuy} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={previous}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'w-8 bg-secondary'
                : 'w-2 bg-gray-400 hover:bg-gray-300'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


