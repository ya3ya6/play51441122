import { ChakraProps, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface HeroProps extends ChakraProps {
  title: string;
  text: string;
  image: string;
}
/**
 * ### Common Component BOX.
 */
export const Hero: FunctionComponent<HeroProps> = ({ title, text, image, ...chakraProps }) => {
  return (
    <Flex
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="450px"
      bgPosition="top"
      direction="column"
      align="center"
      justify="center"
      w="100%"
      bgImage={`linear-gradient(38deg, rgba(36,148,188,0.7) 0%, rgba(18,74,94,0.7) 100%) , url(${image})`}
      {...chakraProps}
    >
      <Heading textShadow="0 0 5px #000" color="white" as="h1" size="md">
        {title}
      </Heading>
      <Container maxW="container.md">
        <Text
          textShadow="0 0 5px #000"
          lineHeight="40px"
          textAlign="center"
          mt="10px"
          color="white"
        >
          {text}
        </Text>
      </Container>
    </Flex>
  );
};
