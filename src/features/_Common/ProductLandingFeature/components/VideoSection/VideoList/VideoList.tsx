import { LandingModel } from '@/model/LandingPage';
import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import VideoBox from './VideoBox/VideoBox';

interface VideoListProps {
  data: Pick<LandingModel, 'videos'>['videos'];
}

const VideoList: FunctionComponent<VideoListProps> = ({ data }) => {
  return (
    <Flex gap={{ base: '10px', lg: '50px' }} mt="50px" w="100%" flexWrap="wrap">
      {data.map(({ id, src }) => (
        <VideoBox key={id} src={src} />
      ))}
    </Flex>
  );
};

export default VideoList;
