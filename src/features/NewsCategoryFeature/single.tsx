import { useBlogCategoryQuery } from '@/api/services/blog/_queries';
import { CategoryModel } from '@/model/Category';
import ROUTES from '@/routers';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SimpleCategoryModelWithLink } from '@/features/_Common/CategoryFeature/types';
import { numberOrDefault } from '@/utils/helpers';
import { SingleCategoryFeature } from '../_Common';
import { SimplePostModel } from '../_Common/SingleCategoryFeature/types';
import { useCategoryPosts } from './hooks';

export const NewsSingleCategoryFeature: FC = () => {
  const router = useRouter();
  const { data } = useBlogCategoryQuery(router.query.categorySlug as string);
  const { data: posts } = useCategoryPosts();

  const category: CategoryModel<SimpleCategoryModelWithLink> = {
    ...data!,
    children:
      data?.children?.map(child => ({
        ...child,
        link: ROUTES.NEWS.CATEGORY.CATEGOTY(child.slug),
        posts: child.posts.map(post => ({
          ...post,
          link: ROUTES.NEWS.POST(post.slug),
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
    posts?.results.map(post => ({
      ...post,
      link: ROUTES.NEWS.POST(post.slug),
    })) ?? [];

  return category ? (
    <SingleCategoryFeature
      category={category}
      posts={singleCategoryPosts}
      currentPage={numberOrDefault(router.query.page, 1)}
      setPage={setPage}
      totalPosts={posts?.count ?? 1}
    />
  ) : null;
};
