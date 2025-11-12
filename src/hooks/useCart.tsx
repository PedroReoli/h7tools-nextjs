'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import { Product } from '@/types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  messageUrl: string;
  messageText: string;
}

const CartContext = createContext<CartContextValue | null>(null);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      }

      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const messageText = useMemo(() => {
    if (items.length === 0) {
      return 'Olá, estava no site de vocês e gostaria de solicitar alguns produtos.';
    }

    // Cada item em uma linha separada usando quebra de linha (\n)
    const productsList = items
      .map(
        (item) =>
          `- ${item.product.name} (x${item.quantity})`
      )
      .join('\n');

    return (
      `Olá, estava no site de vocês e queria esses seguintes produtos:\n\n` +
      `${productsList}`
    );
  }, [items]);

  const messageUrl = useMemo(() => {
    const baseUrl = 'https://wa.me/552433531581';
    return `${baseUrl}?text=${encodeURIComponent(messageText)}`;
  }, [messageText]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clearCart,
      totalItems,
      messageUrl,
      messageText,
    }),
    [items, totalItems, messageUrl, messageText]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

// Hook useCart: centraliza estado do carrinho com adição, remoção e geração de mensagem WhatsApp.

