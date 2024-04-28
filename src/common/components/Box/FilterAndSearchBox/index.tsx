import { useText } from '@/hooks';
import { Box, Button, ChakraProps, Container, Flex, Input, Stack } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import Select from 'react-select';

interface FilterAndSearchBoxProps extends ChakraProps {
  onChangeSearch: (value: string) => void;
  onChangeFilter: (value?: string) => void;
}

export const FilterAndSearchBox: FunctionComponent<FilterAndSearchBoxProps> = ({
  onChangeSearch,
  onChangeFilter,
  ...chakraProps
}) => {
  const [selectedOptionState, setSelectedOption] = useState<{ value: string; label: string }>();
  const [value, setValue] = useState('');
  const t = useText();

  const options = [
    { value: '-created_at', label: t('filter.newest') },
    { value: 'created_at', label: t('filter.oldest') },
    { value: '-views', label: t('filter.visited') },
  ];

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const searchHandleChange = (event: any) => {
    setValue(event.target.value);
  };

  const searchChangeHandler = () => {
    onChangeSearch(value);
  };

  useEffect(() => {
    if (selectedOptionState?.value) {
      onChangeFilter(selectedOptionState?.value);
    }
  }, [selectedOptionState]);

  return (
    <Flex {...chakraProps}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          flexWrap="wrap"
          spacing="20px"
        >
          <Flex justify="center" w={{ base: '100%', sm: 'calc(50% - 10px)', lg: '250px' }}>
            <Button
              onClick={searchChangeHandler}
              w={{ base: '30%', xl: '80px' }}
              size="sm"
              colorScheme="brand"
              h="35px"
              borderRadius="10px 0 0 10px"
            >
              {t('search')}
            </Button>
            <Input
              bgColor="white"
              w={{ base: '70%', xl: '180px' }}
              type="text"
              h="36px"
              borderRadius="0 10px 10px 0"
              onChange={searchHandleChange}
              value={value}
            />
          </Flex>
          <Box
            mt={{ base: '5px', sm: '0' }}
            w={{ base: '100%', sm: 'calc(50% - 10px)', lg: '250px' }}
            position="relative"
            zIndex={500}
          >
            <Select
              value={selectedOptionState}
              defaultValue={options[0]}
              onChange={handleChange}
              isSearchable={false}
              options={options}
              placeholder={t('filter.placeholder')}
            />
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};
