import { FunctionComponent } from 'react';
import { useShopCategoriesQuery } from '@/api/services/shop/_queries';
import ROUTES from '@/routers';
import { CategoryFeature } from '../_Common';

interface CategoryFeatureProps {
  title: string;
}

export const ShopCategoryFeature: FunctionComponent<CategoryFeatureProps> = ({ title }) => {
  const { data } = useShopCategoriesQuery(null);

  const categories = data?.map(category => ({
    ...category,
    link: ROUTES.SHOP.CATEGORY.CATEGOTY(category.slug),
    posts: category.posts.map(post => ({
      ...post,
      link: ROUTES.PRODUCT.PRODUCT(post.slug),
    })),
  }));

  return <CategoryFeature categories={categories ?? []} title={title} />;
};
