import { Flex, useMediaQuery } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import classes from './WebinarList.module.css';
import 'swiper/css/free-mode';
// import required modules
import { WebinarBox } from './WebinarBox/WebinarBox';
import { PostModel } from '../../types';

interface WebinarListPropsType {
  posts: PostModel[];
  activePost: number;
  setActivePost: Dispatch<SetStateAction<number>>;
}
export const WebinarList: FunctionComponent<WebinarListPropsType> = ({
  posts,
  activePost,
  setActivePost,
}) => {
  const [mobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Flex>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={mobile}
        modules={mobile ? [FreeMode] : []}
        className={classes.swiper}
        breakpoints={{
          '530': {
            slidesPerView: 2,
          },
          '730': {
            slidesPerView: 3,
          },
          '930': {
            slidesPerView: 4,
          },
        }}
      >
        {posts.map(post => (
          <SwiperSlide key={post.id} className={classes.swiperSlide}>
            <WebinarBox post={post} activePost={activePost} setActivePost={setActivePost} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
