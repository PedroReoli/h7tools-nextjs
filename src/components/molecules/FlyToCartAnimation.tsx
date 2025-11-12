'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface FlyToCartAnimationProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  productImage: string;
  productName: string;
  onComplete: () => void;
}

/**
 * Componente de animação fly to cart melhorado
 * Baseado no padrão JS mas com TypeScript e Framer Motion
 */
export const FlyToCartAnimation: React.FC<FlyToCartAnimationProps> = ({
  startX,
  startY,
  endX,
  endY,
  productImage,
  productName,
  onComplete,
}) => {
  const controls = useAnimation();
  const animationRef = useRef<HTMLDivElement>(null);

  // Tamanho inicial (similar ao width: 200 do exemplo)
  const initialSize = 80;
  // Tamanho final (similar ao width: 20 do exemplo)
  const finalSize = 20;

  // Calcula a distância para ajustar a duração
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
  // Duração baseada na distância (similar ao 0.8s do exemplo)
  const moveDuration = 0.8;
  const fadeDelay = 0.5;
  const fadeDuration = 0.3;

  useEffect(() => {
    // Garantir que o componente está montado antes de iniciar animação
    const timeoutId = setTimeout(() => {
      const animate = async () => {
        try {
          // Posição inicial - centraliza o elemento (similar ao left: itemX, top: itemY do exemplo)
          await controls.start({
            x: startX - initialSize / 2,
            y: startY - initialSize / 2,
            opacity: 1,
            scale: 1,
            transition: { duration: 0 },
          });

          // Animação principal: move até o carrinho e reduz tamanho
          // Similar ao TweenMax.to com left:cartPos, top: 10, width: 20
          await controls.start({
            x: endX - finalSize / 2,
            y: endY - finalSize / 2,
            scale: finalSize / initialSize, // Reduz de 80px para 20px (similar ao width: 200 -> 20)
            transition: {
              duration: moveDuration, // 0.8s como no exemplo
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          });

          // Fade out com delay (similar ao delay: 0.5 do exemplo)
          await controls.start({
            opacity: 0,
            transition: {
              duration: fadeDuration, // 0.3s como no exemplo
              delay: fadeDelay, // 0.5s delay como no exemplo
            },
          });

          // Callback quando completa
          onComplete();
        } catch (error) {
          console.error('Erro na animação fly to cart:', error);
          onComplete();
        }
      };

      animate();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [controls, startX, startY, endX, endY, onComplete, initialSize, finalSize, moveDuration, fadeDelay, fadeDuration]);

  return (
    <motion.div
      ref={animationRef}
      className="fixed z-[10001] pointer-events-none"
      animate={controls}
      initial={false}
    >
      <div 
        className="relative rounded-full overflow-hidden border-2 border-secondary shadow-xl bg-white"
        style={{ width: initialSize, height: initialSize }}
      >
        <Image
          src={productImage}
          alt={productName}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

