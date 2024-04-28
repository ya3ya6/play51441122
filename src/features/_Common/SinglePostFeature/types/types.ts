export interface PostDetailModel {
  id: number;
  name: string;
  slug: string;
  type: 'M' | 'N';
  author: string;
  createdAt: string;
  contentType: 'C' | 'T' | 'V';
  category: {
    id: number;
    name: string;
  };
  description: string;
  cover: string;
  coverAlt: string;
  video: string | null;
  commentsCount: number;
  faq: {
    id: number;
    question: string;
    answer: string;
  }[];
  relatedPosts: {
    id: number;
    name: string;
    cover: string;
    coverAlt: string;
    type: 'M' | 'N';
    slug: string;
    createdAt: string;
  }[];
}
