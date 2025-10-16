'use client';

import React, { useState } from 'react';
import { Text, Button } from '@/components/atoms';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import { Menu, X, ShoppingCart } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Text
              variant="h5"
              color={isScrolled ? 'primary' : 'white'}
              className="font-bold"
            >
              H7<span className="text-secondary">TOOLS</span>
            </Text>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  'font-medium transition-colors duration-300',
                  isScrolled
                    ? 'text-primary hover:text-secondary'
                    : 'text-white hover:text-secondary'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Cart Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className={cn(
              'relative p-2 transition-colors',
              isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
            )}>
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <Button variant={isScrolled ? 'primary' : 'secondary'}>
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden p-2',
              isScrolled ? 'text-primary' : 'text-white'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full flex items-center justify-between px-3 py-2 text-primary hover:bg-gray-50 rounded-md">
                  <span>Carrinho</span>
                  <span className="bg-secondary text-primary text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    0
                  </span>
                </button>
                <Button variant="primary" fullWidth>
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


