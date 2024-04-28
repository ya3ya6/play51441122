export type SingleProductModel = {
  id: number;
  name: string;
  slug: string;
  cover: string;
  coverAlt: string;
  abstract: string;
  category: {
    id: number;
    name: string;
  };
};

export type ProductModel = {
  id: 0;
  name: string;
  slug: string;
  subTitle: string;
  description: string;
  abstract: string;
  cover: string;
  coverAlt: string;
  videoText: string;
  videoUrl: string;
  quantity: number;
  catalog: string;
  category: {
    id: number;
    name: string;
  };
  imageGallery: {
    id: number;
    image: string;
    imageAlt: string;
  }[];
  specification: {
    id: number;
    title: string;
    description: string;
  }[];
  salesCondition: {
    id: number;
    text: string;
  }[];
  customerOpinion: {
    id: number;
    name: string;
    subName: string;
    description: string;
    video: string;
    cover: string;
    coverAlt: string;
  }[];
};
