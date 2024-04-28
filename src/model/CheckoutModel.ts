export type OrderCheckoutProduct = {
  id: number;
  name: string;
  is_available: boolean;
  purchase_type: 'F' | 'P';
  cover: string;
  coverAlt: string;
  slug: string;
  // TODO:: should be optional price
  price: string;
};
