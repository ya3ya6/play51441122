import { BoletIcon } from '@/common/icons';
import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface TextBoxProps {
  title: string;
  description: string;
  color: string;
}

const TextBox: FunctionComponent<TextBoxProps> = ({ title, description, color }) => {
  return (
    <Flex id="IntroductionSection" w={{ base: '100%', lg: '50%' }} my="100px" direction="column">
      <HStack mb="20px" color={color}>
        <BoletIcon />
        <Heading fontSize="2xl">{title}</Heading>
      </HStack>

      <Text textAlign="justify" color="GrayText" lineHeight={9}>
        {description}
      </Text>
    </Flex>
  );
};

export default TextBox;
