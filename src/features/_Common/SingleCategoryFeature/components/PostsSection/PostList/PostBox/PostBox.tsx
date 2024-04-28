import { ImageFallBack } from '@/common/components/Element';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface PostBoxProps {
  title: string;
  description: string;
  view: number;
  cover: string;
  coverAlt: string;
  link: string;
}

const PostBox: FunctionComponent<PostBoxProps> = ({
  title,
  description,
  cover,
  coverAlt,
  link,
}) => {
  return (
    <Link href={link} passHref>
      <Flex
        as="a"
        display="flex"
        direction="column"
        position="relative"
        gap="10px"
        bgColor="white"
        padding="15px"
        rounded="2xl"
        border="3px solid transparent"
        role="group"
        _hover={{
          border: '3px solid',
          borderColor: 'brand.800',
        }}
      >
        <Flex direction="column" gap="10px" align="stretch">
          <ImageFallBack
            src={cover}
            alt={coverAlt}
            objectFit="cover"
            rounded="xl"
            height="220px"
            fallBackWrapperProps={{
              flexShrink: 0,
              rounded: 'xl',
              border: '2px solid var(--primaryColor)',
            }}
            flexShrink={0}
          />

          <Flex justifyContent="space-evenly" direction="column">
            <Heading
              _groupHover={{
                color: 'brand.800',
              }}
              noOfLines={1}
              lineHeight={7}
              size="sm"
            >
              {title}
            </Heading>
            <Text noOfLines={2} color="GrayText">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default PostBox;
