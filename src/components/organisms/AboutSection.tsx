'use client';

import React from 'react';
import Image from 'next/image';
import { Text, Card } from '@/components/atoms';
import { Statistic } from '@/types';

interface AboutSectionProps {
  statistics: Statistic[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ statistics }) => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Text variant="h2" color="white">
              Sobre a <span className="text-secondary">H7TOOLS</span>
            </Text>
            
            <Text variant="body" className="text-gray-300 leading-relaxed">
              A H7TOOLS é uma empresa especializada em ferramentas e equipamentos profissionais,
              com mais de uma década de experiência no mercado. Oferecemos produtos de alta qualidade
              para profissionais e entusiastas que buscam excelência em seus projetos.
            </Text>

            <Text variant="body" className="text-gray-300 leading-relaxed">
              Nossa missão é fornecer as melhores ferramentas com preços competitivos, 
              mantendo sempre o compromisso com a qualidade e a satisfação do cliente.
              Trabalhamos com as principais marcas do mercado e garantimos produtos originais e duráveis.
            </Text>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <Text variant="h2" className="mb-2 text-white font-bold">
                    {stat.value}
                  </Text>
                  <Text variant="caption" className="text-white/80">
                    {stat.label}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=800&fit=crop"
              alt="H7TOOLS Workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};


