'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseCarouselProps {
  itemsCount: number;
  autoPlay?: boolean;
  interval?: number;
}

export function useCarousel({ itemsCount, autoPlay = true, interval = 5000 }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemsCount);
  }, [itemsCount]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
  }, [itemsCount]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return {
    currentIndex,
    next,
    previous,
    goTo,
  };
}


