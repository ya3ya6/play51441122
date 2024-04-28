import { Icon, Tab, Text } from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';
import { FunctionComponent } from 'react';

interface TabBoxProps {
  text: string;
  icon: IconType;
}

const TabBox: FunctionComponent<TabBoxProps> = ({ icon, text }) => {
  return (
    <Tab
      bgColor="white"
      border="1px solid"
      borderColor="gray.300"
      color="GrayText"
      rounded="lg"
      _focus={{
        boxShadow: 'none',
      }}
      p="15px"
    >
      <Icon fontSize="xl" as={icon} />
      <Text ms="10px">{text}</Text>
    </Tab>
  );
};

export default TabBox;
