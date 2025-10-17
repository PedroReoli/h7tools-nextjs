export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviews: number;
  category?: string;
  features?: string[];
  inStock?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type CardVariant = 'default' | 'transparent' | 'elevated';
export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';


