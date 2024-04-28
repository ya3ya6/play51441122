import { useShopCategoryQuery } from '@/api/services/shop';
import { CategoryModel } from '@/model/Category';
import ROUTES from '@/routers';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SimpleCategoryModelWithLink } from '@/features/_Common/CategoryFeature/types';
import { numberOrDefault } from '@/utils/helpers';
import { SingleCategoryFeature } from '../_Common';
import { SimplePostModel } from '../_Common/SingleCategoryFeature/types';
import { useCategoryProducts } from './hooks';

export const ShopSingleCategoryFeature: FC = () => {
  const router = useRouter();
  const { data } = useShopCategoryQuery(router.query.categorySlug as string);
  const { data: products } = useCategoryProducts();

  const category: CategoryModel<SimpleCategoryModelWithLink> = {
    ...data!,
    children:
      data?.children?.map(child => ({
        ...child,
        link: ROUTES.SHOP.CATEGORY.CATEGOTY(child.slug),
        posts: child.posts.map(post => ({
          ...post,
          link: ROUTES.PRODUCT.PRODUCT(post.slug),
        })),
      })) ?? [],
  };

  const setPage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: String(page),
      },
    });
  };

  const singleCategoryPosts: SimplePostModel[] =
    products?.results.map(product => ({
      ...product,
      link: ROUTES.PRODUCT.PRODUCT(product.slug),
    })) ?? [];

  return category ? (
    <SingleCategoryFeature
      category={category}
      isShop
      posts={singleCategoryPosts}
      currentPage={numberOrDefault(router.query.page, 1)}
      setPage={setPage}
      totalPosts={products?.count ?? 1}
    />
  ) : null;
};
