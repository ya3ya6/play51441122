import { SubCategoriesSection } from '@/common/components/Section';
import { Center, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { SimpleCategoryModelWithLink } from './types';

interface CategoryFeatureProps {
  title: string;
  categories: SimpleCategoryModelWithLink[];
}

export const CategoryFeature: FunctionComponent<CategoryFeatureProps> = ({ title, categories }) => {
  return (
    <Center mb="80px" mt="-40px">
      <Container my="50px" maxW="container.xl">
        <SubCategoriesSection
          categories={categories}
          isSubCategories={false}
          title={title}
          name={title}
        />
      </Container>
    </Center>
  );
};
