export type GetPostsArgsType = {
  categorySlug?: string;
  isVip?: boolean;
  page?: number | string;
  pageSize?: number | string;
  type?: 'M' | 'N';
  contentType?: 'C' | 'T' | 'V';
  ordering?: string;
  name?: string;
};

export type GetPostArgsType = {
  slug: string;
  type: 'M' | 'N';
};

export interface GetPostsAPIResponseType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    name: string;
    abstract: string;
    cover: string;
    cover_alt: string;
    slug: string;
    created_at: string;
    views: number;
    video: string | null;
    type: 'M' | 'N';
    content_type: 'C' | 'T' | 'V';
    comments_count: number;
    category: {
      id: number;
      name: string;
    };
  }[];
}

export interface GetPostAPIResponseType {
  id: number;
  name: string;
  slug: string;
  type: 'M' | 'N';
  author: string;
  created_at: string;
  comments_count: number;
  content_type: 'C' | 'T' | 'V';
  category: {
    id: number;
    name: string;
  };
  description: string;
  cover: string;
  cover_alt: string;
  video: string | null;
  faq: {
    id: number;
    question: string;
    answer: string;
  }[];
  related_posts: {
    id: number;
    type: 'M' | 'N';
    name: string;
    cover: string;
    cover_alt: string;
    slug: string;
    created_at: string;
  }[];
}
