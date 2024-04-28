import { ContentBox } from '@/common/components/Box';
import { Box, Container, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import TableList from './TableList/TableList';
import TabList from './TabList/TabList';
import { useProduct } from '../../hooks';

interface ContentSectionProps {
  id: string;
}

const ContentSection: FunctionComponent<ContentSectionProps> = ({ id }) => {
  const product = useProduct();

  return (
    <Box>
      <Container maxW="container.xl">
        <Tabs isFitted variant="solid-rounded" colorScheme="brand">
          <TabList />
          <TabPanels>
            <TabPanel p="0px">
              <ContentBox id={id} content={product.description} mt="40px" />
            </TabPanel>
            <TabPanel p="0px">
              <TableList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default ContentSection;
