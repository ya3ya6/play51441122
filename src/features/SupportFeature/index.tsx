import { useTicketsQuery } from '@/api/services/overview/_queries';
import { Box, Divider, useDisclosure } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { AllTicketList, HeaderBox, TabList } from './components';
import CreateTicket from './components/common/CreateTicket/CreateTicket';

interface SupportFeatureProps {}

export const SupportFeature: FunctionComponent<SupportFeatureProps> = () => {
  const { data: tickets, isLoading } = useTicketsQuery(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box h="100%">
      <HeaderBox onOpen={onOpen} />
      <Divider mt={5} />
      <Box height="100%">
        <TabList setTabIndex={setTabIndex} tabIndex={tabIndex} />
        <Divider mt="-1px" zIndex="-1" />
        {!isLoading && (
          <Box mt="20px" height="calc(100% - 150px)">
            {tabIndex === 0 && <AllTicketList tickets={tickets ?? []} />}
            {tabIndex === 1 && (
              <AllTicketList tickets={tickets?.filter(ticket => ticket.status === 'open') ?? []} />
            )}
            {tabIndex === 2 && (
              <AllTicketList
                tickets={tickets?.filter(ticket => ticket.status === 'answered') ?? []}
              />
            )}
            {tabIndex === 3 && (
              <AllTicketList
                tickets={tickets?.filter(ticket => ticket.status === 'closed') ?? []}
              />
            )}
          </Box>
        )}

        <CreateTicket isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
};
