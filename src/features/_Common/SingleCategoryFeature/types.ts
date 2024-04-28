export type SimplePostModel = {
  id: number;
  name: string;
  abstract: string;
  cover: string;
  coverAlt: string;
  link: string;
  slug: string;
  category: {
    id: number;
    name: string;
  };
};
