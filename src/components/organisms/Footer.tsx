'use client';

import React from 'react';
import { Text } from '@/components/atoms';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Text variant="h5" color="white" className="mb-4">
              H7<span className="text-secondary">TOOLS</span>
            </Text>
            <Text variant="caption" className="text-gray-300">
              Sua loja de ferramentas profissionais com os melhores preços e qualidade garantida.
            </Text>
          </div>

          {/* Quick Links */}
          <div>
            <Text variant="h6" color="white" className="mb-4">
              Links Rápidos
            </Text>
            <ul className="space-y-2">
              {['Início', 'Produtos', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Text variant="h6" color="white" className="mb-4">
              Contato
            </Text>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Rua das Ferramentas, 123 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} className="flex-shrink-0" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} className="flex-shrink-0" />
                <span>contato@h7tools.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <Text variant="h6" color="white" className="mb-4">
              Redes Sociais
            </Text>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-white/10 hover:bg-secondary hover:text-primary p-2 rounded-full transition-all duration-300"
                  aria-label="Social media link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <Text variant="caption" className="text-gray-400">
            © {currentYear} H7TOOLS. Todos os direitos reservados.
          </Text>
        </div>
      </div>
    </footer>
  );
};


