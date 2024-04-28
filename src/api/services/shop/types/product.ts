export interface GetProductAPIArgsType {
  category: number;
  is_vip: boolean;
  page: number;
  page_size: number;
  type: 'M' | 'P';
}

export interface GetProductsAPIResponseType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    name: string;
    abstract: string;
    cover: string;
    cover_alt: string;
    video_url: string | null;
    slug: string;
    category: {
      id: number;
      name: string;
    };
  }[];
}

export type GetProductsArgsType = {
  categorySlug?: string;
  isVip?: boolean;
  page?: number | string;
  pageSize?: number | string;
  type?: 'M' | 'S';
};

// =========================== PRODUCT ======================================

export type GetProductAPIResponseType = {
  id: number;
  name: string;
  slug: string;
  sub_title: string;
  description: string;
  abstract: string;
  price: string;
  cover: string;
  cover_alt: string;
  video_text: string;
  video_url: string;
  quantity: number;
  catalog: string;
  category: {
    id: number;
    name: string;
  };
  image_gallery: {
    id: number;
    image: string;
    image_alt: string;
  }[];
  specification: {
    id: number;
    title: string;
    description: string;
  }[];
  sales_condition: {
    id: number;
    text: string;
  }[];
  customer_opinion: {
    id: number;
    name: string;
    sub_name: string;
    description: string;
    video: string;
    cover_alt: string;
    cover: string;
  }[];
};

export type GetProductArgsType = GetProductAPIResponseType['slug'];
