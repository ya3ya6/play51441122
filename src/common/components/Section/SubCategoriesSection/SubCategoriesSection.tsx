import { CategoryChart } from '@/common/components/Design';
import { Box, ChakraProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { SimpleCategoryModelWithLink } from '@/features/_Common/CategoryFeature/types';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import SubCategoryList from './SubCategoryList/SubCategoryList';

interface SubCategoriesSectionProps extends ChakraProps {
  title?: string;
  categories: SimpleCategoryModelWithLink[];
  isSubCategories: boolean;
  isShop?: boolean;
  name: string;
}

/**
 * ### Common Component SECTION.
 */

export const SubCategoriesSection: FunctionComponent<SubCategoriesSectionProps> = ({
  title = 'nameSbuCat',
  isShop = false,
  categories,
  name,
  isSubCategories,
  ...chakraProps
}) => {
  const t = useText(I18_NAMESPACES.CATEGORY);
  return categories.length ? (
    <Box {...chakraProps}>
      <CategoryChart title={t(title, { name })} count={categories.length} hasHero={false} />
      <SubCategoryList isSubCategories={isSubCategories} categories={categories} isShop={isShop} />
    </Box>
  ) : null;
};
