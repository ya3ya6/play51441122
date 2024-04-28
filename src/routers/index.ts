const SHOP_INDEX_PAGE = '/shop';
const MAG_INDEX_PAGE = '/mag';
const NEWS_INDEX_PAGE = '/news';
const PROFILE_INDEX_PAGE = '/profile';
const USER_INDEX_PAGE = '/user';
const PRODUCT_INDEX_PAGE = '/product';

const ROUTES = {
  HOME: '/',
  ABOUT: '/about-us',
  ORDER: '/order',
  TEAM: '/our-team',
  CAREERS: '/careers',
  CONTACT: '/contact-us',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/sign-up',
  },
  USER: {
    FORGET: `${USER_INDEX_PAGE}/password/forget`,
    CHANGE_PASSWORD: `${USER_INDEX_PAGE}/password/change`,
  },
  PRODUCT: {
    PRODUCT: (productSlug: string) => `${PRODUCT_INDEX_PAGE}/${productSlug}`,
  },
  PROFILE: {
    NOTIFICATION: `${PROFILE_INDEX_PAGE}`,
    PERSONAL_INFO: `${PROFILE_INDEX_PAGE}/personal-info`,
    ORDER: `${PROFILE_INDEX_PAGE}/orders`,
    SUPPORT: `${PROFILE_INDEX_PAGE}/support`,
  },
  SHOP: {
    INDEX: SHOP_INDEX_PAGE,
    CATEGORY: {
      INDEX: `${SHOP_INDEX_PAGE}/category`,
      CATEGOTY: (categorySlug: string) => `${ROUTES.SHOP.CATEGORY.INDEX}/${categorySlug}`,
    },
  },
  MAG: {
    INDEX: MAG_INDEX_PAGE,
    ARTICLE: `${MAG_INDEX_PAGE}/article`,
    WEBINAR: `${MAG_INDEX_PAGE}/webinar`,
    VIDEOS: `${MAG_INDEX_PAGE}/videos`,
    POST: (magSlug: string) => `${MAG_INDEX_PAGE}/${magSlug}`,
    CATEGORY: {
      INDEX: `${MAG_INDEX_PAGE}/category`,
      CATEGOTY: (categorySlug: string) => `${ROUTES.MAG.CATEGORY.INDEX}/${categorySlug}`,
    },
  },
  NEWS: {
    INDEX: NEWS_INDEX_PAGE,
    VIDEOS: `${NEWS_INDEX_PAGE}/videos`,
    POST: (postSlug: string) => `${NEWS_INDEX_PAGE}/${postSlug}`,
    CATEGORY: {
      INDEX: `${NEWS_INDEX_PAGE}/category`,
      CATEGOTY: (categorySlug: string) => `${ROUTES.NEWS.CATEGORY.INDEX}/${categorySlug}`,
    },
  },
};

export default ROUTES;
