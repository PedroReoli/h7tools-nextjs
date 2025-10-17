'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
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
    image: '/images/products/compressor.png',
    backgroundImage: '/images/products/compressor.png',
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
    backgroundImage: '/images/products/compressor.png',
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
    image: '/images/products/compressor.png',
    backgroundImage: '/images/products/compressor.png',
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
    image: '/images/products/compressor.png',
    backgroundImage: '/images/products/compressor.png',
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
                  className="max-h-[500px] w-auto object-contain"
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
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Conteúdo mobile */}
                <div className="p-6 space-y-4">
                  {/* Título */}
                  <h3 className="text-3xl font-bold text-white">
                    {currentProduct.title}
                  </h3>
                  
                  {/* Preço */}
                  <p className="text-white text-2xl font-bold">
                    {currentProduct.price}
                  </p>
                  
                  {/* Descrição */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ferramenta profissional de alta qualidade, ideal para trabalhos que exigem precisão e durabilidade. Produto com garantia e excelente custo-benefício.
                  </p>

                  {/* Botões mobile */}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button 
                      variant="primary" 
                      className="w-full py-3 text-sm font-bold tracking-wider shadow-xl inline-flex items-center justify-center"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      ADICIONAR AO CARRINHO
                    </Button>
                    
                    <button
                      onClick={() => toggleFavorite(currentProduct.id)}
                      className="w-full py-3 text-sm font-bold tracking-wider border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 rounded-lg inline-flex items-center justify-center"
                    >
                      <Heart 
                        size={18} 
                        className={`mr-2 transition-all duration-300 ${
                          favorites[currentProduct.id] 
                            ? 'fill-white text-white scale-110' 
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
                    
                    {/* Preço */}
                    <div className="text-white text-4xl font-bold drop-shadow-lg">
                      {currentProduct.price}
                    </div>

                    {/* Descrição */}
                    <p className="text-white/80 text-base leading-relaxed max-w-xl">
                      Ferramenta profissional de alta qualidade, ideal para trabalhos que exigem precisão e durabilidade. Produto com garantia e excelente custo-benefício.
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
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      ADICIONAR AO CARRINHO
                    </Button>
                    
                    <button
                      onClick={() => toggleFavorite(currentProduct.id)}
                      className="px-8 py-3 text-sm font-bold tracking-wider border-2 border-white/30 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 rounded-lg inline-flex items-center"
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
