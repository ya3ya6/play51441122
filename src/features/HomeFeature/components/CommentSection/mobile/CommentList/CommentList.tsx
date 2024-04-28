import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Autoplay, EffectCreative } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import CommentBox from './CommentBox/CommentBox';
import classes from './CommentList.module.css';
import { useOverview } from '../../../../hooks';
import 'swiper/css/effect-creative';

interface CommentListProps {}
const CommentList: FunctionComponent<CommentListProps> = () => {
  const { customerOpinions } = useOverview();

  return (
    <Flex p="0 20px">
      <Swiper
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        speed={1000}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          delay: 4000,
        }}
        modules={[EffectCreative, Autoplay]}
        grabCursor
        className={classes.mySwiper}
      >
        {customerOpinions?.customerOpinion.map(
          ({ id, name, subName, description, cover, coverAlt }) => (
            <SwiperSlide key={id} className={classes.swiperSlide}>
              <CommentBox
                name={name}
                coverAlt={coverAlt}
                role={subName}
                text={description}
                cover={cover}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </Flex>
  );
};

export default CommentList;
