import { OrderStepList } from '@/common/components/List';
import { useText } from '@/hooks';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const OrderStepSection: FunctionComponent = () => {
  const t = useText();
  return (
    <Container maxW="container.xl">
      <Box mx="auto" mt="-250px" mb="150px">
        <Stack align="center" spacing="10px" justify="center" my="80px" direction="column">
          <Heading textAlign="center" size="md">
            {t('steps.title')}
          </Heading>
          <Text textAlign="center" color="GrayText">
            {t('steps.description')}
          </Text>
        </Stack>
        <OrderStepList varient="vertical" px="30px" />
      </Box>
    </Container>
  );
};
