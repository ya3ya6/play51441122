import { FunctionComponent } from 'react';
import { Box, Center, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { AuthorIcon, CategoryIcon, CommentIcon1, ShareIcon, TimeIcon } from '@/common/icons';
import { useDate } from '@/utils/helpers';
import { useText, useToast } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useRouter } from 'next/router';
import Utils from '@/utils';
import { PostDetailModel } from '../../types/types';

export const TopDetailsBoxSection: FunctionComponent<{ post: PostDetailModel }> = ({ post }) => {
  const { date } = useDate();
  const t = useText(I18_NAMESPACES.SINGLE);
  const { successToast } = useToast();
  const router = useRouter();
  const shareUrlHandle = () => {
    Utils.Helpers.copyToClipboard(`https://parniangostar.com${router.asPath}`, () => {
      successToast(t('details.shareMessage'));
    });
  };

  return (
    <Flex
      rounded="lg"
      h={{ xl: '70px' }}
      flexWrap="wrap"
      w="calc(100% - 60px)"
      border="1px solid"
      borderColor="gray.200"
      bgColor="white"
      position="absolute"
      justify={{ base: 'space-evenly', xl: 'unset' }}
      gap="20px"
      top="0"
      transform="translateY(-50%)"
      p={{ base: '10px', md: '15px', xl: '10px' }}
      align="center"
    >
      <Flex display={{ base: 'none', lg: 'flex' }} align="center">
        <Box ml="5px">
          <AuthorIcon />
        </Box>
        <Heading color="gray.600" mx="5px" fontSize="sm">
          {t('details.author')}:
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {post.author}
        </Text>
      </Flex>
      <Flex align="center">
        <Box ml="5px">
          <CategoryIcon />
        </Box>
        <Heading color="gray.600" mx="5px" fontSize="sm">
          {t('details.category')}:
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {post.category.name}
        </Text>
      </Flex>
      <Flex align="center">
        <Box ml="5px">
          <TimeIcon />
        </Box>
        <Heading color="gray.600" mx="5px" fontSize="sm">
          {t('details.date')}:
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {date(post.createdAt)}
        </Text>
      </Flex>
      <Center display={{ base: 'none', lg: 'flex' }} height="50px">
        <Divider orientation="vertical" />
      </Center>
      <Flex display={{ base: 'none', lg: 'flex' }} align="center">
        <Box mr="5px">
          <CommentIcon1 />
        </Box>
        <Text mt="5px" color="gray.500">
          {post.commentsCount}
        </Text>
      </Flex>

      <IconButton
        ms="auto"
        display={{ base: 'none', lg: 'flex' }}
        rounded="full"
        aria-label="Search database"
        icon={<ShareIcon />}
        onClick={() => shareUrlHandle()}
      />
    </Flex>
  );
};
