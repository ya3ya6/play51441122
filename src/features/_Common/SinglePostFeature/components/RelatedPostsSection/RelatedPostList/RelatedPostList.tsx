import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import RelatedPostBox from './RelatedPostBox/RelatedPostBox';
import { PostDetailModel } from '../../../types/types';

interface Props {
  posts: PostDetailModel['relatedPosts'];
}

export const RelatedPostList: FC<Props> = ({ posts }) => {
  return (
    <Flex gap="20px" direction="column" w="100%" pt="60px" pb="20px">
      {posts.map(item => (
        <RelatedPostBox key={item.id} post={item} />
      ))}
    </Flex>
  );
};
