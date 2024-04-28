export interface ArticleBoxPT {
  article: {
    id: number;
    title: string;
    text: string;
    image: { image: string; alt: string; bgImage: string };
    user: { name: string };
    date: string;
    slug: string;
  };
}
