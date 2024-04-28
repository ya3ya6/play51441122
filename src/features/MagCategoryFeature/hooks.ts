import { usePostsQuery } from '@/api/services/blog/_queries';
import { numberOrDefault } from '@/utils/helpers';
import { useRouter } from 'next/router';

export const useCategoryPosts = () => {
  const router = useRouter();
  return usePostsQuery({
    categorySlug: router.query.categorySlug as string,
    page: numberOrDefault(router.query.page, 1),
    pageSize: numberOrDefault(router.query.pageSize, 10),
  });
};
