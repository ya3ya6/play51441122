interface BaseCategory {
  id: number;
  name: string;
  slug: string;
  parent_id: number;
  count: number;
  cover: string;
  cover_alt: string;
  description: string;
}

interface ICategory extends BaseCategory {
  posts: {
    id: number;
    name: string;
    cover: string;
    cover_alt: string;
    slug: string;
  }[];
}

export type GetBlogCategoriesAxiosResponseType = ICategory[];

export interface GetBlogCategoryAxiosResponseType extends BaseCategory {
  children: ICategory[];
}

export type GetBlogCategoriesArgsType = {
  type?: 'N' | 'M';
};

export type GetBlogCategoryArgsType = ICategory['slug'];
