import { ProductFeature } from '@/features';
import type { NextPage } from 'next';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ssrInitializer, languageInitializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { layoutInitializers } from '@/common/components/Layout/PageLayout/initializers';
import { useProductQuery } from '../../api/services/shop/_queries';

const productInitiailizer = ssrPrefetchInitializer(useProductQuery.prefetch, {
  raiseOn404: true,
  mapper: ({ context }) => context.query.productSlug as string,
});

export const getServerSideProps = ssrInitializer({
  initializers: [
    ...layoutInitializers,
    languageInitializer({ namespaces: [I18_NAMESPACES.SHOP] }),
    productInitiailizer,
  ],
});

const Product: NextPage = () => <ProductFeature />;

export default Product;
