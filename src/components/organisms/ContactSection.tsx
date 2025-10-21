'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Card } from '@/components/atoms';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefone',
    description: 'Entre em contato conosco',
    contact: '(24) 3353-1581',
    color: 'text-secondary'
  },
  {
    icon: Mail,
    title: 'E-mail',
    description: 'Envie sua mensagem',
    contact: 'contato@h7tools.com',
    color: 'text-secondary'
  }
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Entre em <span className="text-secondary">Contato</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Solicite seu orçamento personalizado. Estamos prontos para atender você!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="grid grid-cols-1 gap-6 h-full">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/20 h-full flex flex-col justify-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                      <method.icon size={24} className="text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                    
                    <p className={`text-lg font-semibold ${method.color}`}>
                      {method.contact}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="p-0 overflow-hidden">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19133.361043627574!2d-44.31151558296313!3d-22.411730781963527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e874aaf725fe7%3A0x2fe68bbb48d6d155!2sh7%20Tools%20Ferramentas%20e%20Acess%C3%B3rios!5e0!3m2!1spt-BR!2sbr!4v1760662573736!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] md:h-[450px]"
                />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h4 className="font-bold text-primary mb-2">H7TOOLS</h4>
                  <p className="text-sm text-gray-600">Ferramentas e Acessórios</p>
                  <p className="text-sm text-gray-600">R. I, nº 183 - Loja 2</p>
                  <p className="text-sm text-gray-600">Porto Real - RJ</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
