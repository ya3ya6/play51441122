import { Box, ChakraProps, Container } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { CustomHeading } from '@/common/components/Box';
import ROUTES from '@/routers';
import { VideosList } from './VideosList/VideosList';
import { MainVideoBox } from './MainVideoBox/MainVideoBox';
import { VideoPost } from './types';
/**
 * ### Common Component SECTION.
 */
interface VideoSectionProps extends ChakraProps {
  videos: VideoPost[];
}

export const VideosSection: FunctionComponent<VideoSectionProps> = ({ videos, ...chakraProps }) => {
  const t = useText(I18_NAMESPACES.NEWS);
  const [activePost, setActivePost] = useState(videos[0]?.id);
  const activeVideo = videos.find(item => item.id === activePost);

  useEffect(() => {
    setActivePost(videos[0]?.id);
  }, [videos]);

  if (!videos.length) {
    return null;
  }

  return (
    <Box mt="150px" overflow="hidden" {...chakraProps}>
      <Container maxW="container.xl">
        <CustomHeading
          title={t('promotional.title')}
          text={t('promotional.description')}
          link={ROUTES.NEWS.VIDEOS}
        />
        {activeVideo && <MainVideoBox video={activeVideo} />}
        <VideosList videos={videos} activePost={activePost} setActivePost={setActivePost} />
      </Container>
    </Box>
  );
};
