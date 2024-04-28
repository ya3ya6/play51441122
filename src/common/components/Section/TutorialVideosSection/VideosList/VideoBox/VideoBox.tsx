import { ImageFallBack } from '@/common/components/Element';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { PostModel } from '../../../types';

interface VideoBoxPropsType {
  setACtivePost: Dispatch<SetStateAction<number>>;
  activePost: number;
  post: PostModel;
}
export const VideoBox: FunctionComponent<VideoBoxPropsType> = ({
  post,
  activePost,
  setACtivePost,
}) => {
  return (
    <Stack
      _last={{
        border: 'none',
      }}
      as="a"
      align="center"
      href="#tutorialVideoMainBox"
      spacing="10px"
      direction="row"
      py="10px"
      cursor="pointer"
      borderBottom={{ base: '1px dashed', md: '0', xl: '1px dashed' }}
      borderColor="gray.500"
      role="group"
      onClick={() => setACtivePost(post.id)}
    >
      <Box flexShrink={0}>
        <ImageFallBack
          alt={post.coverAlt}
          src={post.cover}
          width="140px"
          height="90px"
          objectFit="fill"
          border="3px solid"
          rounded="10px"
          fallBackWrapperProps={{
            rounded: '10px',
          }}
          borderColor={activePost === post.id ? 'brand.800' : 'gray.300'}
        />
      </Box>
      <Flex direction="column">
        <Heading
          mb="5px"
          fontSize="md"
          lineHeight={7}
          color={activePost === post.id ? 'brand.800' : 'gray.900'}
        >
          {post.name}
        </Heading>
        <Text fontSize="sm" lineHeight="30px" noOfLines={2} color="gray.500">
          {post.abstract}
        </Text>
      </Flex>
    </Stack>
  );
};
