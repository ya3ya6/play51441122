import { FunctionComponent, useMemo, useState } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useProductsQuery } from '@/api/services/shop';
import { ProductList } from './ProductList/ProductList';
import { VideoBox } from './VideoBox/VideoBox';
import { DataType } from '../../types';
import { COLORS } from '../../constant';

export const VideoSection: FunctionComponent = () => {
  const t = useText(I18_NAMESPACES.SHOP);
  const { data } = useProductsQuery({ isVip: true });
  const posts = data?.results ?? [];

  const [activeItemId, setActiveItemId] = useState<number>(-1);

  const items: DataType[] = useMemo(
    () =>
      posts.slice(0, 4).map(({ id, name, cover, coverAlt, videoUrl }, index) => ({
        id,
        name,
        videoUrl,
        image: cover,
        imageAlt: coverAlt,
        ...COLORS[index],
      })),
    [posts],
  );

  if (!posts.length) {
    return null;
  }

  const activeItem = items.find(item => item.id === activeItemId) ?? items[0];

  return (
    <Box>
      <Container maxW="container.xl">
        <Flex mb="20px" align="center" direction="column">
          <Heading size="md">{t('lastProducts.title')}</Heading>
          <Text color="GrayText">{t('lastProducts.description')}</Text>
        </Flex>
        <ProductList activeVideo={activeItem} setActiveVideo={setActiveItemId} data={items} />
      </Container>
      <VideoBox activeVideo={activeItem} />
    </Box>
  );
};
