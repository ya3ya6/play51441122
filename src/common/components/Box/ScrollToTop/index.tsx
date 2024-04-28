import { TopArrowIcon } from '@/common/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { FunctionComponent, useEffect, useState } from 'react';
import { debounce } from 'lodash';

interface ScrollToTopProps {}
/**
 * ### Common Component BOX.
 */
export const ScrollToTop: FunctionComponent<ScrollToTopProps> = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      debounce(
        e => {
          if (window.scrollY <= 200) {
            setShowBtn(false);
          } else {
            setShowBtn(true);
          }
        },
        100,
        {
          leading: false,
          trailing: true,
        },
      ),
    );
  }, []);

  return (
    <Box
      display={showBtn ? { base: 'none', lg: 'flex' } : 'none'}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
      w="45px"
      zIndex="1300"
      h="45px"
      position="fixed"
      bottom="20px"
      right="25px"
    >
      <IconButton
        w="100%"
        h="100%"
        rounded="full"
        fontSize="3xl"
        colorScheme="brand"
        aria-label="scroll-top"
        icon={<TopArrowIcon />}
      />
    </Box>
  );
};
