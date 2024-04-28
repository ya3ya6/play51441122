import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { Hero } from '@/common/components/Box';
import { useOrderCheckoutQuery } from '@/api/services/shop/_queries';
import { CartSection, FormSection } from './components';

export const OrderFeature: FunctionComponent = () => {
  const { data: checkout } = useOrderCheckoutQuery(null);
  const t = useText(I18_NAMESPACES.ORDER);
  return (
    <Box>
      <Hero title={t('hero.title')} text={t('hero.description')} image="/images/order/order.png" />
      <Container my="50px" display="flex" flexDirection="column" maxW="container.xl">
        <CartSection />
        {!!checkout?.items.filter(item => item.product.isAvailable).length && <FormSection />}
      </Container>
    </Box>
  );
};
