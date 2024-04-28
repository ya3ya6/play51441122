import { Button, Flex } from '@chakra-ui/react';
import { RequirementListPT } from '@/features/CareersFeature/types';
import { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MapIcon, UploadIcon } from '@/common/icons';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useRouter } from 'next/router';
import { RequirementBox } from './RequirementBox/RequirementBox';

export const RequirementList: FunctionComponent<RequirementListPT> = ({
  id,
  description,
  address,
}) => {
  const router = useRouter();
  const t = useText(I18_NAMESPACES.CAREERS);

  const selectRequirement = () => {
    router.replace(
      {
        query: {
          ...router.query,
          requirement: id,
        },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  return (
    <Flex py="20px" position="relative" direction="column" gap="20px" minH="200">
      <Flex
        position={{ base: 'static', sm: 'absolute' }}
        sx={{ base: { top: '10px' }, md: { bottom: '20px', top: 'auto' } }}
        w="100%"
        justify={{ base: 'flex-start', sm: 'flex-end' }}
      >
        <Button
          pointerEvents="none"
          color="gray.400"
          leftIcon={<MapIcon />}
          minW="150px"
          colorScheme="gray"
        >
          {address}
        </Button>
      </Flex>
      {description.map(text => (
        <RequirementBox key={uuidv4()} description={text} />
      ))}
      <Flex
        position={{ base: 'static', sm: 'absolute' }}
        bottom="20px"
        w="100%"
        justify={{ base: 'flex-start', sm: 'flex-end' }}
      >
        <Button
          onClick={selectRequirement}
          leftIcon={<UploadIcon />}
          minW="150px"
          colorScheme="red"
        >
          {t('careers.btn')}
        </Button>
      </Flex>
    </Flex>
  );
};
