import { Box, Container, Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HomeHeading } from '../Common/HomeHeading';
import { OurNewsList } from './OurNewsList/OurNewsList';
import { useOverview } from '../../hooks';

export const OurNewsSection: FunctionComponent = () => {
  const { overview } = useOverview();

  if (!overview?.news.length) {
    return <Box mt={{ base: '50px' }} />;
  }

  return (
    <Flex
      bgImage="/images/home/word.png"
      bgRepeat="no-repeat"
      backgroundPosition="center 150px"
      my={{ xl: '-150px' }}
      py={{ base: '0px', xl: '200px' }}
    >
      <Container maxW="container.xl">
        <HomeHeading title="Our News" href="/news" />
        <OurNewsList />
      </Container>
    </Flex>
  );
};
