import { useProductsQuery } from '@/api/services/shop';
import { numberOrDefault } from '@/utils/helpers';
import { useRouter } from 'next/router';

export const useCategoryProducts = () => {
  const router = useRouter();
  return useProductsQuery({
    categorySlug: router.query.categorySlug as string,
    page: numberOrDefault(router.query.page, 1),
    pageSize: numberOrDefault(router.query.pageSize, 10),
  });
};
