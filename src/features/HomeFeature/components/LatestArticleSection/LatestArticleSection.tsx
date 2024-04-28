import { FunctionComponent, useState } from 'react';
import { Container, Flex } from '@chakra-ui/react';
import { useDirection } from '@/hooks';
import { motion } from 'framer-motion';
import ImageBox from './ImageBox/ImageBox';
import AuthorBox from './AuthorBox/AuthorBox';
import { LatestArticleList } from './LatestArticleList/LatestArticleList';
import { Dots, SmallLaser } from './design';
import { HomeHeading } from '../Common/HomeHeading';
import { useOverview } from '../../hooks';

export const LatestArticleSection: FunctionComponent = () => {
  const { overview } = useOverview();
  const { isRtl } = useDirection();
  const [active, setActive] = useState(0);

  if (!overview?.mags.length) {
    return null;
  }

  return (
    <motion.div
      initial={{ x: isRtl ? '-100%' : '100%' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <Flex
        direction="column"
        w="100%"
        align="center"
        justifySelf="flex-start"
        justify="center"
        position="relative"
        overflow="hidden"
        padding="50px 0 80px"
        margin="-80px 0"
      >
        <Container maxW="container.xl">
          <HomeHeading title="Latest Articles " href="/mag" />
          <Flex
            direction={{ base: 'column' }}
            bgImage="url(images/home/bg.png)"
            boxShadow={isRtl ? 'inset -5em 0em 50px #e2edf1' : 'inset -5em 0em 50px #e2edf1'}
            mt={{ base: '140px', xl: '80px' }}
            bgPos="center"
            bgSize="cover"
            position="relative"
            borderRadius={{ base: '40px', xl: '0' }}
            borderTopLeftRadius={{ xl: '200px' }}
            bgColor="rgb(36, 148, 188,0.10)"
          >
            <Dots display={{ base: 'none', md: 'block' }} />
            <SmallLaser display={{ base: 'none', xl: 'block' }} />
            <LatestArticleList setActive={setActive} active={active} />
            <ImageBox active={active} />
            <AuthorBox active={active} />
            <Flex
              display={{ base: 'none', xl: 'flex' }}
              w="10000px"
              left="100%"
              position="absolute"
              h="100%"
              bgColor="#e2ecef"
            />
          </Flex>
        </Container>
      </Flex>
    </motion.div>
  );
};
