import { Box, Center, Heading, IconButton, Img, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ButtonWithIcon } from '@/common/components/Element';
import { SingleProductModel } from '@/model';
import ROUTES from '@/routers';
import Link from 'next/link';
import { ShoppingBagNavIcon } from '@/common/icons';
import { useAddCheckout } from '@/features/_Separate/ShoppingCardFeature/hooks';

interface Props {
  product: SingleProductModel;
}

export const ProductBox: FunctionComponent<Props> = ({ product }) => {
  const t = useText(I18_NAMESPACES.COMMON);

  const { addItem } = useAddCheckout();

  return (
    <Stack spacing="10px" shadow="md" bgColor="white" p="10px" rounded="2xl" role="group">
      <Center
        mb="10px"
        bgColor="gray.100"
        borderRadius="80px 20px 80px"
        position="relative"
        overflow="hidden"
      >
        {product.cover && (
          <Link href={ROUTES.PRODUCT.PRODUCT(product.slug)} passHref>
            <a>
              <Img
                _groupHover={{
                  transform: 'scale(1.2)',
                }}
                transition="transform 0.5s ease-in-out"
                alt={product.coverAlt}
                src={product.cover}
                objectFit="cover"
                p="20px"
                maxH="200px"
              />
            </a>
          </Link>
        )}
        <Center
          position="absolute"
          right="-50px"
          top="8px"
          _groupHover={{
            right: '8px',
          }}
          transition="right 0.5s ease-in-out"
        >
          <IconButton
            aria-label="add-to-shopping-card"
            icon={<ShoppingBagNavIcon />}
            colorScheme="brand"
            rounded="full"
            fontSize="xl"
            onClick={() => {
              addItem([product.id]);
            }}
          />
        </Center>
      </Center>
      <Stack p="5px" spacing="5px" flex={1}>
        <Heading mb="2px" size="sm">
          {product.name}
        </Heading>
        <Text noOfLines={2} fontSize="md" color="GrayText">
          {product.abstract}
        </Text>
      </Stack>
      <Box my="7px" mt="auto">
        <Link href={ROUTES.PRODUCT.PRODUCT(product.slug)} passHref>
          <ButtonWithIcon as="a" iconPosition="right" colorScheme="brand" color="#fff" size="sm">
            {t('moreBtn')}
          </ButtonWithIcon>
        </Link>
      </Box>
    </Stack>
  );
};
