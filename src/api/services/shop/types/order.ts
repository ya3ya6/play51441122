export interface PostOrderAPIArgsType {
  full_name: string;
  city: string;
  company: string;
  address: string;
  phone_number: string;
  mobile_number: string;
}

export type GetOrdersAPIArgsType = {
  status?: 'CO' | 'FA' | 'CR';
};

export type GetOrdersAPIAxiosResponseType = {
  id: number;
  supporter_name: string | null;
  support_call: string | null;
  created_at: string;
  status: 'CO' | 'FA' | 'CR';
  products: {
    id: number;
    name: string;
    catelog: string;
    purchase_type: string;
    slug: string;
    cover: string;
    cover_alt: string;
  }[];
}[];
