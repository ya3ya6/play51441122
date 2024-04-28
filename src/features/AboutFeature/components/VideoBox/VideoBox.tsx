import { Box, Flex, AspectRatio } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

import { Dots } from '@/common/components/Design';
import { useAboutusQuery } from '@/api/services/overview/_queries';
import { Aparat } from '@/common/components/Media/Aparat';
import classes from './VideoBox.module.css';

export const VideoBox: FunctionComponent = () => {
  const { data: aboutUs } = useAboutusQuery(null);

  return (
    <Flex mt={{ base: '-100px', md: '-150px' }} align="center" justify="center" mx="auto">
      <Box className={classes.video} position="relative">
        <Box
          display={{ base: 'none', sm: 'block' }}
          className={classes.wink}
          zIndex="2"
          position="absolute"
          top="-40px"
          right="-40px"
        >
          <Dots />
        </Box>
        <AspectRatio
          w={{ base: '300px', sm: '480px', md: '580px' }}
          ratio={16 / 9}
          overflow="hidden"
          rounded="2xl"
          border="1px solid"
          borderColor="gray.200"
          position="relative"
          zIndex="5"
        >
          {aboutUs?.video ? <Aparat url={aboutUs.video} /> : <Flex bgColor="#333" shadow="lg" />}
        </AspectRatio>
        <Box
          display={{ base: 'none', sm: 'block' }}
          className={classes.wink}
          zIndex="2"
          position="absolute"
          bottom="-40px"
          left="-40px"
        >
          <Dots />
        </Box>
      </Box>
    </Flex>
  );
};
