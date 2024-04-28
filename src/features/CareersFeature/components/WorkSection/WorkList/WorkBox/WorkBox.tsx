import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { RequirementList } from './RequirementList/RequirementList';

interface WorkBoxPT {
  id: number;
  title: string;
  address: string;
  description: string[];
}

export const WorkBox: FunctionComponent<WorkBoxPT> = ({ title, address, description, id }) => {
  return (
    <AccordionItem rounded="xl" shadow="md" bgColor="#fff" my="20px">
      <AccordionButton rounded="xl" p="20px" justifyContent="space-between">
        <Flex align="center" gap="12px">
          <Box w="12px" h="12px" bgColor="#FF2861" rounded="full" />
          <Heading size="sm">{title}</Heading>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <RequirementList id={id} address={address} description={description} />
      </AccordionPanel>
    </AccordionItem>
  );
};
