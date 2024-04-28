import { Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useSingleCategoryFeature } from '../../context';

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = () => {
  const { category } = useSingleCategoryFeature();

  return (
    <Flex direction="column" w="100%" align="center" justify="center">
      <Heading color="var(--primaryColor)" size="lg">
        {category.name}
      </Heading>
    </Flex>
  );
};

export default Hero;
