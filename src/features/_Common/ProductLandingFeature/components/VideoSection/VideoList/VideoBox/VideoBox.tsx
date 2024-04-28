import { Aparat } from '@/common/components/Media/Aparat';
import { AspectRatio } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface VideoBoxProps {
  src: string;
}

const VideoBox: FunctionComponent<VideoBoxProps> = ({ src }) => {
  return (
    <AspectRatio
      mt="20px"
      overflow="hidden"
      rounded="xl"
      shadow="base"
      mx="auto"
      maxW="600px"
      minW={{ base: '100%', lg: 'calc(50% - 25px)' }}
      ratio={16 / 9}
      minH={{ base: '200px', lg: '300px' }}
    >
      <Aparat url={src} />
    </AspectRatio>
  );
};

export default VideoBox;
