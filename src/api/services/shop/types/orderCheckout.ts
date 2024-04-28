export interface GetOrderCheckoutAPIAxiosResponseType {
  items: {
    product: {
      id: number;
      name: string;
      abstract: string;
      is_available: boolean;
      purchase_type: 'F' | 'P';
      cover: string;
      cover_alt: string;
      slug: string;
      price: string;
    };
  }[];
}

export interface PostOrderCheckoutAPIArgsType {
  items: number[];
}
