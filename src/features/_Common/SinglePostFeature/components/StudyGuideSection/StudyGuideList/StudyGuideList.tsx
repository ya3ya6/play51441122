import { Flex } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { StudyGuideBox } from './StudyGuideBox/StudyGuideBox';

interface StudyGuideListPropsType {
  id: string;
  headingList: { title: string | null; id: string }[];
}

export const StudyGuideList: FunctionComponent<StudyGuideListPropsType> = ({ id, headingList }) => {
  if (headingList.length <= 0) {
    return null;
  }
  return (
    <Flex direction="column" gap="20px">
      {headingList?.map(item => (
        <StudyGuideBox key={item.id} title={item.title as string} id={item.id} />
      ))}
    </Flex>
  );
};
