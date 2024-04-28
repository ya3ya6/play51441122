import { useDirection } from '@/hooks';
import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { HomeHeading } from '../Common/HomeHeading';
import TextBox from './TextBox/TextBox';
import { VideoBox } from './VideoBox/VideoBox';

export const AboutSection: FunctionComponent = () => {
  const { isRtl } = useDirection();

  return (
    <motion.div
      initial={{ x: isRtl ? '100%' : '-100%' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <Flex
        direction={{ base: 'column' }}
        w="100%"
        align="center"
        overflowX="hidden"
        overflowY="clip"
        mt={{ base: '50px', xl: '-50px' }}
        p={{ base: '0', xl: '80px 0' }}
        justifySelf="flex-start"
        position="relative"
        justify="center"
      >
        <HomeHeading title="About us" />
        <Container maxW="container.xl">
          <Flex
            w="100%"
            mt="20px"
            direction={{ base: 'column', xl: 'row-reverse' }}
            gap={{ base: '20px' }}
            position="relative"
            borderRadius={{ base: '50px', xl: '0' }}
            borderTopRightRadius={{ xl: '200px' }}
            borderBottomRightRadius={{ xl: '20px' }}
            bgColor={{ base: 'transparent', xl: 'rgb(36, 148, 188,0.10)' }}
            p={{ xl: '80px 0' }}
            align={{ base: 'center', xl: 'flex-start' }}
            justify={{ base: 'center', xl: 'flex-start' }}
          >
            <Box
              display={{ base: 'none', xl: 'block' }}
              position="absolute"
              right="-70px"
              top="-18%"
              sx={!isRtl ? { transform: 'scaleY(-1) rotate(180deg)' } : {}}
            >
              <Image src="/images/home/aboutLaser.png" alt="laser" width="276px" height="287px" />
            </Box>
            <Flex
              direction={{ base: 'column', xl: 'row-reverse' }}
              align={{ base: 'center', xl: 'flex-start' }}
              justify={{ base: 'center', xl: 'flex-start' }}
              w="full"
            >
              <TextBox />
              <VideoBox />
            </Flex>
            <Flex
              display={{ base: 'none', xl: 'flex' }}
              right="100%"
              top="50%"
              transform="translateY(-50%)"
              bgColor="rgb(36, 148, 188,0.10)"
              w="100000px"
              h="100%"
              position="absolute"
            />
          </Flex>
        </Container>
      </Flex>
    </motion.div>
  );
};
