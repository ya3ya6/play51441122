import { Bolet } from '@/common/components/Design';
import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import classes from './CommentBox.module.css';

interface CommentBoxProps {
  name: string;
  text: string;
  cover: string;
  coverAlt: string;
  role: string;
}

export const CommentBox: FunctionComponent<CommentBoxProps> = ({ name, text, cover, role }) => {
  return (
    <Flex w="100%" justify="center" p="10px" m="20px" align="center" className={classes.commentBox}>
      <Flex w="calc(40% - 30px)" className={classes.textBox} direction="column">
        <Heading textAlign="left" as="h3" size="sm">
          {name}
        </Heading>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          {role}
        </Text>
      </Flex>
      <Flex
        className={classes.boltWrapper}
        zIndex="10"
        align="center"
        justify="center"
        w="60px"
        h="100px"
      >
        <Bolet />
      </Flex>
      <Flex
        bgColor="#fff"
        p="10px"
        boxShadow="md"
        align="center"
        rounded="10px"
        className={classes.avatarBox}
        w="calc(40% - 30px)"
        gap="10px"
      >
        <Avatar size="lg" name={name} src={cover} />
        <Flex align="center" minH="130px">
          <Text noOfLines={4} fontSize="md" color="gray.500" mr="10px">
            {text}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
