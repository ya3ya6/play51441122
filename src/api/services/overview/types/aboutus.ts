export interface GetAboutusAPIAxiosResponse {
  title: string;
  description: string;
  video: string;
  cover: string;
  cover_alt: string;
  simple_products: {
    id: number;
    name: string;
    description: string;
    url: string;
    images: {
      id: number;
      image: string;
      image_alt: string;
    }[];
  }[];
  social_media_links: {
    id: number;
    name: string;
    url: string;
    slug: string;
  }[];
  phone_number: string;
  mobile_number: string;
  email: string;
  working_time_text: string;
  address: string;
  postal_code: string;
  homepage_title: string;
  homepage_subtitle: string;
  customer_satisfaction_count: number;
  services_count: number;
}

export type GetAboutusTeamAPIAxiosResponse = {
  id: number;
  name: string;
  order: number;
  team_members: {
    id: number;
    name: string;
    role: string;
    image: string;
    image_alt: string;
    description: string;
  }[];
}[];
