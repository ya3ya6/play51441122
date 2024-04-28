import { FunctionComponent } from 'react';
import { useBlogCategoriesQuery } from '@/api/services/blog/_queries';
import ROUTES from '@/routers';
import { CategoryFeature } from '../_Common';

interface CategoryFeatureProps {
  title: string;
}

export const NewsCategoryFeature: FunctionComponent<CategoryFeatureProps> = ({ title }) => {
  const { data } = useBlogCategoriesQuery({ type: 'N' });

  const categories = data?.map(category => ({
    ...category,
    link: ROUTES.NEWS.CATEGORY.CATEGOTY(category.slug),
    posts: category.posts.map(post => ({
      ...post,
      link: ROUTES.NEWS.POST(post.slug),
    })),
  }));

  return <CategoryFeature categories={categories ?? []} title={title} />;
};
