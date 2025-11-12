'use client';

import React, { createContext, useContext, useState, useCallback, useRef, ReactNode } from 'react';

interface FlyToCartState {
  isAnimating: boolean;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  productImage: string;
  productName: string;
}

interface FlyToCartContextType {
  triggerAnimation: (
    buttonElement: HTMLElement,
    cartElement: HTMLElement | null,
    productImage: string,
    productName: string
  ) => void;
  animationState: FlyToCartState | null;
  setCartRef: (ref: HTMLElement | null) => void;
  cartRef: HTMLElement | null;
}

const FlyToCartContext = createContext<FlyToCartContextType | undefined>(
  undefined
);

export const FlyToCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [animationState, setAnimationState] = useState<FlyToCartState | null>(
    null
  );
  const cartRef = useRef<HTMLElement | null>(null);
  const [cartRefValue, setCartRefValue] = useState<HTMLElement | null>(null);

  const setCartRef = useCallback((ref: HTMLElement | null) => {
    cartRef.current = ref;
    setCartRefValue(ref);
  }, []);

  const triggerAnimation = useCallback(
    (
      buttonElement: HTMLElement,
      cartElement: HTMLElement | null,
      productImage: string,
      productName: string
    ) => {
      // Usa o elemento passado ou o ref armazenado
      const targetCart = cartElement || cartRef.current;
      if (!targetCart) {
        console.warn('Cart element not found for fly to cart animation', {
          cartElement,
          cartRefCurrent: cartRef.current,
        });
        return;
      }

      console.log('Triggering animation', {
        buttonRect: buttonElement.getBoundingClientRect(),
        cartRect: targetCart.getBoundingClientRect(),
      });

      // Obtém as posições absolutas dos elementos (similar ao offset() do jQuery)
      const buttonRect = buttonElement.getBoundingClientRect();
      const cartRect = targetCart.getBoundingClientRect();

      // Calcula posições relativas à viewport (similar ao offset().left/top)
      // Posição inicial: centro do botão
      const startX = buttonRect.left + buttonRect.width / 2;
      const startY = buttonRect.top + buttonRect.height / 2;
      
      // Posição final: centro do carrinho (similar ao cartPos e top: 10 do exemplo)
      const endX = cartRect.left + cartRect.width / 2;
      const endY = cartRect.top + cartRect.height / 2;

      // Cria novo estado de animação
      setAnimationState({
        isAnimating: true,
        startX,
        startY,
        endX,
        endY,
        productImage,
        productName,
      });

      // Limpar estado após animação completa (0.8s move + 0.5s delay + 0.3s fade)
      const totalDuration = 1600;
      setTimeout(() => {
        setAnimationState(null);
      }, totalDuration);
    },
    []
  );

  return (
    <FlyToCartContext.Provider
      value={{
        triggerAnimation,
        animationState,
        setCartRef,
        cartRef: cartRefValue,
      }}
    >
      {children}
    </FlyToCartContext.Provider>
  );
};

export const useFlyToCart = () => {
  const context = useContext(FlyToCartContext);
  if (!context) {
    throw new Error('useFlyToCart must be used within FlyToCartProvider');
  }
  return context;
};

