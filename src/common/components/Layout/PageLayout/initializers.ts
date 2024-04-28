import { useLanguageQuery } from '@/api/services/core';
import { useAboutusQuery } from '@/api/services/overview/_queries';
import { Initializer, ssrPrefetchInitializer } from '@/config/nextConfigs';
import { useMenuQuery } from '../../../../api/services/core/_queries';

const mainMenuInitializer: Initializer = ssrPrefetchInitializer(useMenuQuery.prefetch, {
  mapper: () => ({ slug: 'main-menu' }),
});

const footer1Initializer: Initializer = ssrPrefetchInitializer(useMenuQuery.prefetch, {
  mapper: () => ({ slug: 'footer-1' }),
});

const footer2Initializer: Initializer = ssrPrefetchInitializer(useMenuQuery.prefetch, {
  mapper: () => ({ slug: 'footer-2' }),
});

const footer3Initializer: Initializer = ssrPrefetchInitializer(useMenuQuery.prefetch, {
  mapper: () => ({ slug: 'footer-3' }),
});

export const layoutInitializers: Initializer[] = [
  ssrPrefetchInitializer(useLanguageQuery.prefetch),
  ssrPrefetchInitializer(useAboutusQuery.prefetch),
  mainMenuInitializer,
  footer1Initializer,
  footer2Initializer,
  footer3Initializer,
];
