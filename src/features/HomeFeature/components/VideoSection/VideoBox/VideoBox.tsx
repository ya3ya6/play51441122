import { Box, Image } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

interface VideoBoxProps {
  children: ReactNode;
}

const VideoBox: FunctionComponent<VideoBoxProps> = ({ children }) => {
  return (
    <Box position="relative" pt={{ base: '12px', md: '0px' }}>
      <Image src="/images/home/ok.jpg" height={{ md: 'auto' }} w="100%" alt="hero" />
      {/* <Swiper
        autoplay
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={2500}
        modules={[Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <Image src="/images/home/hero2.jpg" height={{ md: 'auto' }} w="100%" alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/home/hero.jpg" height={{ md: 'auto' }} w="100%" alt="hero" />
        </SwiperSlide>
      </Swiper>
      <Box
        w="100%"
        height="100%"
        zIndex={6}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        bgColor="rgba(0,0,0,0.3)"
      >
        {children}
      </Box> */}
    </Box>
  );
};

export default VideoBox;
