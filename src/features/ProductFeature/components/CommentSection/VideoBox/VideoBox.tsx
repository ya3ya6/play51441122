import { Aparat } from '@/common/components/Media/Aparat';
import { AspectRatio, Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface VideoBoxProps {
  url?: string;
  name?: string;
  subName?: string;
}

const VideoBox: FunctionComponent<VideoBoxProps> = ({ url, name, subName }) => {
  return (
    <Box id="videoBox" p={{ base: '0', xl: '40px' }} mt={{ base: '0', xl: '60px' }} order="0">
      {subName && name && (
        <Heading mb="30px" textAlign="center" fontSize="lg">
          {`${name} - ${subName}`}
        </Heading>
      )}

      <AspectRatio
        mx="auto"
        maxW="650"
        ratio={16 / 9}
        rounded="3xl"
        shadow="base"
        overflow="hidden"
      >
        {url ? <Aparat url={url} /> : <Box bgColor="white" />}
      </AspectRatio>
    </Box>
  );
};

export default VideoBox;
