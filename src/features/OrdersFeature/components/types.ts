export interface OrderModel {
  id: number;
  supporterName: string | null;
  supportCall: string | null;
  createdAt: string;
  status: 'CO' | 'FA' | 'CR';
  products: {
    id: number;
    name: string;
    catelog: string;
    purchaseType: string;
    slug: string;
    link: string;
    cover: string;
    coverAlt: string;
  }[];
}
