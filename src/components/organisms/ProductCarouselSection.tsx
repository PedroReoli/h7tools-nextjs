'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/atoms';

interface CarouselProduct {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  backgroundImage: string;
  target: string;
  options: {
    title: string;
    items: { label: string; value: string; checked?: boolean }[];
  }[];
  durability: number;
  isFavorite?: boolean;
}

const carouselProducts: CarouselProduct[] = [
  {
    id: '1',
    title: 'PARAFUSADEIRA',
    subtitle: 'Produtos em Destaque',
    price: 'R$ 1.299,99',
    image: '/images/products/parafusadeira.png',
    backgroundImage: '/images/products/parafusadeira-bg.jpg',
    target: 'img1',
    options: [
      {
        title: 'TAMANHO',
        items: [
          { label: 'S', value: 's' },
          { label: 'M', value: 'm', checked: true },
          { label: 'L', value: 'l' },
          { label: 'XL', value: 'xl' }
        ]
      }
    ],
    durability: 80
  },
  {
    id: '2',
    title: 'COMPRESSOR',
    subtitle: 'Oferta Especial',
    price: 'R$ 140,00',
    image: '/images/products/compressor.png',
    backgroundImage: '/images/products/compressor-bg.jpg',
    target: 'img2',
    options: [
      {
        title: 'UNIDADE DE MOTOR',
        items: [
          { label: 'P-S4 TWIN', value: 'ps4', checked: true },
          { label: 'P-W401', value: 'pw401' }
        ]
      }
    ],
    durability: 75
  },
  {
    id: '3',
    title: 'FURAÇÃO',
    subtitle: 'Ferramentas Profissionais',
    price: 'R$ 1.699,99',
    image: '/images/products/furacao.png',
    backgroundImage: '/images/products/furacao-bg.jpg',
    target: 'img3',
    options: [
      {
        title: 'FAIXA DE VOLTAGEM',
        items: [
          { label: '2000 WATT', value: '2000w', checked: true },
          { label: '2800 WATT', value: '2800w' }
        ]
      },
      {
        title: 'TAMANHO DA BROCA',
        items: [
          { label: 'S', value: 's' },
          { label: 'M', value: 'm', checked: true },
          { label: 'L', value: 'l' },
          { label: 'XL', value: 'xl' }
        ]
      }
    ],
    durability: 80
  },
  {
    id: '4',
    title: 'FERRAMENTA ELÉTRICA',
    subtitle: 'Qualidade Premium',
    price: 'R$ 9.999,99',
    image: '/images/products/ferramenta.png',
    backgroundImage: '/images/products/ferramenta-bg.jpg',
    target: 'img4',
    options: [
      {
        title: 'CLASSIFICAÇÃO',
        items: [
          { label: 'CLASSE 4', value: 'class4', checked: true },
          { label: 'CLASSE 20', value: 'class20' }
        ]
      },
      {
        title: 'ARMAMENTO',
        items: [
          { label: 'SUPERLASER', value: 'super', checked: true },
          { label: 'TURBOLASER', value: 'turbo' }
        ]
      }
    ],
    durability: 80
  }
];

export const ProductCarouselSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselProducts.length);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value
    }));
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
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra nossas ferramentas profissionais com a melhor qualidade e preços competitivos
          </p>
        </div>
        
        <div className="relative h-[600px] max-w-6xl mx-auto">
          
          {/* Background Shape */}
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
                  className="max-h-[500px] w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-[-15%] top-1/2 transform -translate-y-1/2 z-30 w-16 h-16 rounded-full items-center justify-center transition-all duration-300 border-2 hidden md:flex bg-white text-primary border-primary hover:bg-primary hover:text-white hover:border-primary shadow-xl hover:shadow-2xl"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full items-center justify-center transition-all duration-300 border-2 hidden md:flex bg-white text-primary border-primary hover:bg-primary hover:text-white hover:border-primary shadow-xl hover:shadow-2xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Botões Mobile e Dots */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-8">
            {/* Dots indicadores */}
            <div className="flex gap-2">
              {carouselProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-secondary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Botões de navegação */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 bg-white text-primary border-primary hover:bg-primary hover:text-white hover:border-primary shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 bg-white text-primary border-primary hover:bg-primary hover:text-white hover:border-primary shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>


          {/* Product Slider */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[75%] h-[85%] rounded-3xl shadow-2xl overflow-hidden md:block hidden">
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
                
                {/* Dots dentro do card */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex gap-2">
                  {carouselProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-secondary scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 h-full flex flex-col justify-center pl-64 pr-32">
                  <motion.div
                    initial={{ opacity: 0, y: 55 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-white/80 text-sm font-medium mb-2 uppercase tracking-wider">{currentProduct.subtitle}</h3>
                    <h1 className="text-white text-4xl font-black mb-4 tracking-wider leading-tight drop-shadow-lg">
                      {currentProduct.title.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                          {word}
                          {index < currentProduct.title.split(' ').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h1>
                    <div className="text-secondary text-4xl font-bold mb-8 drop-shadow-lg">
                      {currentProduct.price}
                    </div>
                  </motion.div>

                  {/* Opções */}
                  <motion.div
                    initial={{ opacity: 0, y: 55 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-start gap-6 mb-8"
                  >
                    {currentProduct.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="min-w-0 flex-shrink-0">
                        <div className="text-white/70 text-xs font-bold tracking-wider mb-2 uppercase">
                          {option.title}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {option.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              onClick={() => handleOptionChange(`${option.title}-${item.value}`, item.value)}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                selectedOptions[`${option.title}-${item.value}`] || item.checked
                                  ? 'border-2 border-secondary bg-secondary/20 text-secondary'
                                  : 'border-2 border-transparent text-white/70 hover:text-white'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="w-px bg-white/30 h-20 mx-4 flex-shrink-0" />
                    
                    {/* Círculo de Durabilidade */}
                    <div className="text-center flex-shrink-0">
                      <div className="relative w-20 h-20 mb-2">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="47"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="4"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="47"
                            stroke="#fbbf24"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${(currentProduct.durability * 2.95)}, 295`}
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">{currentProduct.durability}%</span>
                        </div>
                      </div>
                      <div className="text-white/70 text-xs font-bold tracking-wider uppercase">
                        TAXA DE DURABILIDADE
                      </div>
                    </div>
                  </motion.div>

                  {/* Ações */}
                  <motion.div
                    initial={{ opacity: 0, y: 55 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap items-center gap-6"
                  >
                    <Button 
                      variant="primary" 
                      className="px-8 py-3 text-sm font-bold tracking-wider shadow-xl hover:shadow-2xl flex-shrink-0 inline-flex items-center"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      ADICIONAR AO CARRINHO
                    </Button>
                    
                    <button
                      onClick={() => toggleFavorite(currentProduct.id)}
                      className="flex items-center text-white/70 hover:text-secondary transition-colors duration-300 whitespace-nowrap"
                    >
                      <Heart 
                        size={18} 
                        className={`mr-2 transition-all duration-300 ${
                          favorites[currentProduct.id] 
                            ? 'fill-secondary text-secondary scale-110' 
                            : 'hover:scale-110'
                        }`} 
                      />
                      ADICIONAR À LISTA
                    </button>
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
                <div className="relative h-64 bg-gray-100">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.title}
                    className="w-full h-full object-contain p-4"
                  />
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${currentProduct.backgroundImage})` }}
                  />
                </div>

                {/* Conteúdo do Produto */}
                <div className="p-6">
                  <h3 className="text-primary/70 text-sm font-medium mb-2 uppercase tracking-wider">
                    {currentProduct.subtitle}
                  </h3>
                  <h1 className="text-primary text-2xl font-bold mb-4 leading-tight">
                    {currentProduct.title}
                  </h1>
                  <div className="text-secondary text-3xl font-bold mb-6">
                    {currentProduct.price}
                  </div>

                  {/* Opções */}
                  <div className="space-y-4 mb-6">
                    {currentProduct.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <div className="text-primary/70 text-xs font-bold tracking-wider mb-2 uppercase">
                          {option.title}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {option.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              onClick={() => handleOptionChange(`${option.title}-${item.value}`, item.value)}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap ${
                                selectedOptions[`${option.title}-${item.value}`] || item.checked
                                  ? 'border-secondary bg-secondary/20 text-secondary'
                                  : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Durabilidade */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="relative w-16 h-16 mb-2">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="47"
                            stroke="rgba(0,0,0,0.1)"
                            strokeWidth="4"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="47"
                            stroke="#fbbf24"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${(currentProduct.durability * 2.95)}, 295`}
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-primary text-sm font-bold">{currentProduct.durability}%</span>
                        </div>
                      </div>
                      <div className="text-primary/70 text-xs font-bold tracking-wider uppercase">
                        DURABILIDADE
                      </div>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="space-y-3">
                    <Button 
                      variant="primary" 
                      className="w-full py-3 text-sm font-bold tracking-wider inline-flex items-center justify-center"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      ADICIONAR AO CARRINHO
                    </Button>
                    
                    <button
                      onClick={() => toggleFavorite(currentProduct.id)}
                      className="w-full flex items-center justify-center text-gray-600 hover:text-secondary transition-colors duration-300 py-2"
                    >
                      <Heart 
                        size={18} 
                        className={`mr-2 transition-all duration-300 ${
                          favorites[currentProduct.id] 
                            ? 'fill-secondary text-secondary scale-110' 
                            : 'hover:scale-110'
                        }`} 
                      />
                      ADICIONAR À LISTA
                    </button>
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
