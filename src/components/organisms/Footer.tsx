'use client';

import React from 'react';
import { Text } from '@/components/atoms';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/images/logo-cinza.png" 
                alt="H7TOOLS" 
                className="h-16 w-auto"
              />
            </div>
            <Text variant="body" className="text-gray-300 mb-6 max-w-md">
              Sua loja de ferramentas profissionais com os melhores preços e qualidade garantida. 
              Mais de 10 anos de experiência no mercado.
            </Text>
            
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: 'https://facebook.com/h7tools/?locale=pt_BR', label: 'Facebook' },
                { Icon: Instagram, href: 'https://instagram.com/h7tools/', label: 'Instagram' },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <Text variant="h6" color="white" className="mb-6 text-lg font-semibold">
              Links Rápidos
            </Text>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#home' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Contato', href: '#contato' },
                { label: 'Destaques', href: '#destaques' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text variant="h6" color="white" className="mb-6 text-lg font-semibold">
              Contato
            </Text>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <div>
                  <p className="text-gray-300 text-sm">R. I, nº 183 - Loja 2</p>
                  <p className="text-gray-300 text-sm">Nova Colônia</p>
                  <p className="text-gray-400 text-xs">Porto Real - RJ, 27570-000</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <a href="tel:+552433531581" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  (24) 3353-1581
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <a href="mailto:contato@h7tools.com" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  contato@h7tools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <Text variant="caption" className="text-gray-400">
            © {currentYear} H7TOOLS - Ferramentas e Acessórios. Todos os direitos reservados.
          </Text>
        </div>
      </div>
    </footer>
  );
};


