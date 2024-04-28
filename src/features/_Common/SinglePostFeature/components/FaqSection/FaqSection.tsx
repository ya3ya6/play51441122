import { Box, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { PostDetailModel } from '../../types/types';
import { FaqList } from './FaqList/FaqList';

interface Props {
  faqs: PostDetailModel['faq'];
}

export const FaqSection: FC<Props> = ({ faqs }) => {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <Flex w="100%" justify="center" align="center" direction="column">
      <Heading my="30px" color="#1f87ad" size="md">
        سوالات متداول
      </Heading>
      <Box w="100%">
        <FaqList faqs={faqs} />
      </Box>
    </Flex>
  );
};
