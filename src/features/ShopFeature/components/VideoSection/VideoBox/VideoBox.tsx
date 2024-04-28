import { AspectRatio, Box } from '@chakra-ui/react';
import { ActiveVideoProps } from '@/features/ShopFeature/types';
import { FunctionComponent } from 'react';
import { Aparat } from '@/common/components/Media/Aparat';

export const VideoBox: FunctionComponent<ActiveVideoProps> = ({ activeVideo }) => {
  return (
    <Box
      id="mainVideoBox"
      bgSize="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgImage="/images/shop/pattern2.png"
      m="0 auto"
      mt={{ base: '-20px', lg: '-68px' }}
      p={{ base: '20px' }}
    >
      <AspectRatio m="0 auto" maxW="600px" rounded="2xl" ratio={16 / 9} overflow="hidden">
        {activeVideo?.videoUrl ? (
          <Aparat url={activeVideo.videoUrl} />
        ) : (
          <Box shadow="base" bgColor="white" />
        )}
      </AspectRatio>
    </Box>
  );
};
