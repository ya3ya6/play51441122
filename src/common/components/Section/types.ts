export interface PostModel {
  id: number;
  name: string;
  abstract: string;
  cover: string;
  coverAlt: string;
  link: string;
  createdAt: string;
  video: string | null;
  commentsCount: number;
  views: number;
  type: 'N' | 'M';
  contentType: 'C' | 'T' | 'V';
}
