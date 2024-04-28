import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ClockIcon } from '@/common/icons';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { ImageFallBack } from '@/common/components/Element';
import { useDate } from '@/utils/helpers';
import { VideoPost } from '../../types';

interface Props {
  post: VideoPost;
  activePost: number;
  setActivePost: Dispatch<SetStateAction<number>>;
}

export const VideoBox: FunctionComponent<Props> = ({ post, activePost, setActivePost }) => {
  const { date } = useDate();

  return (
    <Stack
      cursor="pointer"
      href="#newsMainVideoBox"
      as="a"
      direction="row"
      flexWrap="wrap"
      spacing="10px"
      align="center"
      onClick={() => setActivePost(post.id)}
    >
      <Box
        overflow="hidden"
        rounded="lg"
        w={{ base: '100%', md: '100%' }}
        height="230px"
        border="2px solid"
        borderColor={activePost === post.id ? 'brand.600' : 'gray.300'}
        position="relative"
      >
        <ImageFallBack
          src={post.cover}
          width="100%"
          height="100%"
          alt={post.coverAlt}
          objectFit="cover"
        />
      </Box>
      <Flex w="100%" direction="column">
        <Box
          w="100%"
          p="10px"
          mt="10px"
          rounded="lg"
          bgColor={activePost === post.id ? 'gray.100' : 'transparent'}
        >
          <Heading
            color={activePost === post.id ? 'brand.700' : 'gray.800'}
            mb="10px"
            noOfLines={1}
            size="sm"
          >
            {post.name}
          </Heading>
          <Text fontSize="md" noOfLines={2} color="gray.600">
            {post.abstract}
          </Text>
        </Box>
        <Flex
          align="center"
          h="30px"
          p="10px"
          rounded="lg"
          bgColor={activePost === post.id ? 'gray.100' : 'transparent'}
          mt="10px"
        >
          <Stack direction="row" align="center" spacing="10px">
            <ClockIcon />
            <Text noOfLines={1} fontSize="md">
              {date(post.createdAt)}
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};
