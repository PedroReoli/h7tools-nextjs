'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { Menu, X, ShoppingCart, User, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import { WhatsappIcon } from '@/components/atoms';
import { useFlyToCart } from '@/contexts/FlyToCartContext';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

interface NavbarProps {
  forceTransparent?: boolean;
  variant?: 'default' | 'dark';
}

export const Navbar: React.FC<NavbarProps> = ({ forceTransparent = false, variant = 'default' }) => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [isTransparentMenuOpen, setIsTransparentMenuOpen] = useState(false);
  const [isFixedMenuOpen, setIsFixedMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const transparentCartDesktopRef = useRef<HTMLDivElement>(null);
  const transparentCartMobileRef = useRef<HTMLDivElement>(null);
  const fixedCartDesktopRef = useRef<HTMLDivElement>(null);
  const fixedCartMobileRef = useRef<HTMLDivElement>(null);
  const transparentCartButtonRef = useRef<HTMLButtonElement>(null);
  const fixedCartButtonRef = useRef<HTMLButtonElement>(null);
  const { items, totalItems, messageUrl } = useCart();
  const { setCartRef } = useFlyToCart();
  const router = useRouter();

  useEffect(() => {
    // Se forceTransparent for true, sempre manter transparente
    if (forceTransparent) {
      setShowFixedNavbar(false);
      return;
    }

    const heroSection = document.querySelector('.h7tools-hero');

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowFixedNavbar(!entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: '-150px',
      }
    );

    observer.observe(heroSection);

    const handleForceNavbar = () => {
      setShowFixedNavbar(true);
    };

    window.addEventListener('forceNavbarActive', handleForceNavbar);

    return () => {
      observer.disconnect();
      window.removeEventListener('forceNavbarActive', handleForceNavbar);
    };
  }, [forceTransparent]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const refs = [
        transparentCartDesktopRef,
        transparentCartMobileRef,
        fixedCartDesktopRef,
        fixedCartMobileRef,
      ];

      const clickedInside = refs.some((ref) => ref.current?.contains(target));

      if (!clickedInside) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCartOpen]);

  useEffect(() => {
    setIsCartOpen(false);
  }, [showFixedNavbar]);

  // Atualizar ref do carrinho para animação fly to cart
  useEffect(() => {
    // Se forceTransparent, sempre usar o botão transparente
    const currentCartButton = forceTransparent || !showFixedNavbar
      ? transparentCartButtonRef.current
      : fixedCartButtonRef.current;
    if (currentCartButton) {
      setCartRef(currentCartButton);
    }
  }, [showFixedNavbar, forceTransparent, setCartRef]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsTransparentMenuOpen(false);
      setIsFixedMenuOpen(false);
    }
  };

  const CartTrigger = ({
    mode,
    containerRef,
    displayClass,
    buttonRef,
  }: {
    mode: 'light' | 'dark';
    containerRef: React.RefObject<HTMLDivElement>;
    displayClass: string;
    buttonRef?: React.RefObject<HTMLButtonElement>;
  }) => {
    const buttonClasses =
      mode === 'dark'
        ? 'text-white hover:text-secondary'
        : 'text-primary hover:text-secondary';

    return (
      <div className={cn('relative', displayClass)} ref={containerRef}>
        <button
          ref={buttonRef}
          onClick={() => setIsCartOpen((prev) => !prev)}
          className={cn('relative p-2 transition-colors', buttonClasses)}
          aria-haspopup="true"
          aria-expanded={isCartOpen}
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs font-bold rounded-full h-5 min-w-[1.25rem] px-1 flex items-center justify-center">
            {totalItems}
          </span>
        </button>

        {isCartOpen && (
          <div className="absolute right-0 mt-4 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 z-[10000] p-4">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-primary">Solicitações</h4>
              <p className="text-xs text-gray-500 mt-1">
                {items.length === 0
                  ? 'Nenhum produto selecionado até o momento.'
                  : 'Confira os produtos adicionados à sua solicitação.'}
              </p>
            </div>

            {items.length > 0 && (
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-3 rounded-xl border border-gray-100 p-3 bg-gray-50/80"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-primary">
                      <p className="font-semibold leading-snug">
                        {product.name}
                      </p>
                      <p className="text-gray-600 leading-snug text-xs line-clamp-2">
                        {product.description}
                      </p>
                      <span className="text-[11px] font-medium text-secondary">
                        Quantidade: {quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/cart"
              onClick={() => setIsCartOpen(false)}
              className={cn(
                'mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-primary transition-all duration-300 hover:shadow-lg',
                items.length === 0 && 'pointer-events-none opacity-60'
              )}
            >
              <ShoppingCart size={18} />
              Ver Carrinho
            </Link>
          </div>
        )}
      </div>
    );
  };

  // Se variant for 'dark', renderizar navbar dark
  if (variant === 'dark') {
    return (
      <nav className="fixed top-0 left-0 right-0 z-[9998] bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => router.push('/')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo-cinza.png"
                alt="H7TOOLS"
                className="h-20 w-auto z-[9999]"
              />
            </button>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-background-dark transition-all duration-300 font-medium"
              >
                <ArrowLeft size={18} />
                <span>Voltar para a Loja</span>
              </button>
              <a
                href="/login"
                className="p-3 rounded-full hover:scale-105 transition-all flex items-center justify-center bg-white/10 hover:bg-secondary hover:text-primary border border-white/20"
                aria-label="Login"
              >
                <User size={20} color="#ffffff" />
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-background-dark transition-all duration-300 text-sm font-medium"
              >
                <ArrowLeft size={16} />
                <span>Voltar</span>
              </button>
              <a
                href="/login"
                className="p-2 rounded-full hover:scale-105 transition-all flex items-center justify-center bg-white/10 hover:bg-secondary hover:text-primary border border-white/20"
                aria-label="Login"
              >
                <User size={20} color="#ffffff" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[9998] transition-opacity duration-500"
        style={{
          opacity: forceTransparent || !showFixedNavbar ? 1 : 0,
          pointerEvents: forceTransparent || !showFixedNavbar ? 'auto' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => router.push('/')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo-cinza.png"
                alt="H7TOOLS"
                className="h-20 w-auto z-[9999]"
              />
            </button>

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

            <div className="hidden md:flex items-center gap-4">
              <CartTrigger
                mode="dark"
                containerRef={transparentCartDesktopRef}
                displayClass=""
                buttonRef={transparentCartButtonRef}
              />
              <a
                href="/login"
                className="p-3 rounded-full hover:scale-105 transition-all flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(8px)',
                }}
                aria-label="Login"
              >
                <User size={20} color="#ffffff" />
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <CartTrigger
                mode="dark"
                containerRef={transparentCartMobileRef}
                displayClass=""
                buttonRef={transparentCartButtonRef}
              />
              <button
                onClick={() =>
                  setIsTransparentMenuOpen((prev) => !prev)
                }
                className="z-[9999] p-2"
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
        </div>

        {isTransparentMenuOpen && (
          <div
            className="md:hidden absolute top-20 left-0 right-0 z-[9999]"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
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
              <button
                className="w-full flex items-center justify-between px-6 py-3 text-white hover:bg-white/10 rounded-full"
                onClick={() => {
                  setIsCartOpen(true);
                  setIsTransparentMenuOpen(false);
                }}
              >
                <span>Carrinho</span>
                <span className="bg-secondary text-primary text-xs font-bold rounded-full h-6 min-w-[1.5rem] px-1 flex items-center justify-center">
                  {totalItems}
                </span>
              </button>
              <a
                href="/login"
                className="px-6 py-3 font-bold rounded-full text-center hover:scale-105 transition-all flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
              >
                <User size={18} />
                <span>Login</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <nav
        className="fixed top-0 left-0 right-0 z-[9998] transition-opacity duration-500"
        style={{
          opacity: !forceTransparent && showFixedNavbar ? 1 : 0,
          pointerEvents: !forceTransparent && showFixedNavbar ? 'auto' : 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => router.push('/')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo-branca.png"
                alt="H7TOOLS"
                className="h-20 w-auto z-[9999]"
              />
            </button>

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

            <div className="hidden md:flex items-center gap-4">
              <CartTrigger
                mode="light"
                containerRef={fixedCartDesktopRef}
                displayClass=""
                buttonRef={fixedCartButtonRef}
              />
              <a
                href="/login"
                className="p-3 bg-secondary text-primary rounded-full hover:scale-105 transition-all flex items-center justify-center shadow-md hover:shadow-lg"
                aria-label="Login"
              >
                <User size={20} />
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <CartTrigger
                mode="light"
                containerRef={fixedCartMobileRef}
                displayClass=""
                buttonRef={fixedCartButtonRef}
              />
              <button
                onClick={() =>
                  setIsFixedMenuOpen((prev) => !prev)
                }
                className="z-[9999] p-2"
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
        </div>

        {isFixedMenuOpen && (
          <div
            className="md:hidden absolute top-20 left-0 right-0 z-[9999]"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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
              <button
                className="w-full flex items-center justify-between px-6 py-3 text-primary hover:bg-gray-100 rounded-full"
                onClick={() => {
                  setIsCartOpen(true);
                  setIsFixedMenuOpen(false);
                }}
              >
                <span>Carrinho</span>
                <span className="bg-secondary text-primary text-xs font-bold rounded-full h-6 min-w-[1.5rem] px-1 flex items-center justify-center">
                  {totalItems}
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

// Navbar: navegação principal com controle de carrinho e dropdown de solicitações.
