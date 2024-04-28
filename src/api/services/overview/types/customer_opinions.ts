export interface GetCustomerOpinionsAPIAxiosResponse {
  name: string;
  customer_opinion: {
    id: number;
    name: string;
    sub_name: string;
    description: string;
    video: string;
    cover: string;
    cover_alt: string;
  }[];
}

export interface GetCustomerOpinionsAPIArgs {
  slug: string;
}
