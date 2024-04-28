import { useProductQuery } from '@/api/services/shop';
import { useRouter } from 'next/router';

export const useProduct = () => {
  const router = useRouter();
  const { data } = useProductQuery(router.query.productSlug as string);
  return data!;
};
