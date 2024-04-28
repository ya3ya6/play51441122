import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper';
import { LandingModel } from '@/model/LandingPage';
import FactorBox from './FactorBox/FactorBox';

interface FactorListProps {
  data: Pick<LandingModel, 'factors'>['factors'];
}

const FactorList: FunctionComponent<FactorListProps> = ({ data }) => {
  return (
    <Container maxW="container.lg">
      <Box p="60px 0" w="100%">
        <Swiper
          style={{
            borderRadius: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 0 30px rgba(0,0,0,0.09)',
          }}
          autoHeight
          slidesPerView={1}
          spaceBetween={30}
          mousewheel
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {data.map(({ id, title, description, image }) => (
            <SwiperSlide key={id}>
              <FactorBox title={title} description={description} image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default FactorList;
