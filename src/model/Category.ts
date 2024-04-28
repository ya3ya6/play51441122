interface BaseCategory {
  id: number;
  name: string;
  slug: string;
  parentId: number;
  count: number;
  cover: string;
  coverAlt: string;
  description: string;
}

export interface SimpleCategoryModel extends BaseCategory {
  posts: {
    id: number;
    name: string;
    cover: string;
    coverAlt: string;
    slug: string;
  }[];
}

export interface CategoryModel<Children extends SimpleCategoryModel = SimpleCategoryModel>
  extends BaseCategory {
  children: Children[];
}
