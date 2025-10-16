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

## 🎯 Funcionalidades

### ✨ Recursos Principais

- **Design Responsivo**: Mobile-first com breakpoints otimizados
- **Navegação Suave**: Scroll suave entre seções
- **Carrossel Automático**: Produtos em destaque com navegação
- **Animações**: Transições suaves e hover effects
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Otimizações do Next.js (Image, lazy loading)

### 🎨 Componentes Interativos

- Navbar com mudança de estilo no scroll
- Carrosséis automáticos de produtos
- Cards de produtos com hover effects
- Sistema de avaliação com estrelas
- Menu mobile responsivo

## 🔧 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Lint do código
npm run lint
```

## 📱 Seções da Landing Page

### 1. Hero Section
- Título e subtítulo
- Dois carrosséis de produtos lado a lado
- Navegação automática com indicadores
- Fundo com padrão de pontos

### 2. Product Grid
- Grid responsivo (1, 2, 3 ou 4 colunas)
- Cards de produtos com imagem, preço, avaliação
- Botões de compra e visualização
- Badges de desconto

### 3. About Section
- Informações sobre a empresa
- Estatísticas (500+ Produtos, 10+ Anos, 1000+ Clientes)
- Layout duas colunas com imagem
- Fundo escuro com texto claro

### 4. Footer
- Informações de contato
- Links rápidos
- Redes sociais
- Copyright

## 🎨 Customização

### Cores
Edite o arquivo `tailwind.config.ts` para customizar as cores:

```typescript
colors: {
  primary: {
    DEFAULT: '#3C3C3C',
    dark: '#2A2A2A',
    light: '#4E4E4E',
  },
  secondary: {
    DEFAULT: '#fbbf24',
    dark: '#f59e0b',
    light: '#fcd34d',
  },
}
```

### Produtos
Edite o arquivo `src/utils/mockData.ts` para adicionar/modificar produtos:

```typescript
export const heroProducts: Product[] = [
  {
    id: '1',
    name: 'Produto Nome',
    description: 'Descrição do produto',
    price: 899.90,
    // ... mais campos
  },
];
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Faça push do código para GitHub/GitLab/Bitbucket
2. Importe o projeto no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático!

### Outros Provedores
```bash
# Build
npm run build

# Os arquivos estarão em .next/
# Configure seu servidor para servir a aplicação Next.js
```

## 📝 Boas Práticas Implementadas

- ✅ TypeScript para type safety
- ✅ Atomic Design para organização
- ✅ Components reutilizáveis
- ✅ Código limpo e documentado
- ✅ Performance otimizada
- ✅ Responsividade total
- ✅ Acessibilidade (a11y)
- ✅ SEO friendly

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**H7TOOLS**

---

Desenvolvido com ❤️ usando Next.js e Tailwind CSS
