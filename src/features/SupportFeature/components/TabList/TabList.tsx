import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';

interface TabListProps {
  setTabIndex: Dispatch<SetStateAction<number>>;
  tabIndex: number;
}

export const TabList: FunctionComponent<TabListProps> = ({ setTabIndex, tabIndex }) => {
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <Box>
      <Stack direction="row" flexWrap="wrap" spacing={5}>
        <Heading
          color="GrayText"
          py="20px"
          fontSize="sm"
          borderBottom="5px solid"
          borderColor={tabIndex === 0 ? 'brand.300' : 'transparent'}
          cursor="pointer"
          onClick={() => setTabIndex(0)}
        >
          {t('support.tabs.myTickets')}
        </Heading>
        <Heading
          color="GrayText"
          py="20px"
          fontSize="sm"
          borderBottom="5px solid"
          borderColor={tabIndex === 1 ? 'orange.300' : 'transparent'}
          cursor="pointer"
          onClick={() => setTabIndex(1)}
        >
          {t('support.tabs.awaitingTicket')}
        </Heading>
        <Heading
          color="GrayText"
          py="20px"
          fontSize="sm"
          borderBottom="5px solid"
          borderColor={tabIndex === 2 ? 'green.300' : 'transparent'}
          cursor="pointer"
          onClick={() => setTabIndex(2)}
        >
          {t('support.tabs.answeredTicket')}
        </Heading>
        <Heading
          color="GrayText"
          py="20px"
          fontSize="sm"
          borderBottom="5px solid"
          borderColor={tabIndex === 3 ? 'red.300' : 'transparent'}
          cursor="pointer"
          onClick={() => setTabIndex(3)}
        >
          {t('support.tabs.closedTicket')}
        </Heading>
      </Stack>
    </Box>
  );
};
