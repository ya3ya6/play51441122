import { Avatar, Flex, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface CommentBoxProps {
  name: string;
  role: string;
  text: string;
  cover: string;
  coverAlt: string;
}

const CommentBox: FunctionComponent<CommentBoxProps> = ({ name, role, text, cover }) => {
  return (
    <Flex direction="column" p="20px" rounded="xl" w="100%" h="100%" bgColor="white">
      <Flex gap="10px" h="70px" w="100%">
        <Avatar size="lg" name="Dan Abrahmov" src={cover} />
        <Flex gap="5px" justify="center" direction="column">
          <Text noOfLines={3} fontSize="sm" color="gray.600">
            {name}
          </Text>
          <Text color="gray.400" fontSize="sm">
            {role}
          </Text>
        </Flex>
      </Flex>
      <Text
        mt="15px"
        lineHeight={8}
        textAlign="justify"
        noOfLines={5}
        fontSize="md"
        fontWeight="normal"
        color="gray.700"
      >
        {text}
      </Text>
    </Flex>
  );
};

export default CommentBox;
