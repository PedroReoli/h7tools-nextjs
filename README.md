# H7TOOLS Landing Page

Landing page profissional para H7TOOLS desenvolvida com Next.js 14, TypeScript e Tailwind CSS, seguindo a arquitetura Atomic Design.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **Atomic Design** - Arquitetura de componentes

## 📁 Estrutura do Projeto

```
h7tools-nextjs/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout raiz
│   │   └── page.tsx           # Página principal
│   ├── components/
│   │   ├── atoms/             # Componentes básicos
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Text.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Star.tsx
│   │   ├── molecules/         # Combinações de átomos
│   │   │   ├── Rating.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── HeroCard.tsx
│   │   │   └── ProductCarousel.tsx
│   │   ├── organisms/         # Seções complexas
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── Footer.tsx
│   │   └── templates/         # Templates de página
│   │       └── LandingPageTemplate.tsx
│   ├── hooks/                 # Custom React Hooks
│   │   ├── useScrollPosition.ts
│   │   └── useCarousel.ts
│   ├── types/                 # Definições TypeScript
│   │   └── index.ts
│   └── utils/                 # Funções utilitárias
│       ├── cn.ts              # Utility para classNames
│       └── mockData.ts        # Dados mockados
├── public/                    # Arquivos estáticos
├── tailwind.config.ts         # Configuração do Tailwind
├── tsconfig.json              # Configuração do TypeScript
├── next.config.js             # Configuração do Next.js
└── package.json               # Dependências do projeto
```

## 🎨 Paleta de Cores

- **Primária**: `#3C3C3C` (Cinza escuro)
- **Secundária**: `#fbbf24` (Yellow-400)
- **Fundo Escuro**: `rgb(17 24 39)` (Gray-900)

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd h7tools-nextjs
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🏗️ Arquitetura Atomic Design

### Atoms (Átomos)
Componentes básicos e indivisíveis:
- `Button` - Botão com variantes (primary, secondary, outline, ghost)
- `Card` - Card com variantes (default, transparent, elevated)
- `Text` - Componente de texto tipográfico
- `Badge` - Badge para tags e labels
- `Star` - Estrela para avaliações

### Molecules (Moléculas)
Combinações de átomos:
- `Rating` - Sistema de avaliação com estrelas
- `ProductCard` - Card completo de produto
- `HeroCard` - Card para seção hero
- `ProductCarousel` - Carrossel de produtos

### Organisms (Organismos)
Seções complexas da página:
- `Navbar` - Navegação principal com scroll detection
- `HeroSection` - Seção hero com carrosséis
- `ProductGrid` - Grid responsivo de produtos
- `AboutSection` - Seção sobre a empresa
- `Footer` - Rodapé com informações

### Templates
Templates de página completos:
- `LandingPageTemplate` - Template da landing page

