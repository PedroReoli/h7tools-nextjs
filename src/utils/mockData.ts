import { Product } from '@/types';

export const heroProducts: Product[] = [
  {
    id: 'hero-1',
    name: 'Gerador de Energia Pro 5000W',
    description: 'Autonomia e segurança para obras, eventos e emergências.',
    price: 3499.9,
    originalPrice: 3999.9,
    discount: 13,
    image: '/images/products/Gerador.jpeg',
    rating: 4.9,
    reviews: 112,
    category: 'Equipamentos'
  },
  {
    id: 'hero-2',
    name: 'Parafusadeira DeWalt 20V Max',
    description: 'Torque elevado, mandril de aperto rápido e luz LED integrada.',
    price: 1199.9,
    originalPrice: 1399.9,
    discount: 14,
    image: '/images/products/parafusadeira%20sem%20fio%20walt.jpeg',
    rating: 4.8,
    reviews: 254,
    category: 'Ferramentas Elétricas'
  },
  {
    id: 'hero-3',
    name: 'Lavadora a Vapor Tramontina',
    description: 'Limpeza profunda com alta pressão e reservatório de grande capacidade.',
    price: 1899.9,
    originalPrice: 2199.9,
    discount: 14,
    image: '/images/products/MaquinaVapTramontina.jpeg',
    rating: 4.7,
    reviews: 97,
    category: 'Limpeza Profissional'
  }
];

export const featuredProducts: Product[] = [
  {
    id: 'feat-1',
    name: 'Parafusadeira Bosch GSR 120-LI',
    description: 'Modelo compacto com torque otimizado e duas baterias para uso contínuo.',
    price: 899.9,
    originalPrice: 999.9,
    discount: 10,
    image: '/images/products/Parafusadeira%20bosh.png',
    rating: 4.7,
    reviews: 204,
    category: 'Ferramentas Elétricas',
    features: ['2 Baterias 12V', 'Mandril 3/8"', 'Torque 28Nm']
  },
  {
    id: 'feat-2',
    name: 'Maleta de Ferramentas 136 Peças',
    description: 'Kit completo com as principais ferramentas para manutenção profissional.',
    price: 689.9,
    originalPrice: 799.9,
    discount: 14,
    image: '/images/products/Maleta%20de%20ferramenta.jpeg',
    rating: 4.9,
    reviews: 312,
    category: 'Kits e Organizações',
    features: ['136 Peças', 'Maleta reforçada', 'Organização modular']
  }
];

export const gridProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Gerador de Energia Pro 5000W',
    description: 'Potência confiável para alimentar equipamentos em obras e eventos.',
    price: 3499.9,
    originalPrice: 3999.9,
    discount: 13,
    image: '/images/products/Gerador.jpeg',
    rating: 4.9,
    reviews: 112,
    category: 'Equipamentos',
    features: ['5000W', 'Motor à gasolina', 'Partida manual e elétrica']
  },
  {
    id: 'prod-3',
    name: 'Parafusadeira Bosch GSR 120-LI',
    description: 'Modelo compacto com duas velocidades e mandril de 10mm.',
    price: 899.9,
    originalPrice: 999.9,
    discount: 10,
    image: '/images/products/Parafusadeira%20bosh.png',
    rating: 4.7,
    reviews: 204,
    category: 'Ferramentas Elétricas',
    features: ['2 Baterias 12V', 'Mandril 3/8"', 'Torque 28Nm']
  },
  {
    id: 'prod-4',
    name: 'Parafusadeira Bosch GSR 1000 Smart',
    description: 'Carregamento rápido por micro USB e formato ergonômico para uso prolongado.',
    price: 649.9,
    originalPrice: 729.9,
    discount: 11,
    image: '/images/products/Parafusadeira%20bosh.jpeg',
    rating: 4.6,
    reviews: 162,
    category: 'Ferramentas Elétricas',
    features: ['Bateria 12V', '15 Níveis de torque', 'Luz LED integrada']
  },
  {
    id: 'prod-5',
    name: 'Parafusadeira DeWalt 20V Max',
    description: 'Ignição brushless para maior autonomia e manutenção reduzida.',
    price: 1199.9,
    originalPrice: 1399.9,
    discount: 14,
    image: '/images/products/parafusadeira%20sem%20fio%20walt.jpeg',
    rating: 4.8,
    reviews: 254,
    category: 'Ferramentas Elétricas',
    features: ['Torque 57Nm', 'Bateria 20V', 'Mandril 1/2"']
  },
  {
    id: 'prod-6',
    name: 'Parafusadeira Vonder 12V',
    description: 'Ferramenta versátil para montagens, manutenções e acabamentos.',
    price: 529.9,
    originalPrice: 599.9,
    discount: 12,
    image: '/images/products/Parafusadeira%20vonder.jpeg',
    rating: 4.5,
    reviews: 98,
    category: 'Ferramentas Elétricas',
    features: ['12V', '2 Baterias', 'Velocidade variável']
  },
  {
    id: 'prod-7',
    name: 'Parafusadeira Multiuso Professional',
    description: 'Corpo compacto com empunhadura emborrachada para trabalhos delicados.',
    price: 389.9,
    originalPrice: 469.9,
    discount: 17,
    image: '/images/products/Parafusadeira.jpg',
    rating: 4.4,
    reviews: 83,
    category: 'Ferramentas Elétricas',
    features: ['Mandril 1/4"', 'Controle de torque', 'Luz LED']
  },
  {
    id: 'prod-8',
    name: 'Parafusadeira Multiuso 10,8V',
    description: 'Design leve com carregamento rápido e indicador luminoso de bateria.',
    price: 419.9,
    originalPrice: 489.9,
    discount: 14,
    image: '/images/products/Parafusadeira.png',
    rating: 4.5,
    reviews: 91,
    category: 'Ferramentas Elétricas',
    features: ['10,8V', '2 velocidades', 'Mandril rápido']
  },
  {
    id: 'prod-9',
    name: 'Tesoura de Poda Profissional',
    description: 'Lâmina afiada para cortes precisos em galhos de até 20mm.',
    price: 129.9,
    originalPrice: 169.9,
    discount: 24,
    image: '/images/products/Tesouradepoda.jpeg',
    rating: 4.7,
    reviews: 143,
    category: 'Jardinagem',
    features: ['Lâmina de aço temperado', 'Empunhadura ergonômica', 'Sistema de trava']
  },
  {
    id: 'prod-10',
    name: 'Roçadeira Gasolina 1.6HP',
    description: 'Ideal para limpeza de terrenos com alta performance e baixo consumo.',
    price: 1499.9,
    originalPrice: 1699.9,
    discount: 12,
    image: '/images/products/ro%C3%A7adeira.jpeg',
    rating: 4.6,
    reviews: 121,
    category: 'Jardinagem',
    features: ['Lâmina 3 pontas', 'Eixo desmontável', 'Alça dupla']
  },
  {
    id: 'prod-11',
    name: 'Aparador de Grama Tramontina',
    description: 'Corte preciso com fio de nylon reforçado e proteção para plantas.',
    price: 429.9,
    originalPrice: 499.9,
    discount: 14,
    image: '/images/products/Aparadordegramatramontina.jpeg',
    rating: 4.5,
    reviews: 88,
    category: 'Jardinagem',
    features: ['1000W', 'Corte 28cm', 'Ajuste de altura']
  },
  {
    id: 'prod-12',
    name: 'Trena Fibra de Vidro 50m',
    description: 'Estrutura leve, resistente à umidade e de fácil leitura.',
    price: 219.9,
    originalPrice: 259.9,
    discount: 15,
    image: '/images/products/Trena%20fibra%20de%20vidro.jpeg',
    rating: 4.8,
    reviews: 177,
    category: 'Instrumentos de Medição',
    features: ['Fita 50m', 'Escala dupla', 'Carretel retrátil']
  },
  {
    id: 'prod-13',
    name: 'Serra Elétrica 18" 2.0kW',
    description: 'Corrente de alto desempenho com baixo nível de vibração.',
    price: 1199.9,
    originalPrice: 1399.9,
    discount: 14,
    image: '/images/products/Serra%20eletrica.jpeg',
    rating: 4.7,
    reviews: 134,
    category: 'Ferramentas Elétricas',
    features: ['Barra 18"', 'Motor 2.0kW', 'Lubrificação automática']
  },
  {
    id: 'prod-14',
    name: 'Marreta 2kg Cabo Fibra',
    description: 'Acabamento anti-impacto para reduzir vibrações durante o uso.',
    price: 109.9,
    originalPrice: 129.9,
    discount: 15,
    image: '/images/products/Marreta.jpeg',
    rating: 4.8,
    reviews: 201,
    category: 'Ferramentas Manuais',
    features: ['2kg', 'Cabo fibra de vidro', 'Empunhadura antiderrapante']
  },
  {
    id: 'prod-15',
    name: 'Maleta de Ferramentas 136 Peças',
    description: 'Organização completa com soquetes, chaves e acessórios para manutenção.',
    price: 689.9,
    originalPrice: 799.9,
    discount: 14,
    image: '/images/products/Maleta%20de%20ferramenta.jpeg',
    rating: 4.9,
    reviews: 312,
    category: 'Kits e Organizações',
    features: ['136 Peças', 'Maleta com rodízios', 'Ferramentas em cromo-vanádio']
  },
  {
    id: 'prod-16',
    name: 'Lubrificante Multiuso Profissional',
    description: 'Proteção anticorrosiva e redução de atrito para ferramentas elétricas.',
    price: 69.9,
    originalPrice: 84.9,
    discount: 18,
    image: '/images/products/lubrificantes%20para%20ferramentas.jpeg',
    rating: 4.6,
    reviews: 93,
    category: 'Manutenção',
    features: ['400ml', 'Ação anticorrosiva', 'Bico aplicador']
  },
  {
    id: 'prod-17',
    name: 'Óleo Solúvel Hidria EP',
    description: 'Óleo refrigerante para usinagem com aditivos antidesgaste.',
    price: 119.9,
    originalPrice: 149.9,
    discount: 20,
    image: '/images/products/oleo%20soluvel%20Hydria%20EP.jpeg',
    rating: 4.7,
    reviews: 87,
    category: 'Manutenção',
    features: ['Alta refrigeração', 'Proteção antioxidante', 'Uso industrial']
  },
  {
    id: 'prod-18',
    name: 'Desengraxante Oxi Black',
    description: 'Remove resíduos pesados mantendo superfícies metálicas protegidas.',
    price: 54.9,
    originalPrice: 69.9,
    discount: 21,
    image: '/images/products/oxi%20black.jpeg',
    rating: 4.5,
    reviews: 76,
    category: 'Químicos Industriais',
    features: ['Alto rendimento', 'Fácil aplicação', 'Biodegradável']
  },
  {
    id: 'prod-19',
    name: 'Protetor Anticorrosivo PA',
    description: 'Camada protetiva contra oxidação para armazenagem de peças e ferramentas.',
    price: 59.9,
    originalPrice: 74.9,
    discount: 20,
    image: '/images/products/PA.jpeg',
    rating: 4.4,
    reviews: 58,
    category: 'Químicos Industriais',
    features: ['Proteção anticorrosiva', 'Secagem rápida', 'Aplicação spray']
  },
  {
    id: 'prod-20',
    name: 'Ducha Lorenzetti Advanced Multi',
    description: 'Seleção de temperaturas e grande vazão para conforto no banho.',
    price: 239.9,
    originalPrice: 289.9,
    discount: 17,
    image: '/images/products/Ducha%20Lorenzeti.jpeg',
    rating: 4.6,
    reviews: 189,
    category: 'Instalações Hidráulicas',
    features: ['4 temperaturas', 'Resistência blindada', 'Design compacto']
  },
  {
    id: 'prod-21',
    name: 'Ducha Lorenzetti Advanced Flex',
    description: 'Controle eletrônico de temperatura e bico direcionável com ducha manual.',
    price: 269.9,
    originalPrice: 329.9,
    discount: 18,
    image: '/images/products/Ducha%20Lorenzeti2.jpeg',
    rating: 4.7,
    reviews: 147,
    category: 'Instalações Hidráulicas',
    features: ['9 temperaturas', 'Resistência troca rápida', 'Inclui ducha manual']
  },
  {
    id: 'prod-22',
    name: 'Carrinho de Mão Aço Reforçado',
    description: 'Estrutura galvanizada com bandeja grande para construções pesadas.',
    price: 399.9,
    originalPrice: 459.9,
    discount: 13,
    image: '/images/products/Carrinhodemao01.jpeg',
    rating: 4.6,
    reviews: 132,
    category: 'Construção Civil',
    features: ['Bandeja 65L', 'Pneu maciço', 'Pintura epóxi']
  },
  {
    id: 'prod-23',
    name: 'Carrinho de Mão Plástico 65L',
    description: 'Leve, resistente e ideal para paisagismo e manutenção urbana.',
    price: 369.9,
    originalPrice: 429.9,
    discount: 14,
    image: '/images/products/Carrinhodemao02.jpeg',
    rating: 4.5,
    reviews: 101,
    category: 'Construção Civil',
    features: ['65 Litros', 'Pneu inflável', 'Estrutura reforçada']
  }
];

export const statistics = [
  { value: '500+', label: 'Produtos' },
  { value: '10+', label: 'Anos de Experiência' },
  { value: '1000+', label: 'Clientes Satisfeitos' },
];

// Arquivo mockData.ts: mantém coleções de produtos de destaque, grid e estatísticas.
// Conjuntos principais: heroProducts (destaques hero), featuredProducts (destaques compactos), gridProducts (cards da seção produtos), statistics (indicadores globais).
