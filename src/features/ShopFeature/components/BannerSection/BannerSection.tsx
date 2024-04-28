import { useBannersQuery } from '@/api/services/shop';
import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BannerList } from './BannerList/BannerList';

export const BannerSection: FunctionComponent = () => {
  const { data: banners } = useBannersQuery(null);

  return (
    <Box
      w="100%"
      bgImage="url(/images/shop/bgHeader.png)"
      bgPos="200px"
      bgSize="contain"
      mt="80px"
      mb="150px"
      pb="200px"
    >
      <Container maxW="container.xl">
        {banners?.length ? <BannerList banners={banners} /> : null}
      </Container>
    </Box>
  );
};
