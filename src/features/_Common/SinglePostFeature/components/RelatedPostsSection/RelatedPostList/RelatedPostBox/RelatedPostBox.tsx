import { ImageFallBack } from '@/common/components/Element';
import { PostDetailModel } from '@/features/_Common/SinglePostFeature/types/types';
import ROUTES from '@/routers';
import { useDate } from '@/utils/helpers';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  post: PostDetailModel['relatedPosts'][number];
}

const RelatedPostBox: FC<Props> = ({ post }) => {
  const { date } = useDate();

  return (
    <Box
      cursor="pointer"
      p="10px"
      _hover={{
        bgColor: 'gray.50',
      }}
    >
      <Link
        passHref
        href={post.type === 'N' ? ROUTES.NEWS.POST(post.slug) : ROUTES.MAG.POST(post.slug)}
      >
        <Flex style={{ gap: '10px' }} w="100%" align="center">
          {post.cover ? (
            <ImageFallBack
              width="120px"
              border="1px solid"
              rounded="sm"
              borderColor="gray.300"
              flexShrink={0}
              fallBackProps={{
                width: '120px',
                height: '65px',
              }}
              src={post.cover}
              alt={post.coverAlt}
              objectFit="contain"
            />
          ) : (
            <Box width="120px" h="65px" flexShrink={0} bgColor="gray.100" />
          )}

          <Flex style={{ gap: '10px' }} justify="center" direction="column" w="calc(100% - 65px)">
            <Heading as="h3" lineHeight={7} size="sm" noOfLines={2}>
              {post.name}
            </Heading>
            <Text>{date(post.createdAt)}</Text>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
};

export default RelatedPostBox;
