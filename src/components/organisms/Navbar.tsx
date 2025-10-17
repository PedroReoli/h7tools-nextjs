'use client';

import React, { useState, useEffect } from 'react';
import { Text, Button } from '@/components/atoms';
import { cn } from '@/utils/cn';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [isTransparentMenuOpen, setIsTransparentMenuOpen] = useState(false);
  const [isFixedMenuOpen, setIsFixedMenuOpen] = useState(false);

  useEffect(() => {
    // Detectar quando sair da hero section
    const heroSection = document.querySelector('.h7tools-hero');
    
    if (!heroSection) return;

    // Intersection Observer - detecta quando a hero sai da viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se a hero NÃO está visível = mostra navbar fixed
          setShowFixedNavbar(!entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: '-150px' // Detecta 150px antes da hero sair
      }
    );

    observer.observe(heroSection);

    // Listener para forçar ativação ao clicar em "Ver Produtos"
    const handleForceNavbar = () => {
      setShowFixedNavbar(true);
    };

    window.addEventListener('forceNavbarActive', handleForceNavbar);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('forceNavbarActive', handleForceNavbar);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsTransparentMenuOpen(false);
      setIsFixedMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR 1 - TRANSPARENTE (Acompanha scroll até sair da hero) */}
      <nav className="fixed top-0 left-0 right-0 z-[9998] transition-opacity duration-500"
        style={{
          opacity: !showFixedNavbar ? 1 : 0,
          pointerEvents: !showFixedNavbar ? 'auto' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <img 
              src="/images/logo-cinza.png" 
              alt="H7TOOLS" 
              className="h-20 w-auto z-[9999]"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-medium text-white hover:text-secondary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="relative p-2 text-white hover:text-secondary transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <a
                href="/login"
                className="p-3 rounded-full hover:scale-105 transition-all flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(8px)'
                }}
                aria-label="Login"
              >
                <User size={20} color="#ffffff" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsTransparentMenuOpen(!isTransparentMenuOpen)}
              className="md:hidden z-[9999] p-2"
              aria-label="Menu"
            >
              {isTransparentMenuOpen ? (
                <X size={28} color="#ffffff" />
              ) : (
                <Menu size={28} color="#ffffff" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isTransparentMenuOpen && (
          <div
            className="md:hidden absolute top-20 left-0 right-0 z-[9999]"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-6 py-3 font-medium rounded-full text-center text-white hover:bg-white/10 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button className="w-full flex items-center justify-between px-6 py-3 text-white hover:bg-white/10 rounded-full">
                <span>Carrinho</span>
                <span className="bg-secondary text-primary text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  0
                </span>
              </button>
              <a
                href="/login"
                className="px-6 py-3 font-bold rounded-full text-center hover:scale-105 transition-all flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.4)'
                }}
              >
                <User size={18} />
                <span>Login</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* NAVBAR 2 - FIXED BRANCA (Aparece após Hero) */}
      <nav
        className="fixed top-0 left-0 right-0 z-[9998] transition-opacity duration-500"
        style={{
          opacity: showFixedNavbar ? 1 : 0,
          pointerEvents: showFixedNavbar ? 'auto' : 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <img 
              src="/images/logo-branca.png" 
              alt="H7TOOLS" 
              className="h-20 w-auto z-[9999]"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-medium text-primary hover:text-secondary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="relative p-2 text-primary hover:text-secondary transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <a
                href="/login"
                className="p-3 bg-secondary text-primary rounded-full hover:scale-105 transition-all flex items-center justify-center shadow-md hover:shadow-lg"
                aria-label="Login"
              >
                <User size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsFixedMenuOpen(!isFixedMenuOpen)}
              className="md:hidden z-[9999] p-2"
              aria-label="Menu"
            >
              {isFixedMenuOpen ? (
                <X size={28} color="#374151" />
              ) : (
                <Menu size={28} color="#374151" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isFixedMenuOpen && (
          <div
            className="md:hidden absolute top-20 left-0 right-0 z-[9999]"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-6 py-3 font-medium rounded-full text-center text-primary hover:bg-gray-100 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button className="w-full flex items-center justify-between px-6 py-3 text-primary hover:bg-gray-100 rounded-full">
                <span>Carrinho</span>
                <span className="bg-secondary text-primary text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  0
                </span>
              </button>
              <a
                href="/login"
                className="w-full px-6 py-3 font-bold rounded-full text-center transition-all flex items-center justify-center gap-2 bg-secondary text-primary hover:scale-105 shadow-md"
              >
                <User size={18} />
                <span>Login</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};


