import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import { useCareersQuery } from '@/api/services/overview/_queries';
import { TabList } from './TabList/TabLists';
import { WorkList } from './WorkList/WorkList';

export const WorkSection: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const { data } = useCareersQuery(null);
  const t = useText(I18_NAMESPACES.CAREERS);

  useEffect(() => {
    if (data) setActiveTab(data?.[0]?.id ?? -1);
  }, [data]);

  if (activeTab === -1) {
    return null;
  }

  return (
    <Box>
      <Flex px="15px" my="80px" align="center" justify="center" direction="column" gap="10px">
        <Heading size="md">{t('careers.title')}</Heading>
        <Text mt="10px" textAlign="center">
          {t('careers.description')}
        </Text>
      </Flex>
      <Box position="relative" mt="120px" pb="80px" bgColor="#eee">
        <Container maxW="container.xl">
          <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
        </Container>
        <Container maxW="container.lg">
          <WorkList activeTab={activeTab} />
        </Container>
      </Box>
    </Box>
  );
};
