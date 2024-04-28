import { useAboutusQuery } from '@/api/services/overview/_queries';
import {
  DocumentTextNavIcon,
  HomeNavIcon,
  NewspaperNavIcon,
  PhoneNavIcon,
  ShoppingBagNavIcon,
} from '@/common/icons';
import { useText } from '@/hooks';
import ROUTES from '@/routers';
import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface BottomNavigationFeatureProps {}

export const BottomNavigationFeature: FunctionComponent<BottomNavigationFeatureProps> = () => {
  const t = useText();
  const { data: aboutUs } = useAboutusQuery(null);
  return (
    <Box
      display={{ base: 'block', sm: 'none' }}
      position="sticky"
      zIndex="1350"
      bottom="0"
      w="100%"
      h="66px"
      mt="20px"
    >
      <Flex
        id="bottomNavigationPhone"
        w="60px"
        align="center"
        justify="center"
        left="50%"
        transform="translate(-50%,-60%)"
        h="60px"
        bg="var(--primaryGradient)"
        position="absolute"
        rounded="full"
        zIndex={1000}
        color="white"
        fontSize="xl"
        ps="3px"
        pt="5px"
        shadow="md"
      >
        <a href={`tel:${aboutUs?.mobileNumber}`}>
          <PhoneNavIcon />
        </a>
      </Flex>
      <Flex w="100%" justify="center" h="100%" position="absolute">
        <Stack spacing="3px" align="center" justify="end" w="20%" h="100%" p="6px">
          <Link href={ROUTES.HOME} passHref>
            <a>
              <VStack spacing={1}>
                <Box fontSize="xl" color="GrayText">
                  <HomeNavIcon />
                </Box>
                <Text color="GrayText">{t('bottomNavigation.home')}</Text>
              </VStack>
            </a>
          </Link>
        </Stack>

        <Stack spacing="3px" align="center" justify="end" w="20%" h="100%" p="6px">
          <Link href={ROUTES.SHOP.INDEX} passHref>
            <a>
              <VStack spacing={1}>
                <Box fontSize="xl" color="GrayText">
                  <ShoppingBagNavIcon />
                </Box>
                <Text color="GrayText">{t('bottomNavigation.products')}</Text>
              </VStack>
            </a>
          </Link>
        </Stack>

        <Stack spacing="3px" ms="auto" align="center" justify="end" w="20%" h="100%" p="6px">
          <Link href={ROUTES.MAG.INDEX} passHref>
            <a>
              <VStack spacing={1}>
                <Box fontSize="xl" color="GrayText">
                  <DocumentTextNavIcon />
                </Box>
                <Text color="GrayText">{t('bottomNavigation.mag')}</Text>
              </VStack>
            </a>
          </Link>
        </Stack>

        <Stack spacing="3px" align="center" justify="end" w="20%" h="100%" p="6px">
          <Link href={ROUTES.NEWS.INDEX} passHref>
            <a>
              <VStack spacing={1}>
                <Box fontSize="xl" color="GrayText">
                  <NewspaperNavIcon />
                </Box>

                <Text color="GrayText">{t('bottomNavigation.news')}</Text>
              </VStack>
            </a>
          </Link>
        </Stack>
      </Flex>

      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="66.001"
        viewBox="0 0 360 66.001"
      >
        <path
          id="Subtraction_110"
          data-name="Subtraction 110"
          d="M360,112H0V46H129.455c1.08.006,10.638.227,13.641,6.229a39.515,39.515,0,0,0,73.54,3.244c.207,0,.542-.715,1-2.12A8.419,8.419,0,0,1,220.67,49.2,14.378,14.378,0,0,1,225.179,47,24.748,24.748,0,0,1,231.732,46H360v66Z"
          transform="translate(0 -46)"
          fill="#fff"
        />
      </svg>
    </Box>
  );
};
