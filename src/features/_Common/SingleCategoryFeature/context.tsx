import { CategoryModel } from '@/model/Category';
import { createContext, FC, useContext, useMemo } from 'react';
import { SimpleCategoryModelWithLink } from '../CategoryFeature/types';
import { SimplePostModel } from './types';

interface SingleCategoryFeatureContext {
  category: CategoryModel<SimpleCategoryModelWithLink>;
  posts: SimplePostModel[];
  prevPage: () => void;
  nextPage: () => void;
  setPage: (page: number) => void;
  currentPage: number;
  totalPosts: number;
}

const SingleCategoryContext = createContext<SingleCategoryFeatureContext | undefined>(undefined);

type Props = {
  children: React.ReactNode;
} & Pick<
  SingleCategoryFeatureContext,
  'category' | 'currentPage' | 'setPage' | 'posts' | 'totalPosts'
>;

const SingleCategoryProivder: FC<Props> = ({
  children,
  category,
  currentPage,
  setPage,
  ...props
}) => {
  const prevPage = () => {
    setPage(currentPage - 1);
  };

  const nextPage = () => {
    setPage(currentPage + 1);
  };

  const value = useMemo(
    () => ({
      category,
      currentPage,
      setPage,
      prevPage,
      nextPage,
      ...props,
    }),
    [category, currentPage, setPage, prevPage, nextPage, props],
  );

  return <SingleCategoryContext.Provider value={value}>{children}</SingleCategoryContext.Provider>;
};

const useSingleCategoryFeature = () => {
  const context = useContext(SingleCategoryContext);
  if (context === undefined) {
    throw new Error('useSingleCategoryFeature must be used within a SingleCategoryFeatureProvider');
  }
  return context;
};

export { useSingleCategoryFeature, SingleCategoryProivder };
