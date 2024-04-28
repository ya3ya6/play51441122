import { I18_NAMESPACES } from '@/common/constants/Locales';
import { TicketModel } from '@/features/SupportFeature/types/ticket';
import { useText } from '@/hooks';
import { useDate } from '@/utils/helpers';
import { Box, Button, Collapse, Heading, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import TicketMessageList from './TicketMessageList/TicketMessageList';

interface TicketBoxProps {
  ticket: TicketModel;
}

const TicketBox: FunctionComponent<TicketBoxProps> = ({ ticket }) => {
  const { date } = useDate();
  const { isOpen, onToggle } = useDisclosure();
  const t = useText(I18_NAMESPACES.PROFILE);
  let statusColor;
  let statusMsg;

  switch (ticket.status) {
    case 'closed':
      statusColor = 'red.300';
      statusMsg = t('support.ticketType.close');
      break;
    case 'answered':
      statusColor = 'green.300';
      statusMsg = t('support.ticketType.open');
      break;
    case 'open':
      statusColor = 'orange.300';
      statusMsg = t('support.ticketType.await');
      break;
    default:
      break;
  }

  return (
    <Box w="100%" ps="10px" borderStart="5px solid" borderColor={statusColor}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '10px', lg: '0' }}
        w="100%"
        justify="space-between"
        align="center"
      >
        <Heading fontSize="sm">{ticket.title}</Heading>
        <Text>
          {t('support.ticketNumber')}:{ticket.id}
        </Text>
        <Text>{date(ticket.createdAt)}</Text>
        <Text color={statusColor}>{statusMsg}</Text>
        <Button onClick={onToggle} size="sm">
          {t('support.showMore')}
        </Button>
      </Stack>
      <Collapse in={isOpen} animateOpacity>
        <Box p="10px" mt="5" bg="gray.100" rounded="md" shadow="base">
          <TicketMessageList ticket={ticket} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default TicketBox;
