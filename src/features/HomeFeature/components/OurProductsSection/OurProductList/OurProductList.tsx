import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Box, Flex } from '@chakra-ui/react';
import { ArrowIcon } from '@/common/icons';
import { useDirection } from '@/hooks';
import { OurProductBox } from './OurProductBox/OurProductBox';
import classes from './OurProductList.module.css';
import { useOverview } from '../../../hooks';

interface OurProductListProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const OurProductList: FunctionComponent<OurProductListProps> = ({ setActiveIndex }) => {
  const { overview } = useOverview();
  const { isRtl } = useDirection();
  const slideChangeHandler = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Box dir="rtl" position="relative">
      <Swiper
        onSlideChange={slideChangeHandler}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides
        speed={600}
        initialSlide={3}
        autoplay={{ delay: 1000 }}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: '.nextClass',
          prevEl: '.prevClass',
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: classes.swiperPaginationBulletActive,
        }}
        modules={[Pagination, Navigation]}
        className={classes.mySwiperProduct}
      >
        {overview?.products.map(item => (
          <SwiperSlide key={item.id} className={classes.swiperSlide}>
            {({ isActive, isNext, isPrev }) => (
              <OurProductBox
                key={item.id}
                coverAlt={item.coverAlt}
                name={item.name}
                cover={item.cover}
                isActive={isActive}
                isNext={isNext}
                isPrev={isPrev}
                slug={item.slug}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex
        align="center"
        justify="center"
        position="absolute"
        sx={
          isRtl
            ? {
                left: {
                  base: '10%',
                  sm: '22%',
                  md: '32%',
                  lg: '36%',
                  xl: '39%',
                },
              }
            : {
                right: {
                  base: '10%',
                  sm: '22%',
                  md: '32%',
                  lg: '36%',
                  xl: '39%',
                },
              }
        }
        w="50px"
        h="50px"
        rounded="full"
        top="95%"
        bgColor="#1f87ad"
        transform="translateY(-50%) rotate(180deg)"
        cursor="pointer"
        className="prevClass"
        zIndex="150"
        fontSize="xl"
        color="#fff"
        shadow="lg"
      >
        <ArrowIcon />
      </Flex>
      <Flex
        align="center"
        justify="center"
        position="absolute"
        sx={
          isRtl
            ? {
                right: {
                  base: '10%',
                  sm: '22%',
                  md: '32%',
                  lg: '36%',
                  xl: '39%',
                },
              }
            : {
                left: {
                  base: '10%',
                  sm: '22%',
                  md: '32%',
                  lg: '36%',
                  xl: '39%',
                },
              }
        }
        w="50px"
        h="50px"
        rounded="full"
        top="95%"
        bgColor="#1f87ad"
        transform="translateY(-50%)"
        cursor="pointer"
        className="nextClass"
        zIndex="150"
        fontSize="xl"
        shadow="lg"
        color="#fff"
      >
        <ArrowIcon />
      </Flex>
    </Box>
  );
};
