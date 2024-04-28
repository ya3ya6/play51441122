import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ClockIcon, CommentIcon1 } from '@/common/icons';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { ImageFallBack } from '@/common/components/Element';
import { useDate } from '@/utils/helpers';
import { PostModel } from '../../../types';

interface WebinarBoxPT {
  post: PostModel;
  activePost: number;
  setActivePost: Dispatch<SetStateAction<number>>;
}

export const WebinarBox: FunctionComponent<WebinarBoxPT> = ({
  post,
  activePost,
  setActivePost,
}) => {
  const { date } = useDate();

  return (
    <Flex
      as="a"
      href="#mainVideo"
      onClick={() => setActivePost(post.id)}
      w="100%"
      direction="column"
      rounded="10px"
      p="10px"
      cursor="pointer"
      border="3px solid transparent"
      borderColor={activePost === post.id ? 'brand.800' : 'transparent'}
    >
      <ImageFallBack
        alt={post.coverAlt}
        src={post.cover}
        height="165px"
        width="100%"
        objectFit="cover"
        fallBackProps={{
          objectFit: 'fill',
        }}
      />

      <Box flex={1} mt="8px" minH="89px">
        <Heading noOfLines={1} textAlign="left" my="8px" size="sm" color="gray.900">
          {post.name}
        </Heading>
        <Text noOfLines={2} textAlign="left" fontSize="md" color="GrayText">
          {post.abstract}
        </Text>
      </Box>
      <Flex mt="15px">
        <Flex color="gray.500" align="center" gap="5px">
          <ClockIcon />
          <Text pt="4px" fontSize="md">
            {date(post.createdAt)}
          </Text>
        </Flex>

        <Flex ms="10px" color="gray.500" align="center" gap="5px">
          <CommentIcon1 />
          <Text pt="4px" fontSize="md">
            {post.commentsCount}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
