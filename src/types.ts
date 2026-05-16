export interface Profile {
  id: string;
  name: string;
  code: string;
  age: number;
  location: string;
  area: string;
  country: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  isPremium: boolean;
  isNew: boolean;
  isRecommended: boolean;
  price?: string;
  phone?: string;
  whatsapp?: string;
  telegram?: string;
  description?: string;
  services?: string[];
  gallery?: string[];
}

export type Area = 'Central' | 'East' | 'North' | 'North East' | 'West';
