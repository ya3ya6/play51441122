import { Box, ChakraProps, Container } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { CustomHeading } from '@/common/components/Box';
import ROUTES from '@/routers';
import { MainWebinar } from './MainWebinar/MainWebinar';
import { WebinarList } from './WebinarList/WebinarList';
import { PostModel } from '../types';

/**
 * ### Common Component SECTION.
 */
interface WebinarSectionProps extends ChakraProps {
  posts: PostModel[];
}

export const WebinarSection: FunctionComponent<WebinarSectionProps> = ({
  posts,
  ...chakraProps
}) => {
  const t = useText(I18_NAMESPACES.MAG);
  const [activePost, setActivePost] = useState(posts[0]?.id);

  useEffect(() => {
    setActivePost(posts[0]?.id);
  }, [posts]);

  if (!posts.length) {
    return null;
  }

  return (
    <Box my="100px" mb="50px" {...chakraProps}>
      <Container maxW="container.xl">
        <CustomHeading
          title={t('conferencesVideo.title')}
          text={t('conferencesVideo.description')}
          link={ROUTES.MAG.WEBINAR}
        />
        {posts.length > 1 && (
          <WebinarList activePost={activePost} setActivePost={setActivePost} posts={posts} />
        )}
        <MainWebinar post={posts.find(item => item.id === activePost) as PostModel} />
      </Container>
    </Box>
  );
};
