import { useCareersQuery } from '@/api/services/overview/_queries';
import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { TabBox } from './TabBox/TabBox';

interface Props {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export const TabList: FunctionComponent<Props> = ({ activeTab, setActiveTab }) => {
  const { data } = useCareersQuery(null);

  return (
    <Flex
      w="100%"
      zIndex="50"
      top="0"
      transform="translateY(-100%)"
      justify="space-between"
      bottom="100%"
      position="relative"
      overflowX="auto"
    >
      {data?.map(item => (
        <TabBox
          key={item.id}
          activeHandler={setActiveTab}
          id={item.id}
          title={item.name}
          active={activeTab === item.id}
        />
      ))}
    </Flex>
  );
};
