import { Box, Container, Stack } from '@chakra-ui/react';
import { ComponentProps, FunctionComponent } from 'react';
import { NewsList } from './NewsList/NewsList';
import TextBox from './TextBox/TextBox';

interface Props {
  posts: ComponentProps<typeof NewsList>['posts'];
}

export const LatestNewsSection: FunctionComponent<Props> = ({ posts }) => {
  return (
    <Box
      mx="auto"
      w="100%"
      py={{ base: '80px', xl: '380px' }}
      mb={{ xl: '60px' }}
      bgPos="center"
      bgSize="cover"
      bgImage="url(/images/news/bgPattern.svg)"
    >
      <Container maxW="container.xl">
        <Stack
          position="relative"
          bg="linear-gradient(50deg, rgba(19,169,199,1) 50%, rgba(10,85,100,1) 100%)"
          rounded="30px"
          p={{ base: '20px', xl: '40px' }}
          py={{ base: '30px', xl: '50px' }}
          spacing="20px"
          shadow="xl"
        >
          <TextBox />
          <NewsList posts={posts} />
        </Stack>
      </Container>
    </Box>
  );
};
