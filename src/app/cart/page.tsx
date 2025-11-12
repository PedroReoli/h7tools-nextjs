'use client';

import React from 'react';
import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/organisms';
import { getWhatsAppComercialUrl } from '@/utils/whatsapp';

export default function CartPage() {
  const { items, addItem, removeItem, clearCart, totalItems, messageUrl } = useCart();

  const handleIncreaseQuantity = (productId: string) => {
    const item = items.find((item) => item.product.id === productId);
    if (item) {
      addItem(item.product);
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    removeItem(productId);
  };

  const handleRemoveItem = (productId: string) => {
    const item = items.find((item) => item.product.id === productId);
    if (item) {
      // Remove todas as quantidades de uma vez
      for (let i = 0; i < item.quantity; i++) {
        removeItem(productId);
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar variant="dark" />
      <main className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Carrinho de <span className="text-secondary">Solicitações</span>
          </h1>
          <p className="text-gray-600 mt-2">
            {totalItems === 0
              ? 'Seu carrinho está vazio'
              : `${totalItems} ${totalItems === 1 ? 'item' : 'itens'} no carrinho`}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">
              Seu carrinho está vazio
            </h2>
            <p className="text-gray-600 mb-6">
              Adicione produtos ao carrinho para continuar
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl font-bold hover:bg-secondary-dark transition-colors"
            >
              <ShoppingCart size={20} />
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <>
            {/* Lista de Itens */}
            <div className="space-y-4 mb-6">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-center"
                >
                  {/* Imagem do Produto */}
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Informações do Produto */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-primary mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {product.description}
                    </p>
                    {product.category && (
                      <span className="inline-block text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    )}
                  </div>

                  {/* Controles de Quantidade */}
                  <div className="flex items-center gap-3">
                    {/* Botão Diminuir */}
                    <button
                      onClick={() => handleDecreaseQuantity(product.id)}
                      className="p-2 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus size={18} />
                    </button>

                    {/* Quantidade */}
                    <span className="text-lg font-bold text-primary min-w-[2rem] text-center">
                      {quantity}
                    </span>

                    {/* Botão Aumentar */}
                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className="p-2 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={18} />
                    </button>

                    {/* Botão Remover */}
                    <button
                      onClick={() => handleRemoveItem(product.id)}
                      className="p-2 rounded-lg border-2 border-red-300 text-red-600 hover:border-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-300 ml-2"
                      aria-label="Remover item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo e Botão Enviar */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-primary">
                  Total de itens:
                </span>
                <span className="text-2xl font-bold text-secondary">
                  {totalItems}
                </span>
              </div>

              <a
                href={messageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-secondary text-primary px-6 py-4 rounded-xl font-bold text-lg hover:bg-secondary-dark transition-all duration-300 hover:shadow-xl"
              >
                <Icon icon="ic:baseline-whatsapp" width={24} height={24} />
                Enviar Solicitação
              </a>

              <button
                onClick={clearCart}
                className="w-full mt-4 inline-flex items-center justify-center gap-2 text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
              >
                <Trash2 size={18} />
                Limpar carrinho
              </button>
            </div>
          </>
        )}
        </div>
      </main>
      <Footer />
      <a
        href={getWhatsAppComercialUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        aria-label="Contato via WhatsApp"
      >
        <Icon icon="ic:baseline-whatsapp" width={32} height={32} color="#ffffff" />
      </a>
    </div>
  );
}

