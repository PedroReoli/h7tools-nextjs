# 📖 Guia de Componentes H7TOOLS

Este guia mostra como usar cada componente do projeto.

---

## 🔬 ATOMS

### Button

Botão versátil com múltiplas variantes.

```tsx
import { Button } from '@/components/atoms';

// Variante Primary (padrão)
<Button variant="primary">
  Comprar Agora
</Button>

// Variante Secondary
<Button variant="secondary">
  Saiba Mais
</Button>

// Variante Outline
<Button variant="outline">
  Ver Detalhes
</Button>

// Variante Ghost
<Button variant="ghost">
  Cancelar
</Button>

// Full Width
<Button variant="primary" fullWidth>
  Enviar
</Button>

// Com evento onClick
<Button 
  variant="primary" 
  onClick={() => alert('Clicou!')}
>
  Clique Aqui
</Button>

// Desabilitado
<Button variant="primary" disabled>
  Indisponível
</Button>
```

---

### Card

Container para agrupar conteúdo.

```tsx
import { Card } from '@/components/atoms';

// Card padrão
<Card variant="default">
  <p>Conteúdo do card</p>
</Card>

// Card transparente com borda
<Card variant="transparent">
  <p>Card com fundo transparente</p>
</Card>

// Card elevado (mais sombra)
<Card variant="elevated">
  <p>Card com elevação</p>
</Card>

// Card clicável
<Card 
  variant="default" 
  onClick={() => console.log('Card clicado')}
>
  <p>Clique no card</p>
</Card>

// Card com classes customizadas
<Card variant="default" className="p-6 bg-blue-500">
  <p>Card customizado</p>
</Card>
```

---

### Text

Componente de texto tipográfico responsivo.

```tsx
import { Text } from '@/components/atoms';

// Headings
<Text variant="h1">Título Principal</Text>
<Text variant="h2">Subtítulo Grande</Text>
<Text variant="h3">Subtítulo Médio</Text>
<Text variant="h4">Subtítulo Pequeno</Text>
<Text variant="h5">Cabeçalho Pequeno</Text>
<Text variant="h6">Cabeçalho Menor</Text>

// Body text
<Text variant="body">Texto de parágrafo normal</Text>
<Text variant="caption">Texto de legenda</Text>
<Text variant="small">Texto pequeno</Text>

// Cores
<Text variant="h3" color="primary">Texto Primário</Text>
<Text variant="h3" color="secondary">Texto Secundário</Text>
<Text variant="h3" color="white">Texto Branco</Text>
<Text variant="body" color="gray">Texto Cinza</Text>

// Bold
<Text variant="h4" bold>Texto em Negrito</Text>

// Tag customizada
<Text variant="h2" as="span">
  Renderiza como span ao invés de h2
</Text>

// Classes customizadas
<Text variant="body" className="text-center underline">
  Texto centralizado e sublinhado
</Text>
```

---

### Badge

Tags e labels para destacar informações.

```tsx
import { Badge } from '@/components/atoms';

// Variantes
<Badge variant="primary">Novo</Badge>
<Badge variant="secondary">Destaque</Badge>
<Badge variant="success">Disponível</Badge>
<Badge variant="danger">-50%</Badge>

// Com classes customizadas
<Badge variant="primary" className="text-lg">
  Grande
</Badge>

// Uso em produtos
<div className="relative">
  <img src="produto.jpg" />
  <Badge variant="danger" className="absolute top-2 right-2">
    -25%
  </Badge>
</div>
```

---

### Star

Estrela para sistema de avaliação.

```tsx
import { Star } from '@/components/atoms';

// Estrela preenchida
<Star filled />

// Estrela vazia
<Star filled={false} />

// Tamanhos
<Star filled size="sm" />
<Star filled size="md" />
<Star filled size="lg" />

// Classes customizadas
<Star filled className="text-blue-500" />
```

---

## 🧪 MOLECULES

### Rating

Sistema de avaliação com estrelas.

```tsx
import { Rating } from '@/components/molecules';

// Básico
<Rating rating={4.5} />

// Com número de reviews
<Rating rating={4.8} reviews={156} />

// Sem mostrar reviews
<Rating rating={3.5} reviews={50} showReviews={false} />

// Tamanhos
<Rating rating={5} size="sm" />
<Rating rating={5} size="md" />
<Rating rating={5} size="lg" />
```

---

### ProductCard

Card completo de produto.

```tsx
import { ProductCard } from '@/components/molecules';
import { Product } from '@/types';

const product: Product = {
  id: '1',
  name: 'Furadeira Elétrica',
  description: 'Potente e durável',
  price: 299.90,
  originalPrice: 399.90,
  discount: 25,
  image: '/produto.jpg',
  rating: 4.5,
  reviews: 89,
};

<ProductCard 
  product={product}
  onBuy={(product) => console.log('Comprar:', product)}
  onView={(product) => console.log('Ver:', product)}
/>
```

---

### HeroCard

Card especial para seção hero.

```tsx
import { HeroCard } from '@/components/molecules';

<HeroCard 
  product={product}
  onBuy={(product) => alert(`Comprando: ${product.name}`)}
/>
```

---

### ProductCarousel

Carrossel de produtos.

```tsx
import { ProductCarousel } from '@/components/molecules';

const products = [product1, product2, product3];

// Com autoplay
<ProductCarousel 
  products={products}
  onBuy={(product) => console.log('Comprar:', product)}
  autoPlay
  interval={5000}
/>

// Sem autoplay
<ProductCarousel 
  products={products}
  autoPlay={false}
/>
```

---

## 🦠 ORGANISMS

### Navbar

Navegação principal do site.

```tsx
import { Navbar } from '@/components/organisms';

// Simples
<Navbar />

// A navbar já inclui:
// - Logo da empresa
// - Links de navegação
// - Botão de login
// - Ícone de carrinho
// - Menu mobile responsivo
// - Mudança de estilo no scroll
```

---

### HeroSection

Seção hero com carrosséis.

```tsx
import { HeroSection } from '@/components/organisms';

const heroProducts = [product1, product2, product3];

<HeroSection 
  products={heroProducts}
  onBuy={(product) => handleBuy(product)}
/>
```

---

### ProductGrid

Grid responsivo de produtos.

```tsx
import { ProductGrid } from '@/components/organisms';

const allProducts = [product1, product2, /* ... */];

<ProductGrid 
  products={allProducts}
  onBuy={(product) => handleBuy(product)}
  onView={(product) => handleView(product)}
/>
```

---

### AboutSection

Seção sobre a empresa.

```tsx
import { AboutSection } from '@/components/organisms';

const statistics = [
  { value: '500+', label: 'Produtos' },
  { value: '10+', label: 'Anos' },
  { value: '1000+', label: 'Clientes' },
];

<AboutSection statistics={statistics} />
```

---

### Footer

Rodapé do site.

```tsx
import { Footer } from '@/components/organisms';

<Footer />

// O footer já inclui:
// - Informações da empresa
// - Links rápidos
// - Contatos
// - Redes sociais
// - Copyright
```

---

## 📄 TEMPLATES

### LandingPageTemplate

Template completo da landing page.

```tsx
import { LandingPageTemplate } from '@/components/templates';

<LandingPageTemplate 
  heroProducts={heroProducts}
  gridProducts={gridProducts}
  statistics={statistics}
/>

// Inclui automaticamente:
// - Navbar
// - HeroSection
// - ProductGrid
// - AboutSection
// - Footer
```

---

## 🎣 HOOKS

### useScrollPosition

Hook para detectar posição do scroll.

```tsx
'use client';

import { useScrollPosition } from '@/hooks/useScrollPosition';

export function MyComponent() {
  const scrollPosition = useScrollPosition();
  
  return (
    <div className={scrollPosition > 100 ? 'bg-white' : 'bg-transparent'}>
      Scroll: {scrollPosition}px
    </div>
  );
}
```

---

### useCarousel

Hook para gerenciar carrossel.

```tsx
'use client';

import { useCarousel } from '@/hooks/useCarousel';

export function MyCarousel({ items }) {
  const { currentIndex, next, previous, goTo } = useCarousel({
    itemsCount: items.length,
    autoPlay: true,
    interval: 3000,
  });
  
  return (
    <div>
      <div>Item: {items[currentIndex]}</div>
      <button onClick={previous}>Anterior</button>
      <button onClick={next}>Próximo</button>
      <button onClick={() => goTo(0)}>Ir para primeiro</button>
    </div>
  );
}
```

---

## 🛠️ UTILITIES

### cn (className merger)

Função para combinar classes CSS.

```tsx
import { cn } from '@/utils/cn';

// Básico
<div className={cn('base-class', 'another-class')}>

// Com condicionais
<div className={cn(
  'base-class',
  isActive && 'active-class',
  !isDisabled && 'enabled-class'
)}>

// Com props className
function MyComponent({ className }) {
  return (
    <div className={cn('default-styles', className)}>
      Conteúdo
    </div>
  );
}
```

---

## 📊 TIPOS

### Product

```typescript
import { Product } from '@/types';

const product: Product = {
  id: '1',                           // ID único
  name: 'Nome do Produto',           // Nome
  description: 'Descrição',          // Descrição
  price: 299.90,                     // Preço atual
  originalPrice: 399.90,             // Preço original (opcional)
  discount: 25,                      // Desconto % (opcional)
  image: '/produto.jpg',             // URL da imagem
  rating: 4.5,                       // Avaliação (0-5)
  reviews: 89,                       // Número de reviews
  category: 'Ferramentas',           // Categoria (opcional)
};
```

---

### Variantes

```typescript
import { ButtonVariant, CardVariant, TextVariant } from '@/types';

const buttonVariant: ButtonVariant = 'primary';     // 'primary' | 'secondary' | 'outline' | 'ghost'
const cardVariant: CardVariant = 'default';         // 'default' | 'transparent' | 'elevated'
const textVariant: TextVariant = 'h1';              // 'h1' | 'h2' | ... | 'body' | 'caption' | 'small'
```

---

## 🎨 Exemplos Completos

### Card de Produto Customizado

```tsx
import { Card, Button, Text, Badge } from '@/components/atoms';
import { Rating } from '@/components/molecules';

function CustomProductCard({ product }) {
  return (
    <Card variant="elevated" className="overflow-hidden">
      {/* Imagem */}
      <div className="relative h-48 bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discount && (
          <Badge 
            variant="danger" 
            className="absolute top-2 right-2"
          >
            -{product.discount}%
          </Badge>
        )}
      </div>
      
      {/* Conteúdo */}
      <div className="p-4 space-y-3">
        <Text variant="h6">{product.name}</Text>
        <Text variant="caption" color="gray">
          {product.description}
        </Text>
        
        <Rating rating={product.rating} reviews={product.reviews} />
        
        <div className="flex items-baseline gap-2">
          <Text variant="h5" color="secondary" bold>
            R$ {product.price.toFixed(2)}
          </Text>
          {product.originalPrice && (
            <Text variant="caption" className="line-through text-gray-400">
              R$ {product.originalPrice.toFixed(2)}
            </Text>
          )}
        </div>
        
        <Button variant="primary" fullWidth>
          Adicionar ao Carrinho
        </Button>
      </div>
    </Card>
  );
}
```

---

### Seção Hero Customizada

```tsx
import { Text, Button } from '@/components/atoms';

function CustomHeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary to-gray-800 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <Text variant="h1" color="white">
              Ferramentas de <span className="text-secondary">Qualidade</span>
            </Text>
            <Text variant="h5" className="text-gray-300">
              Os melhores produtos para profissionais exigentes
            </Text>
            <div className="flex gap-4">
              <Button variant="primary">Ver Produtos</Button>
              <Button variant="outline">Saiba Mais</Button>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="relative h-96">
            <img 
              src="/hero-image.jpg" 
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

**📚 Para mais detalhes, consulte:**
- `README.md` - Visão geral
- `ARCHITECTURE.md` - Arquitetura completa
- `GETTING_STARTED.md` - Início rápido


