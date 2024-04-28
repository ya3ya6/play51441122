import { TabBoxPT } from '@/features/CareersFeature/types';
import { Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const TabBox: FunctionComponent<TabBoxPT> = ({ active, id, title, activeHandler }) => {
  return (
    <Text
      onClick={() => {
        activeHandler(id);
      }}
      p="10px 20px"
      flexShrink={0}
      cursor="pointer"
      position="relative"
      rounded="80px 80px 0 0"
      noOfLines={1}
      bgColor={active ? '#eee' : ''}
    >
      {title}
    </Text>
  );
};
