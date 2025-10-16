# 🎨 Estrutura Visual do Projeto H7TOOLS

## 🌲 Árvore Completa do Projeto

```
h7tools-nextjs/
│
├── 📦 node_modules/              # Dependências (instaladas)
│
├── 📁 src/                        # Código-fonte principal
│   │
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 🎨 globals.css         # Estilos globais + animações
│   │   ├── ⚙️  layout.tsx          # Layout raiz com metadata SEO
│   │   └── 🏠 page.tsx             # Página inicial (Home)
│   │
│   ├── 📁 components/             # Componentes React (Atomic Design)
│   │   │
│   │   ├── 📁 atoms/ (🔬 Nível 1 - Componentes Básicos)
│   │   │   ├── Button.tsx         # 4 variantes de botão
│   │   │   ├── Card.tsx           # 3 variantes de card
│   │   │   ├── Text.tsx           # 9 variantes tipográficas
│   │   │   ├── Badge.tsx          # 4 variantes de badge
│   │   │   ├── Star.tsx           # Estrela para rating
│   │   │   └── index.ts           # Exports centralizados
│   │   │
│   │   ├── 📁 molecules/ (🧪 Nível 2 - Componentes Compostos)
│   │   │   ├── Rating.tsx         # Sistema de avaliação ⭐⭐⭐⭐⭐
│   │   │   ├── ProductCard.tsx    # Card completo de produto
│   │   │   ├── HeroCard.tsx       # Card para hero section
│   │   │   ├── ProductCarousel.tsx # Carrossel com navegação
│   │   │   └── index.ts           # Exports centralizados
│   │   │
│   │   ├── 📁 organisms/ (🦠 Nível 3 - Seções Complexas)
│   │   │   ├── Navbar.tsx         # Navegação + scroll detection
│   │   │   ├── HeroSection.tsx    # Seção hero com carrosséis
│   │   │   ├── ProductGrid.tsx    # Grid responsivo de produtos
│   │   │   ├── AboutSection.tsx   # Seção sobre a empresa
│   │   │   ├── Footer.tsx         # Rodapé completo
│   │   │   └── index.ts           # Exports centralizados
│   │   │
│   │   └── 📁 templates/ (📄 Nível 4 - Layouts Completos)
│   │       ├── LandingPageTemplate.tsx  # Template da landing
│   │       └── index.ts           # Exports centralizados
│   │
│   ├── 📁 hooks/                  # Custom React Hooks
│   │   ├── useScrollPosition.ts   # Detecta posição do scroll
│   │   └── useCarousel.ts         # Gerencia estado do carrossel
│   │
│   ├── 📁 types/                  # Definições TypeScript
│   │   └── index.ts               # Interfaces e tipos
│   │
│   └── 📁 utils/                  # Utilitários
│       ├── cn.ts                  # Merge de classNames
│       └── mockData.ts            # 13 produtos + estatísticas
│
├── 📄 .eslintrc.json              # Configuração ESLint
├── 📄 .gitattributes              # Configuração Git
├── 📄 .gitignore                  # Arquivos ignorados pelo Git
├── 📄 env.example                 # Exemplo de variáveis de ambiente
├── 📄 next.config.js              # Configuração do Next.js
├── 📄 package.json                # Dependências do projeto
├── 📄 postcss.config.js           # Configuração PostCSS
├── 📄 tailwind.config.ts          # Configuração do Tailwind
├── 📄 tsconfig.json               # Configuração do TypeScript
│
├── 📖 README.md                   # Documentação principal
├── 📖 ARCHITECTURE.md             # Arquitetura detalhada
├── 📖 GETTING_STARTED.md          # Guia de início rápido
├── 📖 COMPONENT_GUIDE.md          # Guia de componentes
├── 📖 PROJECT_SUMMARY.md          # Resumo do projeto
└── 📖 VISUAL_STRUCTURE.md         # Este arquivo
```

---

## 🏗️ Fluxo Atomic Design

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    🏠 PAGE (page.tsx)                           │
│                    └─ Dados dos produtos                       │
│                                                                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              📄 TEMPLATE (LandingPageTemplate)                  │
│              └─ Organiza estrutura da página                   │
│                                                                 │
└─┬───────┬───────┬───────┬───────┬──────────────────────────────┘
  │       │       │       │       │
  ▼       ▼       ▼       ▼       ▼
┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
│Nav │ │Hero│ │Grid│ │Abou│ │Foot│  🦠 ORGANISMS
│bar │ │Sect│ │Sect│ │tSec│ │er  │  └─ Seções completas
└─┬──┘ └─┬──┘ └─┬──┘ └─┬──┘ └─┬──┘
  │      │      │      │      │
  ▼      ▼      ▼      ▼      ▼
┌──────────────────────────────┐
│  🧪 MOLECULES                │
│  ├─ ProductCarousel          │
│  ├─ ProductCard              │
│  ├─ HeroCard                 │
│  └─ Rating                   │
│  └─ Combinações de atoms     │
└───────────┬──────────────────┘
            │
            ▼
┌──────────────────────────────┐
│  🔬 ATOMS                    │
│  ├─ Button                   │
│  ├─ Card                     │
│  ├─ Text                     │
│  ├─ Badge                    │
│  └─ Star                     │
│  └─ Elementos básicos        │
└──────────────────────────────┘
```

---

## 🎨 Mapa de Componentes por Seção

### 🏠 Navbar
```
Navbar (Organism)
├── Text (logo)
├── Button (login)
└── Menu Mobile
    └── Button items
```

### 🎯 Hero Section
```
HeroSection (Organism)
├── Text (título + subtítulo)
└── ProductCarousel × 2 (Molecule)
    ├── HeroCard × N (Molecule)
    │   ├── Card (Atom)
    │   ├── Text × 3 (Atom)
    │   └── Button (Atom)
    └── Navigation Controls
```

### 🛍️ Product Grid
```
ProductGrid (Organism)
├── Text (título + descrição)
└── Grid
    └── ProductCard × N (Molecule)
        ├── Card (Atom)
        ├── Badge (Atom)
        ├── Text × 3 (Atom)
        ├── Rating (Molecule)
        │   └── Star × 5 (Atom)
        └── Button × 2 (Atom)
```

### ℹ️ About Section
```
AboutSection (Organism)
├── Text (título + descrição × 2)
└── Statistics Grid
    └── Text × 6 (Atom)
```

### 📧 Footer
```
Footer (Organism)
├── Text (logo + títulos)
├── Links × N
└── Social Icons
    └── Button × 3 (Atom)
```

---

## 🔄 Fluxo de Dados

```
📊 mockData.ts (Fonte de Dados)
        │
        ├─ heroProducts (3 produtos)
        ├─ featuredProducts (2 produtos)
        ├─ gridProducts (8 produtos)
        └─ statistics (3 stats)
        │
        ▼
🏠 page.tsx (Página)
        │
        └─ Importa dados
        │
        ▼
📄 LandingPageTemplate (Template)
        │
        ├─ handlers: handleBuy, handleView
        │
        ├────▶ HeroSection
        │      └─ products={heroProducts}
        │
        ├────▶ ProductGrid
        │      └─ products={gridProducts}
        │
        └────▶ AboutSection
               └─ statistics={statistics}
```

---

## 🎨 Sistema de Cores

```css
┌──────────────────────────────────────┐
│  🎨 Paleta de Cores H7TOOLS          │
├──────────────────────────────────────┤
│                                      │
│  PRIMARY (Primária)                  │
│  ████ #3C3C3C (Cinza Escuro)         │
│  ├─ dark:  #2A2A2A                   │
│  └─ light: #4E4E4E                   │
│                                      │
│  SECONDARY (Secundária)              │
│  ████ #fbbf24 (Yellow-400)           │
│  ├─ dark:  #f59e0b                   │
│  └─ light: #fcd34d                   │
│                                      │
│  BACKGROUND                          │
│  ████ rgb(17 24 39) (Gray-900)       │
│                                      │
└──────────────────────────────────────┘
```

---

## 📊 Hierarquia Tipográfica

```
┌────────────────────────────────────────┐
│  📝 Tipografia (Fonte: Inter)          │
├────────────────────────────────────────┤
│                                        │
│  H1  ▓▓▓▓▓▓  4xl → 5xl → 6xl          │
│  H2  ▓▓▓▓▓   3xl → 4xl → 5xl          │
│  H3  ▓▓▓▓    2xl → 3xl → 4xl          │
│  H4  ▓▓▓     xl  → 2xl → 3xl          │
│  H5  ▓▓      lg  → xl  → 2xl          │
│  H6  ▓       base→ lg  → xl           │
│  Body ▓      base (16px)              │
│  Caption     sm (14px)                │
│  Small       xs (12px)                │
│                                        │
│  Mobile → Tablet → Desktop            │
│                                        │
└────────────────────────────────────────┘
```

---

## 📱 Grid Responsivo

```
┌─────────────────────────────────────────┐
│  📱 Mobile (< 768px)                    │
│  ┌──────────────────────────────────┐  │
│  │         Produto 1                │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │         Produto 2                │  │
│  └──────────────────────────────────┘  │
│  1 coluna                               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  💻 Tablet (768px - 1024px)             │
│  ┌─────────────┐  ┌─────────────┐      │
│  │  Produto 1  │  │  Produto 2  │      │
│  └─────────────┘  └─────────────┘      │
│  ┌─────────────┐  ┌─────────────┐      │
│  │  Produto 3  │  │  Produto 4  │      │
│  └─────────────┘  └─────────────┘      │
│  2 colunas                              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  🖥️  Desktop (1024px - 1280px)          │
│  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │ Prod 1 │  │ Prod 2 │  │ Prod 3 │    │
│  └────────┘  └────────┘  └────────┘    │
│  3 colunas                              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  🖥️  XL Desktop (> 1280px)              │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐        │
│  │ P1 │  │ P2 │  │ P3 │  │ P4 │        │
│  └────┘  └────┘  └────┘  └────┘        │
│  4 colunas                              │
└─────────────────────────────────────────┘
```

---

## 🎭 Estados dos Componentes

```
┌─────────────────────────────────────────┐
│  🎭 Estados Visuais                     │
├─────────────────────────────────────────┤
│                                         │
│  Button:                                │
│    Normal    ▓▓▓▓▓                      │
│    Hover     ▓▓▓▓▓ ↗️ (scale 105%)      │
│    Focus     ▓▓▓▓▓ (ring)               │
│    Disabled  ░░░░░                      │
│                                         │
│  Card:                                  │
│    Normal    ▓▓▓▓▓ (shadow-md)          │
│    Hover     ▓▓▓▓▓ (shadow-xl)          │
│                                         │
│  Navbar:                                │
│    Top       ░░░░░ (transparent)        │
│    Scrolled  ▓▓▓▓▓ (white + shadow)     │
│                                         │
│  Carousel:                              │
│    Active    ████ (yellow, w-8)         │
│    Inactive  ▓▓ (gray, w-2)             │
│                                         │
└─────────────────────────────────────────┘
```

---

## ⚡ Performance & Otimizações

```
┌─────────────────────────────────────────┐
│  ⚡ Otimizações Implementadas            │
├─────────────────────────────────────────┤
│                                         │
│  ✅ Next.js Image Optimization          │
│     └─ Lazy loading automático          │
│     └─ WebP format                      │
│     └─ Responsive images                │
│                                         │
│  ✅ Code Splitting                      │
│     └─ Componentes carregados sob       │
│        demanda                          │
│                                         │
│  ✅ CSS Optimization                    │
│     └─ Tailwind purge                   │
│     └─ Apenas classes usadas            │
│                                         │
│  ✅ App Router                          │
│     └─ Server Components                │
│     └─ Streaming                        │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🔐 Type Safety

```typescript
┌─────────────────────────────────────────┐
│  🔐 TypeScript Type Safety              │
├─────────────────────────────────────────┤
│                                         │
│  Interface Product {                    │
│    id: string          ✓               │
│    name: string        ✓               │
│    description: string ✓               │
│    price: number       ✓               │
│    originalPrice?: number              │
│    discount?: number                   │
│    image: string       ✓               │
│    rating: number      ✓               │
│    reviews: number     ✓               │
│    category?: string                   │
│  }                                      │
│                                         │
│  Type ButtonVariant =                   │
│    | 'primary'                          │
│    | 'secondary'                        │
│    | 'outline'                          │
│    | 'ghost'                            │
│                                         │
│  ✅ 100% Type Coverage                  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📦 Dependências

```
┌─────────────────────────────────────────┐
│  📦 Dependências Principais             │
├─────────────────────────────────────────┤
│                                         │
│  Production:                            │
│    next            ^14.0.0              │
│    react           ^18.2.0              │
│    react-dom       ^18.2.0              │
│    lucide-react    ^0.292.0             │
│                                         │
│  Development:                           │
│    typescript      ^5.2.2               │
│    @types/node     ^20.9.0              │
│    @types/react    ^18.2.37             │
│    tailwindcss     ^3.3.5               │
│    autoprefixer    ^10.4.16             │
│    postcss         ^8.4.31              │
│                                         │
│  Total: 10 dependências                 │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🎯 Pontos de Entrada

```
┌─────────────────────────────────────────┐
│  🎯 Principais Pontos de Entrada        │
├─────────────────────────────────────────┤
│                                         │
│  🏠 Página Principal                    │
│     src/app/page.tsx                    │
│                                         │
│  📄 Template                            │
│     src/components/templates/           │
│     LandingPageTemplate.tsx             │
│                                         │
│  🎨 Estilos                             │
│     src/app/globals.css                 │
│                                         │
│  ⚙️  Configurações                       │
│     tailwind.config.ts                  │
│     tsconfig.json                       │
│     next.config.js                      │
│                                         │
│  📊 Dados                               │
│     src/utils/mockData.ts               │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🚀 Comandos NPM

```bash
┌─────────────────────────────────────────┐
│  🚀 Comandos Disponíveis                │
├─────────────────────────────────────────┤
│                                         │
│  npm run dev                            │
│  └─ Inicia servidor de desenvolvimento  │
│     http://localhost:3000               │
│                                         │
│  npm run build                          │
│  └─ Cria build de produção              │
│     .next/ folder                       │
│                                         │
│  npm run start                          │
│  └─ Inicia servidor de produção         │
│     Requer build primeiro               │
│                                         │
│  npm run lint                           │
│  └─ Verifica erros ESLint               │
│                                         │
└─────────────────────────────────────────┘
```

---

## ✅ Status do Projeto

```
┌─────────────────────────────────────────┐
│  ✅ Status: COMPLETO                    │
├─────────────────────────────────────────┤
│                                         │
│  Configuração       ████████ 100%       │
│  Componentes        ████████ 100%       │
│  Hooks              ████████ 100%       │
│  Utilitários        ████████ 100%       │
│  Tipos              ████████ 100%       │
│  Páginas            ████████ 100%       │
│  Documentação       ████████ 100%       │
│  Responsividade     ████████ 100%       │
│                                         │
│  🎉 PRONTO PARA PRODUÇÃO                │
│                                         │
└─────────────────────────────────────────┘
```

---

**📚 Documentação Completa:**
- `README.md` - Visão geral
- `ARCHITECTURE.md` - Arquitetura detalhada
- `GETTING_STARTED.md` - Início rápido
- `COMPONENT_GUIDE.md` - Guia de componentes
- `PROJECT_SUMMARY.md` - Resumo executivo
- `VISUAL_STRUCTURE.md` - Este arquivo

**🎨 Desenvolvido com Atomic Design + Next.js 14 + TypeScript + Tailwind CSS**


