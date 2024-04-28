import { FunctionComponent } from 'react';
import {
  AspectRatio,
  Box,
  Center,
  ChakraProps,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { ButtonWithIcon, ImageFallBack } from '@/common/components/Element';
import Link from 'next/link';
import { PlayIcon, VisitIcon } from '@/common/icons';
import { useText } from '@/hooks';

/**
 * ### Common Component BOX.
 */
interface NewsBoxProps extends ChakraProps {
  post: {
    id: number;
    name: string;
    cover: string;
    coverAlt: string;
    abstract: string;
    link: string;
    views: number;
    commentsCount: number;
    createdAt: string;
    contentType: string;
  };
  imgHeight?: string;
}

export const NewsBox: FunctionComponent<NewsBoxProps> = ({ post, ...chakraProps }) => {
  const t = useText();
  let btnText = 'readMore';
  if (post.contentType === 'V') {
    btnText = 'videoBtn';
  }

  return (
    <Flex direction="column" rounded="lg" bgColor="#fff" p="10px" shadow="md" {...chakraProps}>
      <Link href={post.link} passHref>
        <Box as="a" position="relative">
          {post.contentType === 'V' && (
            <Center
              position="absolute"
              w="70px"
              h="70px"
              top="50%"
              rounded="full"
              left="50%"
              transform="translate(-50%,-50%)"
              bgColor="rgba(27,179,205,0.8)"
              zIndex={6}
              cursor="pointer"
            >
              <Icon me="5px" fontSize="2xl" color="white" as={PlayIcon} />
            </Center>
          )}
          <AspectRatio rounded="lg" overflow="hidden" position="relative" w="100%" ratio={16 / 9}>
            <ImageFallBack alt={post.coverAlt} src={post.cover} objectFit="fill" />
          </AspectRatio>
        </Box>
      </Link>

      <Box mt="15px" flex={1} minH="122px">
        <Heading as="h2" size="sm" noOfLines={2} lineHeight={7}>
          {post.name}
        </Heading>
        <Text color="gray.500" mt="10px" noOfLines={2} lineHeight={7}>
          {post.abstract}
        </Text>
      </Box>

      <Flex w="100%" mt="18px">
        <HStack spacing="5px" align="center">
          <VisitIcon />
          <Text pt="3px" fontSize="sm">
            {post.views}
          </Text>
        </HStack>
        <Link passHref href={post.link}>
          <ButtonWithIcon
            as="a"
            iconPosition="right"
            variant="ghost"
            fontWeight="normal"
            colorScheme="linkedin"
            ms="auto"
            size="sm"
          >
            {t(btnText, { isCommon: true })}
          </ButtonWithIcon>
        </Link>
      </Flex>
    </Flex>
  );
};
