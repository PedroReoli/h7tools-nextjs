# 🚀 Guia de Início Rápido - H7TOOLS

## Instalação e Execução

### 1️⃣ Instalar Dependências

```bash
npm install
```

### 2️⃣ Executar em Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3️⃣ Build para Produção

```bash
npm run build
npm start
```

---

## 📂 Estrutura Visual do Projeto

```
h7tools-nextjs/
│
├── 📁 src/
│   │
│   ├── 📁 app/                          # Next.js App Router
│   │   ├── 🎨 globals.css              # Estilos globais
│   │   ├── ⚙️ layout.tsx                # Layout principal
│   │   └── 🏠 page.tsx                  # Página inicial
│   │
│   ├── 📁 components/                   # Componentes React
│   │   │
│   │   ├── 📁 atoms/                    # 🔬 Componentes Básicos
│   │   │   ├── Button.tsx              # Botões
│   │   │   ├── Card.tsx                # Cards
│   │   │   ├── Text.tsx                # Textos
│   │   │   ├── Badge.tsx               # Badges
│   │   │   └── Star.tsx                # Estrelas
│   │   │
│   │   ├── 📁 molecules/                # 🧪 Componentes Compostos
│   │   │   ├── Rating.tsx              # Sistema de avaliação
│   │   │   ├── ProductCard.tsx         # Card de produto
│   │   │   ├── HeroCard.tsx            # Card hero
│   │   │   └── ProductCarousel.tsx     # Carrossel
│   │   │
│   │   ├── 📁 organisms/                # 🦠 Seções Complexas
│   │   │   ├── Navbar.tsx              # Navegação
│   │   │   ├── HeroSection.tsx         # Seção hero
│   │   │   ├── ProductGrid.tsx         # Grid de produtos
│   │   │   ├── AboutSection.tsx        # Seção sobre
│   │   │   └── Footer.tsx              # Rodapé
│   │   │
│   │   └── 📁 templates/                # 📄 Templates
│   │       └── LandingPageTemplate.tsx # Template da landing
│   │
│   ├── 📁 hooks/                        # Custom Hooks
│   │   ├── useScrollPosition.ts        # Hook de scroll
│   │   └── useCarousel.ts              # Hook de carrossel
│   │
│   ├── 📁 types/                        # TypeScript Types
│   │   └── index.ts                    # Interfaces e tipos
│   │
│   └── 📁 utils/                        # Utilitários
│       ├── cn.ts                        # Merge de classes
│       └── mockData.ts                  # Dados mockados
│
├── 📁 public/                           # Arquivos públicos
│
├── ⚙️ tailwind.config.ts                 # Config Tailwind
├── ⚙️ tsconfig.json                      # Config TypeScript
├── ⚙️ next.config.js                     # Config Next.js
├── 📦 package.json                       # Dependências
├── 📖 README.md                          # Documentação principal
├── 📖 ARCHITECTURE.md                    # Arquitetura detalhada
└── 📖 GETTING_STARTED.md                 # Este arquivo
```

---

## 🎨 Atomic Design - Resumo Visual

```
┌─────────────────────────────────────────────────────────┐
│                       PAGE (Página)                     │
│  ┌───────────────────────────────────────────────────┐  │
│  │              TEMPLATE (Template)                  │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │          ORGANISM (Navbar)                  │  │  │
│  │  │  ┌─────────────┐  ┌─────────────┐          │  │  │
│  │  │  │  MOLECULE   │  │  MOLECULE   │          │  │  │
│  │  │  │  ┌───┐┌───┐ │  │  ┌───┐┌───┐ │          │  │  │
│  │  │  │  │ATM││ATM│ │  │  │ATM││ATM│ │          │  │  │
│  │  │  │  └───┘└───┘ │  │  └───┘└───┘ │          │  │  │
│  │  │  └─────────────┘  └─────────────┘          │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🔨 Como Adicionar Novos Componentes

### Criando um Novo Atom

```typescript
// src/components/atoms/NewAtom.tsx
import React from 'react';
import { cn } from '@/utils/cn';

interface NewAtomProps {
  children: React.ReactNode;
  className?: string;
}

export const NewAtom: React.FC<NewAtomProps> = ({ children, className }) => {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
};
```

```typescript
// src/components/atoms/index.ts
export { NewAtom } from './NewAtom';
```

### Criando uma Nova Molecule

```typescript
// src/components/molecules/NewMolecule.tsx
import React from 'react';
import { Button, Text } from '@/components/atoms';

interface NewMoleculeProps {
  title: string;
  onClick: () => void;
}

export const NewMolecule: React.FC<NewMoleculeProps> = ({ title, onClick }) => {
  return (
    <div className="flex items-center gap-4">
      <Text variant="h6">{title}</Text>
      <Button onClick={onClick}>Ação</Button>
    </div>
  );
};
```

---

## 🎯 Modificando Produtos

### Editando Produtos Existentes

Abra o arquivo `src/utils/mockData.ts`:

```typescript
export const heroProducts: Product[] = [
  {
    id: '1',
    name: 'Seu Produto',              // ✏️ Edite aqui
    description: 'Descrição',          // ✏️ Edite aqui
    price: 899.90,                     // ✏️ Edite aqui
    originalPrice: 1199.90,            // ✏️ Edite aqui
    discount: 25,                      // ✏️ Edite aqui
    image: 'URL_DA_IMAGEM',            // ✏️ Edite aqui
    rating: 4.8,                       // ✏️ Edite aqui
    reviews: 156,                      // ✏️ Edite aqui
    category: 'Categoria'              // ✏️ Edite aqui
  },
  // ... mais produtos
];
```

### Adicionando Novos Produtos

```typescript
export const gridProducts: Product[] = [
  // ... produtos existentes
  {
    id: 'novo-id',
    name: 'Novo Produto',
    description: 'Descrição do novo produto',
    price: 499.90,
    image: 'https://sua-imagem.com/produto.jpg',
    rating: 5.0,
    reviews: 50,
  },
];
```

---

## 🎨 Customizando Cores

### Editando o Tailwind Config

Abra `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#3C3C3C',    // ✏️ Sua cor primária
    dark: '#2A2A2A',
    light: '#4E4E4E',
  },
  secondary: {
    DEFAULT: '#fbbf24',    // ✏️ Sua cor secundária
    dark: '#f59e0b',
    light: '#fcd34d',
  },
}
```

### Usando no Código

```typescript
// Com componente Text
<Text color="primary">Texto Primário</Text>
<Text color="secondary">Texto Secundário</Text>

// Com Tailwind classes
<div className="text-primary bg-secondary">
  Conteúdo
</div>
```

---

## 📱 Testando Responsividade

### Breakpoints do Tailwind

```typescript
// Mobile First
<div className="text-sm">              // Mobile (padrão)
<div className="md:text-base">         // Tablet (768px+)
<div className="lg:text-lg">           // Desktop (1024px+)
<div className="xl:text-xl">           // XL (1280px+)
```

### Teste em Diferentes Tamanhos

1. **Chrome DevTools**: F12 → Toggle Device Toolbar
2. **Tamanhos Comuns**:
   - Mobile: 375x667 (iPhone)
   - Tablet: 768x1024 (iPad)
   - Desktop: 1920x1080

---

## 🔄 Workflow de Desenvolvimento

```
1. 📝 Planejar componente
   ↓
2. 🔨 Criar na pasta correta (atoms/molecules/organisms)
   ↓
3. 🎨 Estilizar com Tailwind
   ↓
4. 🔗 Exportar no index.ts
   ↓
5. 🧪 Testar responsividade
   ↓
6. ✅ Integrar no template/página
```

---

## 🐛 Troubleshooting

### Problema: Estilos não aparecem

```bash
# Limpar cache do Next.js
rm -rf .next
npm run dev
```

### Problema: TypeScript errors

```bash
# Reinstalar dependências
rm -rf node_modules
npm install
```

### Problema: Imagens não carregam

Verifique o `next.config.js`:

```javascript
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'seu-dominio.com'],
  },
}
```

---

## 📚 Recursos Úteis

### Documentação
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

### Ferramentas
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code Extension
- [ES7+ React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - VS Code Extension

---

## ✅ Checklist do Projeto

- [x] Configuração Next.js
- [x] Configuração TypeScript
- [x] Configuração Tailwind
- [x] Atoms criados
- [x] Molecules criados
- [x] Organisms criados
- [x] Template criado
- [x] Página principal
- [x] Responsividade
- [x] Navegação
- [x] Carrosséis
- [x] Grid de produtos
- [x] Seção sobre
- [x] Footer

---

## 🎉 Próximos Passos

1. ✨ Personalize os produtos com seus dados reais
2. 🎨 Ajuste as cores para sua marca
3. 📸 Adicione suas próprias imagens
4. 🚀 Deploy no Vercel/Netlify
5. 📊 Adicione analytics
6. 🛒 Implemente carrinho de compras
7. 🔐 Adicione autenticação

---

**Pronto para começar! 🚀**

Se tiver dúvidas, consulte:
- `README.md` - Visão geral do projeto
- `ARCHITECTURE.md` - Arquitetura detalhada


