import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { CardTextIcon } from '@/common/icons';
import { SimpleCategoryModelWithLink } from '@/features/_Common/CategoryFeature/types';
import Link from 'next/link';
import { useText } from '@/hooks';
import { ImageFallBack } from '@/common/components/Element';

type SubCategoryBoxProps = SimpleCategoryModelWithLink & {
  hasImage?: boolean;
};

const SubCategoryBox: FunctionComponent<SubCategoryBoxProps> = ({
  name,
  count,
  posts,
  coverAlt,
  cover,
  link,
  hasImage = true,
}) => {
  const t = useText();
  return (
    <Stack
      as={LinkOverlay}
      href={link}
      position="relative"
      borderStart={!hasImage ? '6px solid' : 'none'}
      borderTop={hasImage ? '6px solid' : 'none'}
      spacing="5px"
      borderColor="var(--primaryColor)"
      bgColor="white"
      p="18px 10px"
      rounded="2xl"
      shadow="md"
    >
      {hasImage && (
        <AspectRatio
          ratio={16 / 9}
          rounded="lg"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.200"
        >
          <ImageFallBack alt={coverAlt} src={cover} />
        </AspectRatio>
      )}

      <Flex align="center" justify="space-between" p="8px">
        <Box>
          <Heading noOfLines={1} color="gray.800" lineHeight="8" size="sm">
            {name}
          </Heading>
          <Flex color="gray.500" align="center">
            <HStack spacing="5px" align="center">
              <CardTextIcon />
              <Text>
                {count} {t('post', { isCommon: true })}
              </Text>
            </HStack>
          </Flex>
        </Box>
        <Flex align="center">
          {posts?.slice(0, 4).map(post => (
            <Box
              key={post.id}
              border="2px solid"
              borderColor="brand.600"
              bgColor="white"
              w="48px"
              h="48px"
              rounded="full"
              overflow="hidden"
              ms="-8px"
            >
              <Link
                passHref
                href={post.slug}
                style={{ width: '100%', height: '100%', display: 'block' }}
              >
                <a style={{ width: '100%', height: '100%', display: 'block' }}>
                  <Image
                    shadow="md"
                    alt={post.name}
                    src={post.cover}
                    objectFit="cover"
                    w="48px"
                    h="48px"
                  />
                </a>
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default SubCategoryBox;
