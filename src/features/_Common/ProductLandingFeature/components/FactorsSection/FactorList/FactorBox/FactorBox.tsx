import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface FactorBoxProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const FactorBox: FunctionComponent<FactorBoxProps> = ({ title, description, image }) => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      bgColor="white"
      p={{ base: '40px 20px', lg: '60px 40px' }}
      gap="50px"
      align="center"
    >
      <Box
        outline="6px solid"
        outlineOffset="8px"
        outlineColor="gray.200"
        border="4px solid"
        borderColor="gray.200"
        flexShrink={0}
        w="220px"
        h="220px"
        rounded="full"
      >
        <Image src={image.src} alt={image.alt} width="100%" height="100%" rounded="full" />
      </Box>
      <Box flex={1}>
        <Heading mb="20px" fontSize="xl">
          {title}
        </Heading>
        <Text color="GrayText" lineHeight={10}>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default FactorBox;
