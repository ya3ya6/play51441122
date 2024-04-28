import { FunctionComponent, useState } from 'react';

import { Box, Container, Flex } from '@chakra-ui/react';
import ROUTES from '@/routers';
import { OurProductList } from './OurProductList/OurProductList';
import OurProductText from './OurProductText/OurProductText';
import { HomeHeading } from '../Common/HomeHeading';
import { useOverview } from '../../hooks';

export const OurProductsSection: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { overview } = useOverview();

  if (!overview?.products.length) {
    return null;
  }

  return (
    <Box mb={{ base: '140px', lg: '50px' }} mt={{ base: '20px', lg: '-50px' }} position="relative">
      <Box
        width="100%"
        margin="0 auto"
        position="absolute"
        top="205px"
        filter="grayscale(50%)"
        height="700px"
        bgImage="images/home/rad.png"
      />
      <Container maxW="container.xl">
        <HomeHeading title="Our products" href={ROUTES.SHOP.INDEX} />
        <Flex direction="column" position="relative">
          <OurProductList setActiveIndex={setActiveIndex} />
          <OurProductText product={overview.products[activeIndex]} />
        </Flex>
      </Container>
    </Box>
  );
};
