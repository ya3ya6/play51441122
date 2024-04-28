import { Button, Flex, Heading, Text, Box, AspectRatio, Center, Icon } from '@chakra-ui/react';
import { ArrowIconCircle, PlayIcon } from '@/common/icons';
import { FunctionComponent } from 'react';
import { useDirection, useText } from '@/hooks';
import Link from 'next/link';
import { ImageFallBack } from '@/common/components/Element';
import { PostModel } from '../../../types';

export const ArticlesBox: FunctionComponent<{ post: PostModel }> = ({ post }) => {
  const t = useText();
  const { isRtl } = useDirection();
  const pattern = /[VC]/;
  let color;
  let text;
  let btnText;
  switch (post.contentType) {
    case 'C':
      color = 'red';
      text = 'Confrenace';
      btnText = 'videoBtn';
      break;
    case 'V':
      color = 'brand';
      text = 'Video';
      btnText = 'videoBtn';
      break;
    default:
      color = 'green';
      text = 'Article';
      btnText = 'readMore';
      break;
  }
  return (
    <Flex
      direction="column"
      shadow="md"
      p="10px"
      pb="0"
      rounded="lg"
      bgColor="#fff"
      overflow="hidden"
    >
      <Link href={post.link} passHref>
        <Box position="relative">
          {pattern.test(post.contentType) && (
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
              <Icon ms={isRtl ? '-5px' : '5px'} fontSize="2xl" color="white" as={PlayIcon} />
            </Center>
          )}
          <Center
            position="absolute"
            top="10px"
            left="10px"
            bgColor={`${color}.500`}
            zIndex={6}
            cursor="pointer"
            rounded="md"
            minW="60px"
          >
            <Box lineHeight={2} color="white" fontSize="10px" px="5px">
              {text}
            </Box>
          </Center>
          <AspectRatio ratio={16 / 9} rounded="md" overflow="hidden">
            <ImageFallBack alt={post.coverAlt} src={post.cover} objectFit="fill" />
          </AspectRatio>
        </Box>
      </Link>

      <Flex p="0 5px" mt="15px" direction="column" flex={1}>
        <Heading size="sm">{post.name}</Heading>
        <Text noOfLines={3} color="gray.500" mt="10px" fontSize="sm">
          {post.abstract}
        </Text>
      </Flex>
      <Link passHref href={post.link}>
        <Flex as="a" position="relative" mt="20px" align="center" justify="center" w="100%">
          <Box
            bgColor="white"
            p="3px"
            rounded="full"
            transform="translate(-50%,-50%)"
            zIndex="2"
            position="absolute"
            left="50%"
            top="0"
            color="brand.600"
            fontSize="lg"
            border="2px solid"
            borderColor="brand.600"
            outline="3px solid white"
          >
            <ArrowIconCircle />
          </Box>

          <Button
            pt="6px"
            borderTopLeftRadius="50px"
            borderTopRightRadius="50px"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="0"
            justifySelf="center"
            h="40px"
            w="150px"
            marginTop="5px"
            fontSize="md"
            fontWeight="normal"
            colorScheme="brand"
          >
            {t(btnText, { isCommon: true })}
          </Button>
        </Flex>
      </Link>
    </Flex>
  );
};
