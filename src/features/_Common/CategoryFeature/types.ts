import { SimpleCategoryModel } from '@/model/Category';

interface SimpleCategoryModelWithLink extends SimpleCategoryModel {
  link: string;
  posts: {
    id: number;
    name: string;
    cover: string;
    coverAlt: string;
    slug: string;
    link: string;
  }[];
}

export type { SimpleCategoryModelWithLink };
