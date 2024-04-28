import { Box, Container, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import classes from './Gallery.module.css';
import { HomeHeading } from '../Common/HomeHeading';

interface GalleryProps {}

export const Gallery: FunctionComponent<GalleryProps> = () => {
  return (
    <Box mb="-100px" mt="50px">
      <Container maxW="container.xl">
        <HomeHeading title="Gallery" />
      </Container>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className={classes.swiper}
      >
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g5.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Image src="/images/g3.jpg" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
