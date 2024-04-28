import { useLanguageQuery } from '@/api/services/core';
import { useAboutusQuery } from '@/api/services/overview/_queries';
import { PhoneIcon } from '@/common/icons';
import { MobileMenuFeature } from '@/features/_Separate';
import ROUTES from '@/routers';
import { Box, Button, Container, Flex, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';
import { useNotification } from '../../Layout/hooks';
import { LangBox } from '../LangBox';
import { Social } from '../Social';
/**
 * ### Common Component BOX.
 */
interface TopNavPropsType {
  action?: ReactNode;
}
export const TopNav: FunctionComponent<TopNavPropsType> = ({ action }) => {
  const { data: aboutUs } = useAboutusQuery(null);
  // const { setOpen } = useShoppingModal();
  useNotification();
  const { data } = useLanguageQuery(null);
  const [mobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Box position="relative" bgColor="white" w="100%">
      {action || (
        <>
          <MobileMenuFeature />
          {mobile ? (
            <Box position="absolute" right="30px" top="25px">
              <LangBox hideName language={data} />
            </Box>
          ) : null}
        </>
      )}
      <Container maxW="container.xl">
        <Flex
          mb={{ base: '-40px', lg: '0' }}
          direction={{ base: 'column', lg: 'revert' }}
          p={{ base: '20px 0 0', lg: '15px 0' }}
          align="center"
          justify="center"
        >
          <Link href={ROUTES.HOME} passHref>
            <a>
              <Box mb={{ base: '10px', lg: '0' }}>
                <Image src="/images/common/logo.png" alt="parnian-logo" width="120" height="45px" />
              </Box>
            </a>
          </Link>

          <Social ms={{ base: '0', lg: '50px' }} mb={{ base: '20px', lg: '0' }} />
          <Flex ms={{ base: '0', lg: 'auto' }}>
            {!!aboutUs?.phoneNumber && (
              <Button
                as="a"
                href={`tel:${aboutUs.phoneNumber}`}
                rightIcon={<PhoneIcon />}
                size="sm"
                me="10px"
                colorScheme="brand"
              >
                {aboutUs?.phoneNumber}
              </Button>
            )}
            {/* {aboutUs?.mobileNumber && (
              <Button
                as="a"
                href={`tel:${aboutUs.mobileNumber}`}
                rightIcon={<PhoneIcon />}
                size="sm"
                colorScheme="brand"
              >
                {aboutUs?.mobileNumber}
              </Button>
            )} */}
          </Flex>
        </Flex>
      </Container>
      {!action && (
        <Box
          display={{ lg: 'none' }}
          top="100%"
          bgColor="transparent"
          transform="translateY(98%)"
          h="40px"
          w="100%"
          position="relative"
          zIndex="100"
        >
          <svg
            style={{ position: 'absolute', left: '0', right: '0' }}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="12"
            viewBox="0 0 360 33.95"
            preserveAspectRatio="none"
          >
            <path
              width="100%"
              id="Intersection_1"
              data-name="Intersection 1"
              d="M11,185.478V170H371v15.478S281.458,203.95,191.458,203.95,11,185.478,11,185.478Z"
              transform="translate(-11 -170)"
              fill="#fcfcfc"
            />
          </svg>
        </Box>
      )}
    </Box>
  );
};
