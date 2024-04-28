import { Accordion } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { PostDetailModel } from '../../../types/types';
import { FaqBox } from './FaqBox/FaqBox';

interface Props {
  faqs: PostDetailModel['faq'];
}

export const FaqList: FunctionComponent<Props> = ({ faqs }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {faqs.map(faq => (
        <FaqBox key={faq.id} faq={faq} />
      ))}
    </Accordion>
  );
};
