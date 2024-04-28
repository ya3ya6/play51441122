import { I18_NAMESPACES } from '@/common/constants/Locales';
import { ArticleIcon, TechnicalIcon } from '@/common/icons';
import { useText } from '@/hooks';
import { TabList as Tabs } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import TabBox from './TabBox/TabBox';

interface TabListProps {}

const TabList: FunctionComponent<TabListProps> = () => {
  const t = useText(I18_NAMESPACES.SHOP);
  const tabData = [
    {
      id: 1,
      text: t('product.content'),
      icon: ArticleIcon,
    },
    {
      id: 2,
      text: t('product.technical'),
      icon: TechnicalIcon,
    },
  ];
  return (
    <Tabs mb="1em" flexDirection={{ base: 'column', sm: 'row' }} gap="15px">
      {tabData.map(({ text, icon, id }) => (
        <TabBox key={id} text={text} icon={icon} />
      ))}
    </Tabs>
  );
};

export default TabList;
