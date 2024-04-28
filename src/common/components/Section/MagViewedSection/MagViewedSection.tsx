import { AspectRatio, Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Link from 'next/link';

const getBgColor = (color: string, img: string) =>
  `linear-gradient(180deg, ${color} 0%, rgba(1,1,1,0.8) 100%) , url(${img})`;

const extraProps = [
  (color: string, img: string) => ({
    bgImage: getBgColor(color, img),
  }),
  (color: string, img: string) => ({
    bgImage: getBgColor(color, img),
  }),
  (color: string, img: string) => ({
    bgImage: getBgColor(color, img),
  }),
  (color: string, img: string) => ({
    bgImage: getBgColor(color, img),
  }),
  (color: string, img: string) => ({
    bgImage: getBgColor(color, img),
  }),
  (color: string, img: string) => ({
    bgImage: getBgColor(color, img),
  }),
];

interface Props {
  posts: {
    id: number;
    title: string;
    description: string;
    cover: string;
    coverAlt: string;
    url: string;
    language: string;
    color: string;
  }[];
}

export const MagViewedSection: FunctionComponent<Props> = ({ posts }) => {
  let index = 0;

  const getColor = () => {
    const value = index % 5;
    index += 1;
    return extraProps[value];
  };

  return (
    <Flex
      bgImage="linear-gradient(0deg, rgba(247,247,247,1) 0%, rgba(115,115,115,0) 10%) , url(/images/mag/LatestArticles.png)"
      bgSize="cover"
      mb="50px"
      w="100%"
    >
      <Container maxW="container.xl">
        <Flex w="100%" mt="70px" gap="10px" flexWrap="wrap">
          {posts.map(post => (
            <Box
              key={post.id}
              flexShrink={0}
              rounded="xl"
              overflow="hidden"
              shadow="lg"
              bgSize="100% 100%"
              width={{ base: '100%', md: 'calc(50% - 10px)', lg: 'calc(33.33% - 10px)' }}
              bgRepeat="no-repeat"
              {...getColor()(post.color, post.cover)}
            >
              <AspectRatio ratio={1}>
                <Link passHref href={post.url}>
                  <Box position="relative" as="a" display="block">
                    <Stack
                      bgColor="rgba(50,50,50,0.05)"
                      backdropFilter="blur(8px)"
                      color="white"
                      mt="auto"
                      w="100%"
                      p="30px"
                      spacing="10px"
                    >
                      <Heading noOfLines={1} size="md">
                        {post.title}{' '}
                      </Heading>
                      <Text noOfLines={1}>{post.description}</Text>
                    </Stack>
                  </Box>
                </Link>
              </AspectRatio>
            </Box>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};
