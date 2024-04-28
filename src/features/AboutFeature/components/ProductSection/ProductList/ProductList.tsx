import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cube';
import 'swiper/css';

// import required modules
import { EffectCube, Autoplay } from 'swiper';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import Link from 'next/link';
import classes from './ProductList.module.css';

interface Props {
  product: {
    id: number;
    name: string;
    description: string;
    url: string;
    images: {
      id: number;
      image: string;
      imageAlt: string;
    }[];
  };
}

export const ProductList: FunctionComponent<Props> = ({ product }) => {
  const t = useText(I18_NAMESPACES.ABOUT);
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      h="100%"
      w={{ base: '100%', md: '50%' }}
    >
      <Swiper
        effect="cube"
        grabCursor
        speed={1500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        cubeEffect={{
          shadow: false,
        }}
        modules={[Autoplay, EffectCube]}
        className={classes.swiper}
      >
        {product.images.map(image => (
          <SwiperSlide className={classes.swiperSlide} key={image.id}>
            <img src={image.image} alt={image.imageAlt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box mt="40px" p="10px" w="100%">
        <Heading color="gray.700" mb="15px" size="md">
          {product.name}
        </Heading>
        <Text lineHeight="35px" color="gray.500" textAlign="justify">
          {product.description}
        </Text>
        <Flex w="100%" align="center">
          {!!product.url && (
            <Link passHref href={product.url}>
              <Button as="a" ms="auto" variant="ghost" mt="15px" colorScheme="linkedin" size="sm">
                {t('products.btn')}
              </Button>
            </Link>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
