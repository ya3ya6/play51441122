import { Box, Container, Stack } from '@chakra-ui/react';
import { ReactNode, FunctionComponent } from 'react';
import { MenuList } from './components';

interface PorfileLayoutProps {
  children: ReactNode;
}

const PorfileLayout: FunctionComponent<PorfileLayoutProps> = ({ children }) => {
  return (
    <Container maxW="container.xl" mt="60px" mb="100px">
      <Stack spacing={5} direction={{ base: 'column', lg: 'row' }}>
        <Box
          rounded="xl"
          p="5"
          bgColor="white"
          w={{ base: '100%', lg: '280px' }}
          flexShrink={0}
          position={{ base: 'static', lg: 'sticky' }}
          top="100px"
          height="100%"
          shadow="base"
        >
          <MenuList />
        </Box>
        <Box w="100%" shadow="base" rounded="xl" p="5" bgColor="white" flex={1}>
          {children}
        </Box>
      </Stack>
    </Container>
  );
};

export default PorfileLayout;
