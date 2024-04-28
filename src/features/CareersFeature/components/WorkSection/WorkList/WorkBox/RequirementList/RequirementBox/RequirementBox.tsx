import { Center, Flex, Text } from '@chakra-ui/react';
import { CheckedIcon } from '@/common/icons';
import { RequirementBoxPT } from '@/features/CareersFeature/types';
import { FunctionComponent } from 'react';

export const RequirementBox: FunctionComponent<RequirementBoxPT> = ({ description }) => {
  return (
    <Flex gap="5px">
      <Center color="red.300">
        <CheckedIcon />
      </Center>
      <Text>{description}</Text>
    </Flex>
  );
};
