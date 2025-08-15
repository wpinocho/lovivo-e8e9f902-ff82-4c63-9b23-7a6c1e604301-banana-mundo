export interface BananaProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'fresh' | 'processed' | 'accessories' | 'premium';
  inStock: boolean;
  rating: number;
  bananaLevel: number; // Nivel de bananidad del 1 al 10
}

export interface CartItem extends BananaProduct {
  quantity: number;
}

export interface BananaReview {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}