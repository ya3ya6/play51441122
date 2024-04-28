import { Box, Button, Flex } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectFade } from 'swiper';
import { useDirection, useText } from '@/hooks';
import 'swiper/css/effect-fade';
import 'swiper/css';
import Link from 'next/link';
import ROUTES from '@/routers';
import { useOverview } from '../../../hooks';
import { LatestArticleBox } from './LatestArticleBox/LatestArticleBox';
import classes from './LatestArticleList.module.css';

interface LatestArticleListProps {
  setActive: Dispatch<SetStateAction<number>>;
  active: number;
}

export const LatestArticleList: FunctionComponent<LatestArticleListProps> = ({
  setActive,
  active,
}) => {
  const { overview } = useOverview();
  const { isRtl } = useDirection();
  const t = useText();

  const slideChangeHandler = (swiper: any) => {
    setActive(swiper.activeIndex);
  };

  const activeArticle = overview?.mags[active];

  if (!activeArticle) {
    return null;
  }

  return (
    <Box p="20px" w="100%" mt="120px">
      <Swiper
        onSlideChange={slideChangeHandler}
        slidesPerView={1}
        speed={1000}
        spaceBetween={30}
        fadeEffect={{ crossFade: true }}
        mousewheel
        effect="fade"
        pagination={{
          clickable: true,
          modifierClass: `${classes.pagination} ${
            isRtl ? classes.pRight : classes.pLeft
          } swiper-pagination`,
          bulletClass: `${classes.bullet} swiper-pagination-bullet`,
          bulletActiveClass: `${classes.bulletActive} swiper-pagination-bullet-active`,
        }}
        modules={[EffectFade, Mousewheel, Pagination]}
        className={`${classes.mySwiper}`}
      >
        {overview.mags.map(article => (
          <SwiperSlide className={classes.swiperSlide} key={article.id}>
            <LatestArticleBox article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
      {Number.isInteger(active) && (
        <Flex
          mt="15px"
          align="center"
          ps={{ base: '0', lg: '80px' }}
          justify={{ base: 'center', xl: 'flex-start' }}
        >
          <Link href={ROUTES.MAG.POST(activeArticle.slug)} passHref>
            <Button as="a" w="140px" height="48px" colorScheme="brand" rounded="full" shadow="md">
              {t('readMore', { isCommon: true })}
            </Button>
          </Link>
        </Flex>
      )}
    </Box>
  );
};
