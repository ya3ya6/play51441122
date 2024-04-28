export interface GetOverviewAPIAxiosResponse {
  product_count: number;
  news_count: number;
  mags_count: number;
  news: {
    id: number;
    name: string;
    cover: string;
    cover_alt: string;
    created_at: string;
    author: string;
    slug: string;
    abstract: string;
    type: 'N';
    content_type: 'T' | 'V';
  }[];
  mags: {
    id: number;
    name: string;
    cover: string;
    cover_alt: string;
    created_at: string;
    slug: string;
    author: string;
    abstract: string;
  }[];
  products: {
    id: number;
    name: string;
    cover: string;
    cover_alt: string;
    created_at: string;
    slug: string;
    abstract: string;
  }[];
}
