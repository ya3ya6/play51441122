import { SubCategoriesSection } from '@/common/components/Section';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { ComponentProps, FunctionComponent } from 'react';
import { HeroSection, PostsSection } from './components';
import { SingleCategoryProivder } from './context';

type SingleCategoryFeatureProps = Omit<
  ComponentProps<typeof SingleCategoryProivder>,
  'children'
> & {
  isShop?: boolean;
};

export const SingleCategoryFeature: FunctionComponent<SingleCategoryFeatureProps> = ({
  isShop = false,
  ...props
}) => {
  const { category } = props;

  return (
    <SingleCategoryProivder {...props}>
      <Head>
        <title>{category.name} | پرنیان</title>
      </Head>
      <Box my="50px">
        <Container my="50px" maxW="container.xl">
          <HeroSection />
          <SubCategoriesSection
            categories={category.children}
            name={category.name}
            isSubCategories
            isShop
          />
        </Container>
        <PostsSection isShop={isShop} />
      </Box>
    </SingleCategoryProivder>
  );
};
