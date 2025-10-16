# Documentação da Arquitetura - H7TOOLS Landing Page

## 📐 Visão Geral da Arquitetura

Este projeto segue a metodologia **Atomic Design** criada por Brad Frost, que organiza os componentes em uma hierarquia clara e escalável.

## 🏗️ Estrutura Atomic Design

### Níveis da Arquitetura

```
Atoms → Molecules → Organisms → Templates → Pages
```

### 1. Atoms (Átomos) 🔬

**Definição**: Os menores componentes da interface, indivisíveis e reutilizáveis.

**Localização**: `src/components/atoms/`

**Componentes Implementados**:

#### Button
```typescript
<Button variant="primary | secondary | outline | ghost" fullWidth>
  Texto do Botão
</Button>
```
- Variantes: primary, secondary, outline, ghost
- Suporta todos os props nativos de button
- Animações hover e focus

#### Card
```typescript
<Card variant="default | transparent | elevated">
  Conteúdo
</Card>
```
- Variantes para diferentes estilos
- Suporte a onClick para cards interativos
- Transições suaves

#### Text
```typescript
<Text variant="h1 | h2 | ... | body | caption" color="primary | secondary | white" bold>
  Texto
</Text>
```
- Hierarquia tipográfica completa (h1-h6, body, caption, small)
- Cores customizáveis
- Responsivo por padrão

#### Badge
```typescript
<Badge variant="primary | secondary | success | danger">
  Label
</Badge>
```
- Para tags, labels e indicators
- Cores variadas

#### Star
```typescript
<Star filled size="sm | md | lg" />
```
- Componente de estrela para ratings
- Estados filled/unfilled

---

### 2. Molecules (Moléculas) 🧪

**Definição**: Combinações de átomos que formam componentes funcionais.

**Localização**: `src/components/molecules/`

**Componentes Implementados**:

#### Rating
```typescript
<Rating rating={4.5} reviews={123} size="sm | md | lg" showReviews />
```
- Sistema de avaliação com estrelas
- Contador de reviews opcional
- Tamanhos variados

#### ProductCard
```typescript
<ProductCard 
  product={productData} 
  onBuy={handleBuy} 
  onView={handleView} 
/>
```
- Card completo de produto
- Imagem, título, descrição, preço, rating
- Botões de ação (Comprar, Ver)
- Badge de desconto
- Hover effects

#### HeroCard
```typescript
<HeroCard product={productData} onBuy={handleBuy} />
```
- Card estilizado para hero section
- Fundo transparente com borda
- Maior destaque visual

#### ProductCarousel
```typescript
<ProductCarousel 
  products={products} 
  onBuy={handleBuy}
  autoPlay 
  interval={5000}
/>
```
- Carrossel automático de produtos
- Navegação com setas
- Indicadores de posição
- Auto-play configurável

---

### 3. Organisms (Organismos) 🦠

**Definição**: Seções complexas que combinam moléculas e átomos.

**Localização**: `src/components/organisms/`

**Componentes Implementados**:

#### Navbar
```typescript
<Navbar />
```
**Características**:
- Navegação fixa com scroll detection
- Muda de transparente para branca no scroll
- Menu mobile responsivo
- Links com scroll suave
- Carrinho de compras
- Logo da marca

**Hooks Utilizados**: `useScrollPosition`

#### HeroSection
```typescript
<HeroSection products={heroProducts} onBuy={handleBuy} />
```
**Características**:
- Seção hero full-screen
- Dois carrosséis lado a lado
- Fundo com padrão de pontos
- Título e subtítulo
- Responsivo (stack em mobile)

#### ProductGrid
```typescript
<ProductGrid 
  products={gridProducts} 
  onBuy={handleBuy} 
  onView={handleView} 
/>
```
**Características**:
- Grid responsivo (1-4 colunas)
- Título da seção
- Cards de produtos
- Breakpoints: mobile (1), tablet (2), desktop (3), xl (4)

#### AboutSection
```typescript
<AboutSection statistics={statistics} />
```
**Características**:
- Layout duas colunas (texto + imagem)
- Fundo escuro
- Estatísticas da empresa
- Informações sobre a empresa

#### Footer
```typescript
<Footer />
```
**Características**:
- 4 colunas de informação
- Links rápidos
- Contatos
- Redes sociais
- Copyright

---

### 4. Templates 📄

**Definição**: Estruturas de página que organizam os organismos.

**Localização**: `src/components/templates/`

#### LandingPageTemplate
```typescript
<LandingPageTemplate 
  heroProducts={heroProducts}
  gridProducts={gridProducts}
  statistics={statistics}
/>
```
**Estrutura**:
1. Navbar (fixo)
2. HeroSection
3. ProductGrid
4. AboutSection
5. Footer

**Responsabilidades**:
- Organizar os organismos
- Gerenciar handlers globais
- Passar dados para componentes

---

### 5. Pages 📱

**Definição**: Instâncias de templates com dados reais.

**Localização**: `src/app/`

#### Home Page
```typescript
// src/app/page.tsx
export default function Home() {
  return (
    <LandingPageTemplate
      heroProducts={heroProducts}
      gridProducts={gridProducts}
      statistics={statistics}
    />
  );
}
```

---

## 🔧 Utilitários e Hooks

### Custom Hooks

#### useScrollPosition
```typescript
const scrollPosition = useScrollPosition();
```
- Retorna a posição atual do scroll
- Atualiza em tempo real
- Usado na Navbar para mudar estilo

#### useCarousel
```typescript
const { currentIndex, next, previous, goTo } = useCarousel({
  itemsCount: products.length,
  autoPlay: true,
  interval: 5000,
});
```
- Gerencia estado de carrossel
- Auto-play opcional
- Navegação (next, previous, goTo)

### Utilities

#### cn (className merger)
```typescript
import { cn } from '@/utils/cn';

cn('base-class', condition && 'conditional-class', className);
```
- Merge de classNames
- Suporta condicionais
- Type-safe

### Mock Data

**Localização**: `src/utils/mockData.ts`

**Dados Disponíveis**:
- `heroProducts` - Produtos para hero section
- `featuredProducts` - Produtos em destaque
- `gridProducts` - Produtos para grid
- `statistics` - Estatísticas da empresa

---

## 📊 Fluxo de Dados

```
Page (dados) → Template (organização) → Organisms (seções) 
  → Molecules (componentes) → Atoms (elementos)
```

**Exemplo**:
```
page.tsx (heroProducts)
  ↓
LandingPageTemplate (passa dados e handlers)
  ↓
HeroSection (renderiza carrosséis)
  ↓
ProductCarousel (gerencia navegação)
  ↓
HeroCard (exibe produto)
  ↓
Button, Text, Card (UI elements)
```

---

## 🎨 Sistema de Design

### Cores

```typescript
// Primárias
primary: '#3C3C3C'        // Cinza escuro
secondary: '#fbbf24'      // Yellow-400
background-dark: 'rgb(17 24 39)' // Gray-900

// Variantes
primary-dark: '#2A2A2A'
primary-light: '#4E4E4E'
secondary-dark: '#f59e0b'
secondary-light: '#fcd34d'
```

### Tipografia

```typescript
h1: 'text-4xl md:text-5xl lg:text-6xl font-bold'
h2: 'text-3xl md:text-4xl lg:text-5xl font-bold'
h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold'
h4: 'text-xl md:text-2xl lg:text-3xl font-semibold'
h5: 'text-lg md:text-xl lg:text-2xl font-medium'
h6: 'text-base md:text-lg lg:text-xl font-medium'
body: 'text-base'
caption: 'text-sm'
small: 'text-xs'
```

### Espaçamentos

```typescript
// Container
max-width: 1200px (7xl)
padding: px-4 sm:px-6 lg:px-8

// Sections
py-16 md:py-24 (64px / 96px)

// Components
gap-4 md:gap-8 (16px / 32px)
```

### Sombras

```typescript
shadow-md      // Cards padrão
shadow-lg      // Botões
shadow-xl      // Hover states
shadow-2xl     // Elevated cards
```

---

## 📱 Responsividade

### Breakpoints (Tailwind padrão)
```typescript
sm: 640px   // Small devices
md: 768px   // Medium devices (tablets)
lg: 1024px  // Large devices (desktops)
xl: 1280px  // Extra large devices
2xl: 1536px // 2X Extra large devices
```

### Estratégia Mobile-First

```typescript
// Base (mobile)
<div className="text-sm p-4">

// Tablet
<div className="text-sm md:text-base md:p-6">

// Desktop
<div className="text-sm md:text-base lg:text-lg lg:p-8">
```

### Grid Responsivo

```typescript
// ProductGrid
grid-cols-1           // Mobile (1 coluna)
sm:grid-cols-2        // Tablet (2 colunas)
lg:grid-cols-3        // Desktop (3 colunas)
xl:grid-cols-4        // XL Desktop (4 colunas)
```

---

## 🔄 Estados e Interações

### Hover Effects
```typescript
hover:scale-105       // Scale up
hover:shadow-xl       // Shadow increase
hover:bg-secondary    // Background change
hover:-translate-y-1  // Lift effect
```

### Transições
```typescript
transition-all duration-300    // Padrão
transition-transform duration-500  // Carrossel
transition-colors duration-300     // Navbar
```

### Animações
```typescript
animate-fade-in    // Fade in
animate-slide-up   // Slide up
animate-scale-in   // Scale in
```

---

## 🎯 Boas Práticas Implementadas

### 1. Separação de Responsabilidades
- Cada componente tem uma única responsabilidade
- Lógica separada de apresentação
- Hooks customizados para lógica reutilizável

### 2. Composição sobre Herança
- Componentes compostos de componentes menores
- Props para customização
- Slots para conteúdo dinâmico

### 3. Type Safety
- Interfaces TypeScript para todos os dados
- Props tipados
- Enums para variantes

### 4. Performance
- Next.js Image para otimização
- Lazy loading automático
- Memoization quando necessário

### 5. Acessibilidade
- Atributos ARIA
- Estados de foco visíveis
- Navegação por teclado
- Labels descritivos

### 6. Manutenibilidade
- Código limpo e documentado
- Nomes descritivos
- Estrutura consistente
- Fácil de testar

---

## 🚀 Próximos Passos Recomendados

### Funcionalidades
1. Integração com API real
2. Carrinho de compras funcional
3. Sistema de autenticação
4. Filtros de produtos
5. Busca de produtos
6. Página de detalhes do produto
7. Checkout

### Melhorias Técnicas
1. Testes unitários (Jest)
2. Testes E2E (Cypress/Playwright)
3. Storybook para documentação de componentes
4. Analytics (Google Analytics)
5. Error boundaries
6. Loading states
7. Error states
8. Skeleton loaders

### Otimizações
1. Server Components onde possível
2. Suspense boundaries
3. Code splitting
4. Image optimization
5. Font optimization
6. Bundle analysis

---

## 📚 Referências

- [Atomic Design - Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Best Practices](https://react.dev/)

---

Esta arquitetura foi projetada para ser **escalável**, **manutenível** e **performática**, seguindo as melhores práticas da indústria.


