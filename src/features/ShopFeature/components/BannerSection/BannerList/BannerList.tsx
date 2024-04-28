import { Box, Flex, Text } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDirection, useText } from '@/hooks';
import { ButtonWithIcon } from '@/common/components/Element';
import { useRouter } from 'next/router';
import classes from './BannerList.module.css';

import { BannerBox } from './BannerBox/BannerBox';
import { IBanner } from '../types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ImageBox from './ImageBox/ImageBox';

interface Props {
  banners: IBanner[];
}

export const BannerList: FunctionComponent<Props> = ({ banners }) => {
  const { isRtl } = useDirection();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBanner = banners[activeIndex];
  const t = useText();
  const { push } = useRouter();
  return (
    <Box display="flex" rounded="3xl" flexDirection={{ base: 'column', md: 'row' }} w="100%">
      <Box
        w="100%"
        position="relative"
        h="100%"
        pt={{ base: '20px', lg: '0' }}
        rounded="3xl"
        background={
          isRtl
            ? 'radial-gradient(circle, rgba(19,169,199,1) 100%, rgba(19,104,178,0.9) 80%)'
            : 'radial-gradient(circle, rgba(19,169,199,1) 0%, rgba(19,104,178,1) 100%)'
        }
      >
        {activeBanner?.image && <ImageBox src={activeBanner?.image} alt={activeBanner?.imageAlt} />}

        <Swiper
          onSlideChange={swiper => {
            setActiveIndex(swiper.activeIndex);
          }}
          autoplay
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={500}
          pagination={{
            clickable: true,
            modifierClass: `${classes.pagination} ${
              isRtl ? classes.rtlPagination : classes.ltrPagination
            } swiper-pagination`,
            bulletActiveClass: `swiper-pagination-bullet-active ${classes.bulletActiveClass}`,
            bulletClass: `swiper-pagination-bullet ${classes.BolletClass}`,
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          className={classes.BannerSwiper}
        >
          {banners.map(item => (
            <SwiperSlide className={classes.SwiperSlide} key={item.id}>
              <BannerBox banner={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Flex justify={{ base: 'center', lg: 'start' }}>
          {activeBanner?.url && (
            <ButtonWithIcon
              mt={{ base: '-20px', xl: '-40px' }}
              mb="20px"
              ms="20px"
              zIndex={10}
              iconPosition="right"
              h={{ base: '40px', md: '43px', lg: '50px' }}
              fontWeight="normal"
              rounded="full"
              variant="outline"
              color="white"
              colorScheme="whiteAlpha"
              onClick={() => push(activeBanner.url)}
            >
              {t('readMore', { isCommon: true })}
            </ButtonWithIcon>
          )}
        </Flex>
      </Box>

      {activeBanner?.specialText ? (
        <Flex
          position="absolute"
          top={{ base: '100px' }}
          right={{ base: '10px', lg: '50px' }}
          zIndex="8"
          align="center"
          justify="center"
          w={{ base: '40px', lg: '60px' }}
          h={{ base: '40px', lg: '60px' }}
          rounded="full"
          color="white"
          bgColor="#ED1648"
          fontSize={{ base: '20px', lg: '25px' }}
          shadow="xl"
          transform="rotate(-30deg)"
          p="10px"
        >
          <Text pt="6px">{activeBanner.specialText}</Text>
        </Flex>
      ) : null}
    </Box>
  );
};
