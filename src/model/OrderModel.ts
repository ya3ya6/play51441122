export type OrderModel = {
  createdAt: string;
  updatedAt: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  phoneNumber: string;
  mobileNumber: string;
  orderitemSet: {
    id: number;
    product: {
      id: number;
      name: string;
    };
  }[];
};
