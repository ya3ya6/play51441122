import { Flex, Heading, Text, Box, AspectRatio, Icon, Center } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useDirection, useText } from '@/hooks';
import { ButtonWithIcon, ImageFallBack } from '@/common/components/Element';
import Link from 'next/link';
import ROUTES from '@/routers';
import { motion } from 'framer-motion';
import { PlayIcon } from '@/common/icons';

interface NewsBoxProps {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  slug: string;
  contentType: string;
}

export const OurNewsBox: FunctionComponent<NewsBoxProps> = ({
  image,
  title,
  text,
  slug,
  imageAlt,
  contentType,
}) => {
  const t = useText();
  const { isRtl } = useDirection();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Flex
        boxShadow="lg"
        height="100%"
        overflow="hidden"
        rounded="lg"
        direction="column"
        bgColor="#fff"
      >
        <Box padding="10px" position="relative">
          {contentType === 'V' && (
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
              <Icon me={isRtl ? '5px' : '-5px'} fontSize="2xl" color="white" as={PlayIcon} />
            </Center>
          )}
          <Link passHref href={ROUTES.NEWS.POST(slug)}>
            <Box cursor="pointer" as="a">
              <AspectRatio
                rounded="lg"
                overflow="hidden"
                ratio={16 / 9}
                as="figure"
                position="relative"
                p="12px"
              >
                <ImageFallBack
                  alt={imageAlt}
                  src={image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
          </Link>
        </Box>
        <Flex p="12px" paddingTop="0" direction="column" flex={1}>
          <Heading as="h2" size="sm" mb="12px" noOfLines={2} lineHeight={7}>
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.500" noOfLines={2} lineHeight={7}>
            {text}
          </Text>
        </Flex>
        <Link passHref href={ROUTES.NEWS.POST(slug)}>
          <ButtonWithIcon
            as="a"
            iconPosition="right"
            borderRadius="0"
            borderTopLeftRadius="20px"
            colorScheme="brand"
            minW="120px"
            h="35px"
            alignSelf="flex-end"
            fontSize="md"
            fontWeight="normal"
          >
            {t(contentType === 'V' ? 'videoBtn' : 'readMore', { isCommon: true })}
          </ButtonWithIcon>
        </Link>
      </Flex>
    </motion.div>
  );
};
