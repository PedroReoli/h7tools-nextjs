'use client';

import React, { useState } from 'react';
import { Text, Card } from '@/components/atoms';
import { HelpCircle, Wrench, Package, Truck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  faqs: FAQItem[];
}

export const KnowledgeBaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('geral');

  const categories: Category[] = [
    {
      id: 'geral',
      label: 'Geral',
      icon: <HelpCircle size={20} />,
      faqs: [
        {
          question: 'Quais formas de pagamento vocês aceitam?',
          answer: 'Aceitamos cartão de crédito, débito, PIX e boleto bancário. Parcelamento em até 12x sem juros no cartão.',
        },
        {
          question: 'Vocês emitem nota fiscal?',
          answer: 'Sim! Emitimos nota fiscal para todas as compras. A NF-e é enviada por email após a confirmação do pagamento.',
        },
      ],
    },
    {
      id: 'produtos',
      label: 'Produtos',
      icon: <Wrench size={20} />,
      faqs: [
        {
          question: 'Os produtos têm garantia?',
          answer: 'Sim! Todos os produtos têm garantia de fábrica. O período varia conforme o fabricante, geralmente de 3 meses a 1 ano.',
        },
        {
          question: 'Vocês vendem produtos originais?',
          answer: 'Sim! Trabalhamos apenas com produtos 100% originais das melhores marcas do mercado.',
        },
      ],
    },
    {
      id: 'entrega',
      label: 'Entrega',
      icon: <Truck size={20} />,
      faqs: [
        {
          question: 'Qual o prazo de entrega?',
          answer: 'O prazo varia de acordo com sua região. Normalmente de 3 a 15 dias úteis. Você consulta o prazo antes de finalizar a compra.',
        },
        {
          question: 'Como acompanho meu pedido?',
          answer: 'Após a confirmação do pagamento, você receberá o código de rastreamento por email e SMS.',
        },
      ],
    },
    {
      id: 'devolucao',
      label: 'Devolução',
      icon: <Package size={20} />,
      faqs: [
        {
          question: 'Posso trocar ou devolver um produto?',
          answer: 'Sim! Você tem 7 dias corridos a partir do recebimento para trocar ou devolver, conforme o Código de Defesa do Consumidor.',
        },
        {
          question: 'Como funciona o processo de devolução?',
          answer: 'Entre em contato conosco, informe o motivo e aguarde as instruções. O produto deve estar na embalagem original sem uso.',
        },
      ],
    },
  ];

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="conhecimento" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Text variant="h2" color="primary" className="mb-4">
            Base de <span className="text-secondary">Conhecimento</span>
          </Text>
          <Text variant="h6" color="gray" className="max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais frequentes
          </Text>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }
              `}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCategoryData?.faqs.map((faq, index) => (
            <Card key={index} variant="default" className="p-6 hover:shadow-xl transition-shadow">
              <Text variant="h6" color="primary" className="mb-3">
                {faq.question}
              </Text>
              <Text variant="body" color="gray" className="leading-relaxed">
                {faq.answer}
              </Text>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Text variant="body" color="gray" className="mb-4">
            Não encontrou o que procurava?
          </Text>
          <a
            href="#contato"
            className="inline-block px-8 py-3 bg-secondary text-primary font-bold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

