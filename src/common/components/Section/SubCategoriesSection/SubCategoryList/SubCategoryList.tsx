import { SimpleCategoryModelWithLink } from '@/features/_Common/CategoryFeature/types';
import Utils from '@/utils';
import { Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import SubCategoryBox from './SubCategoryBox/SubCategoryBox';

interface SubCategoryListProps {
  isSubCategories: boolean;
  categories: SimpleCategoryModelWithLink[];
  isShop?: boolean;
}

const SubCategoryList: FunctionComponent<SubCategoryListProps> = ({
  isSubCategories,
  categories,
}) => {
  return (
    <Grid
      gridTemplateColumns={Utils.DesignUtils.ReponsiveGridBreakPoint()}
      my="20px"
      w="100%"
      gap={{ base: '30px', xl: '20px' }}
    >
      {categories.map(category => (
        <SubCategoryBox hasImage={!isSubCategories} key={category.id} {...category} />
      ))}
    </Grid>
  );
};

export default SubCategoryList;
