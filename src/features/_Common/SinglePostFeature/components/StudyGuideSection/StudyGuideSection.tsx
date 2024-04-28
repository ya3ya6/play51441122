import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { ChakraProps, Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import { StudyGuideList } from './StudyGuideList/StudyGuideList';

interface StudyGuideSectionPropsType extends ChakraProps {
  id: string;
}

export const StudyGuideSection: FunctionComponent<StudyGuideSectionPropsType> = ({
  id,
  ...chakraProps
}) => {
  const [headingList, setHeadingList] = useState<{ title: string | null; id: string }[]>([]);
  const t = useText(I18_NAMESPACES.SINGLE);
  useEffect(() => {
    const heading: { title: string | null; id: string }[] = [];
    const content = document.getElementById(id);

    content?.querySelectorAll('h1').forEach((item, index) => {
      item.setAttribute('id', `h1-${index}`);
      heading.push({
        id: `h1-${index}`,
        title: item.textContent,
      });
    });

    content?.querySelectorAll('h2').forEach((item, index) => {
      item.setAttribute('id', `h2-${index}`);
      heading.push({
        id: `h2-${index}`,
        title: item.textContent,
      });
    });
    setHeadingList(heading);
  }, []);

  if (headingList.length <= 0) return null;

  return (
    <Flex
      position="relative"
      bgColor="#fff"
      rounded="xl"
      h="50%"
      border="1px solid #eee"
      w="100%"
      justify="center"
      {...chakraProps}
    >
      <Flex
        h="70px"
        rounded="lg"
        w="calc(100% - 60px)"
        border="1px solid #eee"
        bgColor="white"
        position="absolute"
        top="0"
        transform="translateY(-50%)"
        align="center"
        justify="center"
      >
        <Heading as="h3" size="md">
          {t('aside.studyGuide')}
        </Heading>
      </Flex>
      <Flex w="100%" style={{ gap: '20px' }} p="20px" pt="60px" direction="column">
        <StudyGuideList id={id} headingList={headingList} />
      </Flex>
    </Flex>
  );
};

export default StudyGuideSection;
