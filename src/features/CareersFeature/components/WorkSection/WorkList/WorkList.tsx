import { useCareersQuery } from '@/api/services/overview/_queries';
import { Accordion } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { WorkBox } from './WorkBox/WorkBox';

export const WorkList: FunctionComponent<{ activeTab: number }> = ({ activeTab }) => {
  const { data } = useCareersQuery(null);

  return (
    <Accordion allowMultiple>
      {data!
        .find(tab => tab.id === activeTab)!
        .jobposts.map(({ id, name, descriptions, location }) => (
          <WorkBox
            key={id}
            id={id}
            title={name}
            address={location}
            description={descriptions.map(item => item.description)}
          />
        ))}
    </Accordion>
  );
};
