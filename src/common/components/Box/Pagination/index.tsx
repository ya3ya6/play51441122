import { useText } from '@/hooks';
import { Button, ChakraProps, Stack } from '@chakra-ui/react';
import { range } from 'lodash';
import { FunctionComponent } from 'react';

interface PaginationProps extends ChakraProps {
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

/**
 * ### Common Component BOX.
 */
export const Pagination: FunctionComponent<PaginationProps> = ({
  totalPages,
  currentPage,
  nextPage,
  prevPage,
  setPage,
  ...chakraProps
}) => {
  const t = useText();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Stack
      direction="row"
      justify="center"
      rowGap="20px"
      spacing="10px"
      flexWrap="wrap"
      w="100%"
      h="40px"
      zIndex="15"
      {...chakraProps}
    >
      <Button
        colorScheme="cyan"
        w="60px"
        cursor="pointer"
        color="#fff"
        rounded="8px"
        bgColor="#13A9C7"
        disabled={currentPage === 1}
        onClick={prevPage}
      >
        {t('pagination.prevBtn', { isCommon: true })}
      </Button>

      {range(1, totalPages + 1).map(page => (
        <Button
          key={page}
          colorScheme="cyan"
          w="40px"
          bgColor={currentPage === page ? '#505050' : '#eee'}
          pt="4px"
          color={currentPage === page ? '#fff' : '#505050'}
          rounded="8px"
          onClick={() => setPage(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        w="60px"
        color="#fff"
        rounded="8px"
        colorScheme="cyan"
        bgColor="#13A9C7"
        disabled={currentPage === totalPages}
        onClick={nextPage}
      >
        {t('pagination.nextBtn', { isCommon: true })}
      </Button>
    </Stack>
  );
};
