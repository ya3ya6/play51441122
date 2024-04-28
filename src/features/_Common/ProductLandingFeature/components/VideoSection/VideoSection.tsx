import { LandingModel } from '@/model/LandingPage';
import { Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import HeadingBox from '../common/HeadingBox/HeadingBox';
import VideoList from './VideoList/VideoList';

type VideoSectionProps = Pick<LandingModel, 'videos' | 'color'>;

const VideoSection: FunctionComponent<VideoSectionProps> = ({ videos, color }) => {
  return (
    <Container maxW="container.xl" mt="30px">
      <HeadingBox
        color={color}
        id="videoSection"
        title="ویدئو ها"
        description="ویدیو های تبلیغاتی محصول"
      />
      <VideoList data={videos} />
    </Container>
  );
};

export default VideoSection;
