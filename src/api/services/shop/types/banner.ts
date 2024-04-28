interface IBanner {
  id: number;
  title: string;
  sub_title: string;
  description: string;
  url: string;
  special_text: string;
  image: string;
  image_alt: string;
  order: number;
}

type GetBannersAPIAxiosResponseType = IBanner[];

export type { IBanner, GetBannersAPIAxiosResponseType };
