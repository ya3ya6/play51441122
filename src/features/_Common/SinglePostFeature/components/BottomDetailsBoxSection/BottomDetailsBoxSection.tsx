import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AuthorIcon, CategoryIcon, TimeIcon } from '@/common/icons';
import { useDate } from '@/utils/helpers';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { PostDetailModel } from '../../types/types';

interface Props {
  post: PostDetailModel;
}

export const BottomDetailsBoxSection: FC<Props> = ({ post }) => {
  const { date } = useDate();
  const t = useText(I18_NAMESPACES.SINGLE);
  return (
    <Flex
      direction="row"
      flexWrap="wrap"
      rounded="lg"
      w="100%"
      border="1px solid #eee"
      bgColor="white"
      // transform="translateY(-50%)"
      justify="center"
      p={{ base: '20px 10px', xl: '10px' }}
      mt="20px"
      mb="50px"
      gap="20px"
      align="center"
    >
      <Flex align="center">
        <Box me="5px">
          <AuthorIcon />
        </Box>
        <Heading color="gray.600" mx="5px" size="sm">
          {t('details.author')}:
        </Heading>
        <Text color="gray.500">{post.author}</Text>
      </Flex>
      <Flex align="center">
        <Box me="5px">
          <CategoryIcon />
        </Box>
        <Heading color="gray.600" mx="5px" size="sm">
          {t('details.category')}:
        </Heading>
        <Text color="gray.500">{post.category.name}</Text>
      </Flex>
      <Flex align="center">
        <Box me="5px">
          <TimeIcon />
        </Box>
        <Heading color="gray.600" mx="5px" size="sm">
          {t('details.date')}:
        </Heading>
        <Text color="gray.500">{date(post.createdAt)}</Text>
      </Flex>
      {/* <Center height="50px">
        <Divider orientation="vertical" />
      </Center> */}
      {/* <Tooltip rounded="md" hasArrow label="ارسال نظر" placement="top" fontSize="md">
        <IconButton
          rounded="full"
          fontSize="lg"
          colorScheme="linkedin"
          variant="outline"
          aria-label="Search database"
          icon={<CommentIcon1 />}
        />
      </Tooltip>
      <Tooltip rounded="md" hasArrow label="پسندیدن" placement="top" fontSize="md">
        <IconButton
          rounded="full"
          fontSize="lg"
          colorScheme="red"
          variant="outline"
          aria-label="Search database"
          icon={<UnLikeIcon />}
        />
      </Tooltip> */}
      {/* <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
      <Flex ms={{ xl: 'auto' }}>
        <Social />
      </Flex> */}
    </Flex>
  );
};
