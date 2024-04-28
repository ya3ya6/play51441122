import { I18_NAMESPACES } from '@/common/constants/Locales';
import { DocumentTextNavIcon } from '@/common/icons';
import { TicketModel } from '@/features/SupportFeature/types/ticket';
import { useText } from '@/hooks';
import { useDate } from '@/utils/helpers';
import { Avatar, Box, Center, Flex, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface TicketMessageBoxProps {
  message: TicketModel['messages'][number];
}

const TicketMessageBox: FunctionComponent<TicketMessageBoxProps> = ({ message }) => {
  const { dateTime } = useDate();
  const t = useText(I18_NAMESPACES.PROFILE);
  return (
    <Flex align="center" flexDirection={message.isSupport ? 'row-reverse' : 'row'} gap="15px">
      <Avatar
        border={!message.isSupport ? '3px solid #1f87ad' : ''}
        size="lg"
        name={message.fullName}
      />
      <Stack
        width="100%"
        bgColor="white"
        spacing="15px"
        rounded="5px"
        p="20px"
        justify="center"
        position="relative"
        {...(!message.isSupport ? { border: '3px solid', borderColor: 'brand.600' } : {})}
        w="full"
      >
        <Box pt={8}>
          <Heading color="brand.600" mb="5px" fontSize="sm">
            {message.fullName}
          </Heading>
          <Text color="GrayText">{message.message}</Text>
        </Box>
        {message.file && (
          <Box
            w="100%"
            color="GrayText"
            fontSize="sm"
            rounded="md"
            p="10px"
            border="1px solid"
            borderColor="gray.300"
          >
            <a href={message.file} target="_blank" rel="noreferrer">
              <HStack spacing="5px">
                <Icon as={DocumentTextNavIcon} />
                <Text>{t('support.attachmentDownload')}</Text>
              </HStack>
            </a>
          </Box>
        )}
        <Center
          color="brand.500"
          p="5px 10px"
          rounded="lg"
          fontSize="sm"
          right="20px"
          top="15px"
          position="absolute"
        >
          {dateTime(message.createdAt)}
        </Center>
      </Stack>
    </Flex>
  );
};

export default TicketMessageBox;
