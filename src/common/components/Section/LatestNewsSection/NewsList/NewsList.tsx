import { NewsBox } from '@/common/components/Box';
import { Flex, Grid } from '@chakra-ui/react';
import { FunctionComponent, ComponentProps } from 'react';

const extraProps = [
  { alignSelf: 'start' },
  {
    alignSelf: 'end',
    mb: { xl: '40px' },
  },
  {
    alignSelf: 'start',
    mt: { xl: '40px' },
  },
  {
    alignSelf: 'end',
  },
];

interface Props {
  posts: ComponentProps<typeof NewsBox>['post'][];
}

export const NewsList: FunctionComponent<Props> = ({ posts }) => {
  let index = 0;

  return (
    <Flex
      direction={{ base: 'row' }}
      right="50px"
      top="50%"
      transform={{ xl: 'translateY(-50%)' }}
      position={{ base: 'static', xl: 'absolute' }}
      flexShrink={0}
      w={{ base: '100%', xl: '50%' }}
      overflowX={{ base: 'auto', sm: 'unset' }}
      mt="20px"
    >
      <Grid
        gap={{ base: '20px', xl: '0 20px' }}
        flexShrink={0}
        display={{ base: 'flex', sm: 'grid' }}
        w={{ base: '90%', sm: '100%' }}
        mt={{ base: '0', xl: '-100px' }}
        gridTemplateColumns={{
          base: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr 1fr',
          xl: '1fr 1fr',
        }}
        gridTemplateRows={{ xl: '350px 350px' }}
      >
        {posts.map(post => (
          <NewsBox key={post.id} post={post} w="100%" flexShrink={0} {...extraProps[index++]} />
        ))}
      </Grid>
    </Flex>
  );
};
