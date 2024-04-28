import { Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useOverview } from '../../../hooks';

interface TextBoxProps {}

const TextBox: FunctionComponent<TextBoxProps> = () => {
  const { aboutus } = useOverview();

  return (
    <Flex
      color="white"
      p="0 20px"
      direction="column"
      align="center"
      justify="center"
      position="absolute"
      right={{ base: '0px', md: '200px' }}
      bottom={{ base: '40px', md: '190px' }}
      mt={{ base: '12px', md: '0px' }}
    >
      <Heading
        textShadow="2px 2px 5px #000"
        textAlign="center"
        fontSize={{ base: '14px', lg: '32px' }}
      >
        {aboutus?.homepageTitle}
      </Heading>
    </Flex>
  );
};

export default TextBox;
