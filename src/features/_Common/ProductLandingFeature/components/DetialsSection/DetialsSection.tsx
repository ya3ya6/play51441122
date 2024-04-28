import { LandingModel } from '@/model/LandingPage';
import { Box, Center, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import HeadingBox from '../common/HeadingBox/HeadingBox';
import DetailsList from './DetailsList/DetailsList';

type DetialsSectionProps = Pick<LandingModel, 'detials' | 'gradient' | 'color'>;

const DetialsSection: FunctionComponent<DetialsSectionProps> = ({
  detials: { detialsImage, detialsList },
  gradient,
  color,
}) => {
  return (
    <Box>
      <Box>
        <HeadingBox
          id="DetailsSection"
          color={color}
          title="مشخصات  و ویژگی ها "
          description="مشخصات کامل  فنی  و ویژگی های  لیزر الکساندر گرویتی "
          mb={{ base: '30px' }}
        />
        <Box display={{ base: 'none', lg: 'block' }}>
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="170.49"
            viewBox="0 0 1440 170.49"
          >
            <path
              id="Intersection_1"
              data-name="Intersection 1"
              d="M0,177V6.511S357.8,148.7,717.8,148.7,1440,6.511,1440,6.511V177Z"
              transform="translate(0 -6.51)"
              fill="#f3f3f3"
            />
          </svg>
        </Box>
      </Box>
      <Box minH="600px" bgColor="#f3f3f3" pt={{ base: '50px' }}>
        <Center mb="50px">
          <Image src={detialsImage} alt="details-img" />
        </Center>
        <DetailsList DetailsData={detialsList} gradient={gradient} />
      </Box>
      <Box>
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="170.49"
          viewBox="0 0 1440 170.49"
        >
          <path
            id="Intersection_2"
            data-name="Intersection 2"
            d="M0,177V6.511S357.8,148.7,717.8,148.7,1440,6.511,1440,6.511V177Z"
            transform="translate(1440 177) rotate(180)"
            fill="#f3f3f3"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default DetialsSection;
