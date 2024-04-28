import { FunctionComponent } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { RelatedPostList } from './RelatedPostList/RelatedPostList';
import { PostDetailModel } from '../../types/types';

interface Props {
  posts: PostDetailModel['relatedPosts'];
}

export const RelatedPostsSection: FunctionComponent<Props> = ({ posts }) => {
  const t = useText(I18_NAMESPACES.SINGLE);
  if (posts.length === 0) {
    return null;
  }

  return (
    <Flex
      position="relative"
      bgColor="#fff"
      rounded="xl"
      border="1px solid #eee"
      w="100%"
      h="50%"
      justify="center"
    >
      <Flex
        h="70px"
        rounded="lg"
        w="calc(100% - 60px)"
        border="1px solid #eee"
        bgColor="white"
        position="absolute"
        top="0"
        transform="translateY(-50%)"
        align="center"
        justify="center"
      >
        <Heading size="md" as="h3">
          {t('aside.relatedPsts')}
        </Heading>
      </Flex>
      <RelatedPostList posts={posts} />
    </Flex>
  );
};
