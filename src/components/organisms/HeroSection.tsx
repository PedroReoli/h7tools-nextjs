'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="h7tools-hero relative flex items-center justify-center overflow-hidden min-h-screen pt-20 bg-background-dark"
    >

      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start">
            
            <motion.div
              className="lg:hidden relative w-full max-w-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src="/images/hero/logo.svg"
                alt="H7TOOLS - Ferramentas Profissionais"
                className="relative w-full h-auto object-contain"
              />
            </motion.div>

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

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="w-full flex justify-center lg:justify-start"
              >
                <button
                onClick={() => {
                  window.dispatchEvent(new Event('forceNavbarActive'));
                  const produtosSection = document.querySelector('#produtos');
                  produtosSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <ShoppingCart size={24} />
                Ver Produtos
              </button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <div className="text-white text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm opacity-90">Produtos</div>
              </div>
              <div className="text-white text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm opacity-90">Anos</div>
              </div>
              <div className="text-white text-center">
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm opacity-90">Clientes</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex relative items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              <img
                src="/images/hero/logo.svg"
                alt="H7TOOLS - Ferramentas Profissionais"
                className="relative w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

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
