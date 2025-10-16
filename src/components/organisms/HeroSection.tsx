'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="h7tools-hero relative flex items-center justify-center overflow-hidden min-h-screen pt-20"
    >
      {/* Imagem de Fundo com Animação */}
      <motion.div
        className="absolute inset-0"
        initial={{ filter: 'blur(0px) brightness(1)' }}
        animate={{
          filter: 'blur(25px) brightness(0.4)',
        }}
        transition={{
          duration: 2.5,
          delay: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <img
          src="/images/hero/logo.png"
          alt="Fundo"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      {/* Overlay escuro FIXO (não anima) */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* Layout: Texto à Esquerda + Imagem à Direita */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* COLUNA ESQUERDA - TEXTO */}
          <div className="text-left space-y-6">
            {/* Título */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              }}
            >
              Ferramentas Profissionais para{' '}
              <span className="text-secondary">Resultados Profissionais</span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              Encontre as melhores ferramentas com preços competitivos e qualidade garantida. 
              Tudo que você precisa em um só lugar.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <button
                onClick={() => {
                  const produtosSection = document.querySelector('#produtos');
                  produtosSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <ShoppingCart size={24} />
                Ver Produtos
              </button>
            </motion.div>

            {/* Destaques */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <div className="text-white">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm opacity-90">Produtos</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm opacity-90">Anos</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm opacity-90">Clientes</div>
              </div>
            </motion.div>
          </div>

          {/* COLUNA DIREITA - IMAGEM */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Logo H7TOOLS */}
              <img
                src="/images/hero/logo.png"
                alt="H7TOOLS - Ferramentas Profissionais"
                className="relative w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
