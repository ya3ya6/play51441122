import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { ShopIcon } from '@/common/icons';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ButtonWithIcon } from '@/common/components/Element';
import Link from 'next/link';
import { useAddCheckout } from '@/features/_Separate/ShoppingCardFeature/hooks';
import ROUTES from '../../../../../routers/index';

interface Props {
  product: {
    name: string;
    abstract: string;
    slug: string;
    id: number;
  };
}

const OurProductText: FunctionComponent<Props> = ({ product }) => {
  const { addItem, isLoading } = useAddCheckout();

  const t = useText(I18_NAMESPACES.HOME);
  return (
    <Container mt="30px" maxW="container.md">
      <Stack align="center" justify="center" spacing="20px">
        <Heading textAlign="center" lineHeight={10} color="gray.700" size="lg">
          {product?.name}
        </Heading>

        <Text color="gray.600" mt="20px" textAlign="center">
          {product?.abstract}
        </Text>
        <Stack direction="row" mt="30px" spacing="15px">
          <Link href="#contact" style={{ border: '1px solid red' }}>
            <ButtonWithIcon
              iconPosition="left"
              icon={<ShopIcon />}
              colorScheme="brand"
              rounded="full"
              height="45px"
              isLoading={isLoading}
              _loading={{
                width: '155px',
              }}
            >
              {t('products.freeCounseling')}
            </ButtonWithIcon>
          </Link>
          <Link href={ROUTES.PRODUCT.PRODUCT(product?.slug)} passHref>
            <ButtonWithIcon
              iconPosition="right"
              colorScheme="cyan"
              variant="outline"
              rounded="full"
              height="45px"
              as="a"
            >
              {t('products.details')}
            </ButtonWithIcon>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default OurProductText;
