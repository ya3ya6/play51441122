import { Box } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { ImageFallBack } from '@/common/components/Element';
import classes from './ImageList.module.css';
import { useProduct } from '../../../hooks';

interface ImageListProps {}

const ImageList: FunctionComponent<ImageListProps> = () => {
  const product = useProduct();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  return (
    <Box maxW="100%" w="450px" h="450px" mx="auto">
      <Swiper
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={classes.mainImg}
      >
        {product.imageGallery.map(img => (
          <SwiperSlide key={img.id}>
            <ImageFallBack
              alt={img.imageAlt}
              src={img.image}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={swiper => setThumbsSwiper(swiper)}
        slidesPerView={3}
        spaceBetween={15}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={classes.productImgs}
        thumbs={{
          thumbsContainerClass: classes.thumbsActive,
        }}
      >
        {product.imageGallery.map(img => (
          <SwiperSlide key={img.id} className={classes.swiperSlide}>
            <ImageFallBack
              src={img.image}
              alt={img.imageAlt}
              height="195px"
              width="100%"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageList;
