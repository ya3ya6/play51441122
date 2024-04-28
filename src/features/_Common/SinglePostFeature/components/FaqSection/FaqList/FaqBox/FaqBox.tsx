import { FunctionComponent } from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useDirection } from '@/hooks';
import { PostDetailModel } from '@/features/_Common/SinglePostFeature/types/types';

interface Props {
  faq: PostDetailModel['faq'][number];
}

export const FaqBox: FunctionComponent<Props> = ({ faq }) => {
  const { isRtl } = useDirection();

  return (
    <AccordionItem rounded="lg" mb="15px" border="1px solid #eee" bgColor="white">
      <Heading as="h2" size="md">
        <AccordionButton height="60px" rounded="lg">
          <Box flex="1" textAlign="left">
            <Heading color="#333" as="h2" size="sm">
              {faq.question}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
    </AccordionItem>
  );
};
