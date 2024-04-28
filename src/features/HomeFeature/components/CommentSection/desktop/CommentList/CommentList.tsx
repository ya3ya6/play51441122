import { Container, Flex, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useOverview } from '@/features/HomeFeature/hooks';
import { CommentBox } from './CommentBox/CommentBox';

const CommentList: FunctionComponent = () => {
  const { customerOpinions } = useOverview();

  return (
    <Container maxW="container.xl">
      <Flex justify="center">
        <Image src="./images/home/comment.png" w="80px" />
      </Flex>
      <Flex position="relative" align="center" mt="20px" direction="column">
        <Flex
          h="90%"
          position="absolute"
          w="2px"
          top="50%"
          borderRadius="5px"
          left="50%"
          transform="translate(-50%,-50%)"
          bgImage="linear-gradient(180deg, rgba(241,241,241,1) 0%, rgba(191,191,191,1) 25%, rgba(190,190,190,1) 50%, rgba(178,178,178,1) 75%, rgba(241,241,241,1) 100%)"
        />
        {customerOpinions?.customerOpinion.map(
          ({ id, name, subName, description, cover, coverAlt }) => (
            <CommentBox
              key={id}
              coverAlt={coverAlt}
              text={description}
              name={name}
              role={subName}
              cover={cover}
            />
          ),
        )}
      </Flex>
    </Container>
  );
};

export default CommentList;
