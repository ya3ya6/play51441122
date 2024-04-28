import ROUTES from '@/routers';
import { Center, Flex, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export interface HomeFeaturesPT {
  isActive: boolean;
  name: string;
  cover: string;
  coverAlt: string;
  isNext: boolean;
  isPrev: boolean;
  slug: string;
}

export const OurProductBox: FunctionComponent<HomeFeaturesPT> = ({
  isActive,
  name,
  cover,
  isNext,
  coverAlt,
  slug,
  isPrev,
}) => {
  return (
    <Link href={ROUTES.PRODUCT.PRODUCT(slug)} passHref>
      <Flex
        as="a"
        w="100%"
        rounded="40px"
        minH="calc(250px + 60px )"
        borderY="12px solid"
        borderColor={isActive ? 'var(--primaryColor)' : 'transparent'}
        transform={{ base: 'scale(1)', xl: isActive ? 'scale(1.1)' : 'scale(0.9)' }}
        me={{ base: '0', xl: isNext ? '-30px' : '0' }}
        ms={{ base: '0', xl: isPrev ? '-30px' : '0' }}
        transition="all 0.3s ease-in-out"
        bgColor="white"
        shadow="md"
        direction="column"
        justify="space-between"
        overflow="hidden"
      >
        <Img p="20px" maxH="250px" objectFit="contain" alt={coverAlt} src={cover} />
        <Center h="60px" p="15px">
          <Text noOfLines={1} textAlign="center">
            {name}
          </Text>
        </Center>
      </Flex>
    </Link>
  );
};
