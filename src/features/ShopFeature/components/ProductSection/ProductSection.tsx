import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { Pagination } from '@/common/components/Box';
import { useProductsQuery } from '@/api/services/shop';
import { useRouter } from 'next/router';
import { numberOrDefault } from '@/utils/helpers';
import { ProductList } from './ProductList/ProductList';

export const ProductSection: FunctionComponent = () => {
  const router = useRouter();
  const pageSize = numberOrDefault(router.query.pageSize, 10);
  const currentPage = numberOrDefault(router.query.page, 1);

  const { data } = useProductsQuery({
    page: currentPage,
    pageSize,
  });

  const products = data?.results ?? [];

  const totalPages = Math.min((data?.count ?? 1) / pageSize, 1);

  const setPage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: page.toString(),
      },
    });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const t = useText(I18_NAMESPACES.SHOP);

  if (products.length === 0) {
    return null;
  }

  return (
    <Box mt="-200px">
      <Box mb={{ base: '140px', lg: '0' }}>
        <Stack mb="-100px" align="center" spacing="10px">
          <Heading textAlign="center" size="md">
            {t('allproducts.title')}
          </Heading>
          <Text textAlign="center" color="GrayText">
            {t('allProducts.description')}
          </Text>
        </Stack>
        <Box display={{ base: 'none', lg: 'block' }}>
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="170.49"
            viewBox="0 0 1440 170.49"
          >
            <path
              id="Intersection_1"
              data-name="Intersection 1"
              d="M0,177V6.511S357.8,148.7,717.8,148.7,1440,6.511,1440,6.511V177Z"
              transform="translate(0 -6.51)"
              fill="#f3f3f3"
            />
          </svg>
        </Box>
      </Box>
      <ProductList products={products} />
      <Box>
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="170.49"
          viewBox="0 0 1440 170.49"
        >
          <path
            id="Intersection_2"
            data-name="Intersection 2"
            d="M0,177V6.511S357.8,148.7,717.8,148.7,1440,6.511,1440,6.511V177Z"
            transform="translate(1440 177) rotate(180)"
            fill="#f3f3f3"
          />
        </svg>
        <Pagination
          mt="-80px"
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setPage}
        />
      </Box>
    </Box>
  );
};
