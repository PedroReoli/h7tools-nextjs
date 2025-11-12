'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/atoms';
import { useCart } from '@/hooks/useCart';
import { useFlyToCart } from '@/contexts/FlyToCartContext';
import { Product } from '@/types';

interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundImage: string;
  product: Product;
}

const carouselProducts: CarouselProduct[] = [
  {
    id: '1',
    title: 'Gerador de Energia Pro 5000W',
    description: 'Potência confiável para alimentar equipamentos em obras e eventos.',
    image: '/images/products/Gerador.jpeg',
    backgroundImage: '/images/products/Gerador.jpeg',
    product: {
      id: 'prod-1',
      name: 'Gerador de Energia Pro 5000W',
      description: 'Potência confiável para alimentar equipamentos em obras e eventos.',
      price: 3499.9,
      image: '/images/products/Gerador.jpeg',
      rating: 4.9,
      reviews: 112,
      category: 'Equipamentos',
    },
  },
  {
    id: '2',
    title: 'Parafusadeira Multiuso Professional',
    description: 'Corpo compacto com empunhadura emborrachada para trabalhos delicados.',
    image: '/images/products/Carrinhodemao01.jpeg',
    backgroundImage: '/images/products/Carrinhodemao01.jpeg',
    product: {
      id: 'prod-7',
      name: 'Parafusadeira Multiuso Professional',
      description: 'Corpo compacto com empunhadura emborrachada para trabalhos delicados.',
      price: 389.9,
      image: '/images/products/Carrinhodemao01.jpeg',
      rating: 4.4,
      reviews: 83,
      category: 'Ferramentas Elétricas',
    },
  },
  {
    id: '3',
    title: 'Parafusadeira Bosch GSR 1000 Smart',
    description: 'Carregamento rápido por micro USB e formato ergonômico para uso prolongado.',
    image: '/images/products/Parafusadeira%20bosh.jpeg',
    backgroundImage: '/images/products/Parafusadeira%20bosh.jpeg',
    product: {
      id: 'prod-4',
      name: 'Parafusadeira Bosch GSR 1000 Smart',
      description: 'Carregamento rápido por micro USB e formato ergonômico para uso prolongado.',
      price: 649.9,
      image: '/images/products/Parafusadeira%20bosh.jpeg',
      rating: 4.6,
      reviews: 162,
      category: 'Ferramentas Elétricas',
    },
  },
];

export const ProductCarouselSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { addItem } = useCart();
  const { triggerAnimation } = useFlyToCart();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselProducts.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Muda slide a cada 5 segundos
    };

    const stopAutoPlay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoPlay();

    return () => stopAutoPlay();
  }, []);

  const handleAddToCart = (product: Product, index: number) => {
    const button = buttonRefs.current[index];
    if (button) {
      // Passa null para cartRef, deixando o contexto usar o ref interno
      triggerAnimation(button, null, product.image, product.name);
    }
    addItem(product);
  };

  const currentProduct = carouselProducts[currentSlide];

  return (
    <section id="destaques" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Produtos em <span className="text-secondary">Destaque</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Descubra nossas ferramentas profissionais com a melhor qualidade e preços competitivos
          </p>
          
          {/* Dots indicadores */}
          <div className="flex justify-center gap-2 mb-8">
            {carouselProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-secondary scale-125' 
                    : 'bg-gray-300 hover:bg-secondary'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="relative md:h-[600px] max-w-6xl mx-auto">
          
          {/* Background Shape Desktop */}
          <div className="absolute left-0 top-0 h-full w-[50%] bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl shadow-2xl items-center hidden md:flex">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-20">
              <img 
                src="/images/hero/logo.svg" 
                alt="H7TOOLS" 
                className="w-96 h-auto"
              />
            </div>
          </div>

          {/* Product Images */}
          <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[500px] h-full pointer-events-none md:block hidden">
            {carouselProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`absolute inset-0 flex items-center justify-end transition-all duration-300 ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
                }`}
                style={{ transitionDelay: index === currentSlide ? '0.3s' : '0s' }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-[350px] w-[350px] h-[350px] object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </div>




          {/* Product Slider Mobile */}
          <div className="md:hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Imagem de fundo mobile */}
                <div 
                  className="relative h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentProduct.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10 h-full flex items-center justify-center p-6">
                    <img 
                      src={currentProduct.image} 
                      alt={currentProduct.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Conteúdo mobile */}
                <div className="p-6 space-y-4">
                  {/* Título */}
                  <h3 className="text-3xl font-bold text-white">
                    {currentProduct.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    {currentProduct.description}
                  </p>

                  {/* Botão mobile */}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button 
                      variant="primary" 
                      className="w-full py-3 text-sm font-bold tracking-wider shadow-xl inline-flex items-center justify-center"
                      onClick={() => handleAddToCart(currentProduct.product, currentSlide)}
                      ref={(el) => {
                        if (el) buttonRefs.current[currentSlide] = el;
                      }}
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      ADICIONAR AO CARRINHO
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Product Slider Desktop */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[75%] h-[85%] rounded-3xl shadow-2xl overflow-hidden hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-full w-full"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentProduct.backgroundImage})` }}
                />
                {/* Overlay para melhor contraste */}
                <div className="absolute inset-0 bg-black/40" />
                

                {/* Conteúdo */}
                <div className="relative z-10 h-full flex flex-col justify-center pl-64 pr-32">
                  <motion.div
                    initial={{ opacity: 0, y: 55 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Título */}
                    <h1 className="text-white text-5xl font-black tracking-wider leading-tight drop-shadow-lg">
                      {currentProduct.title}
                    </h1>

                    {/* Descrição */}
                    <p className="text-white/80 text-base leading-relaxed max-w-xl">
                      {currentProduct.description}
                    </p>
                  </motion.div>

                  {/* Ações */}
                  <motion.div
                    initial={{ opacity: 0, y: 55 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center gap-4 mt-8"
                  >
                    <Button 
                      variant="primary" 
                      className="px-8 py-3 text-sm font-bold tracking-wider shadow-xl hover:shadow-2xl inline-flex items-center"
                      onClick={() => handleAddToCart(currentProduct.product, currentSlide)}
                      ref={(el) => {
                        if (el) buttonRefs.current[currentSlide] = el;
                      }}
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      ADICIONAR AO CARRINHO
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Mobile */}
          <div className="md:hidden block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full bg-gray-100 rounded-t-2xl overflow-hidden">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${currentProduct.backgroundImage})` }}
                  />
                </div>

                {/* Conteúdo do Produto */}
                <div className="p-6">
                  <h1 className="text-primary text-2xl font-bold mb-4 leading-tight">
                    {currentProduct.title}
                  </h1>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {currentProduct.description}
                  </p>

                  {/* Ações */}
                  <div className="space-y-3">
                    <Button 
                      variant="primary" 
                      className="w-full py-3 text-sm font-bold tracking-wider inline-flex items-center justify-center"
                      onClick={() => handleAddToCart(currentProduct.product, currentSlide)}
                      ref={(el) => {
                        if (el) buttonRefs.current[currentSlide] = el;
                      }}
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      ADICIONAR AO CARRINHO
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};


