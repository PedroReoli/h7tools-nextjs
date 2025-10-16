import React from 'react';
import { Star } from '@/components/atoms';

interface RatingProps {
  rating: number;
  reviews?: number;
  size?: 'sm' | 'md' | 'lg';
  showReviews?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  reviews,
  size = 'md',
  showReviews = true,
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {stars.map((star) => (
          <Star
            key={star}
            filled={star <= Math.round(rating)}
            size={size}
          />
        ))}
      </div>
      {showReviews && reviews && (
        <span className="text-sm text-gray-600 ml-1">
          ({reviews})
        </span>
      )}
    </div>
  );
};


