import { BoletIcon } from '@/common/icons';
import { ChakraProps, Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface HeadingBoxProps extends ChakraProps {
  title: string;
  description: string;
  id: string;
  color: string;
}

const HeadingBox: FunctionComponent<HeadingBoxProps> = ({
  title,
  description,
  id,
  color,
  ...chakraProps
}) => {
  return (
    <Flex id={id} align="center" direction="column" gap="10px" color={color} {...chakraProps}>
      <BoletIcon />
      <Heading textAlign="center" size="md">
        {title}
      </Heading>
      <Text textAlign="center" color="GrayText">
        {description}
      </Text>
    </Flex>
  );
};

export default HeadingBox;
