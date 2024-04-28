import { ChakraProps, Container, Grid } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { CustomHeading } from '@/common/components/Box';
import ROUTES from '@/routers';
import { VideosList } from './VideosList/VideosList';
import MainvideoBox from './MainVideoBox/MainVideoBox';
import { PostModel } from '../types';

/**
 * ### Common Component SECTION.
 */
interface TutorialVideosSectionProps extends ChakraProps {
  posts: PostModel[];
}

export const TutorialVideosSection: FunctionComponent<TutorialVideosSectionProps> = ({
  posts,
  ...chakraProps
}) => {
  const t = useText(I18_NAMESPACES.MAG);

  const [activePost, setACtivePost] = useState(posts[0]?.id);
  if (!posts.length) {
    return null;
  }

  return (
    <Container maxW="container.xl" mt="150px" {...chakraProps}>
      <CustomHeading
        title={t('tutorialVideo.title')}
        link={ROUTES.MAG.VIDEOS}
        text={t('tutorialVideo.description')}
      />
      <Grid mt="60px" gap="20px" gridTemplateColumns={{ base: '1fr', xl: '1.1fr 2fr' }}>
        {posts.length > 1 && (
          <VideosList posts={posts} setACtivePost={setACtivePost} activePost={activePost} />
        )}
        <MainvideoBox post={posts?.find(item => item.id === activePost) as PostModel} />
      </Grid>
    </Container>
  );
};
