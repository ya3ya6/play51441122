import { Container, Flex, Heading } from '@chakra-ui/react';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { FunctionComponent } from 'react';
import { Bolet } from '@/common/components/Design';
import { ButtonWithIcon } from '@/common/components/Element';
import Link from 'next/link';

interface HeadingProps {
  title: string;
  href?: string;
}

export const HomeHeading: FunctionComponent<HeadingProps> = ({ title, href }) => {
  const t = useText(I18_NAMESPACES.HOME);
  // Any ???
  const helperObject: any = {
    'About us': { title: t('about.title'), button: null },
    'Our News': { title: t('news.title'), button: t('news.button') },
    'Customers comments': { title: t('comments.title'), button: null },
    'Latest Articles ': { title: t('articles.title'), button: t('articles.button') },
    'Our products': { title: t('products.title'), button: t('products.button') },
  };

  return (
    <Container mb={{ base: '20px', xl: '30px' }} maxW="container.xl">
      <Flex w="100%" position="relative" justify="center" align="center" direction="column">
        <Heading
          w="100%"
          color="rgb(31, 190, 220,0.12)"
          fontSize={{ base: '3xl', md: '4xl' }}
          textAlign={{ base: 'center', md: 'revert' }}
          position={{ base: 'static', md: 'absolute' }}
          as="h2"
        >
          {title}
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '20px' }}
          w="100%"
          align="center"
          justify="space-between"
        >
          <Flex mt={{ base: '0px', md: '80px' }} align="center">
            <Bolet />
            <Heading color="gray.700" size="lg" as="h2">
              {helperObject[title].title}
            </Heading>
          </Flex>
          {helperObject[title].button && href && (
            <Link href={href} passHref>
              <ButtonWithIcon
                display={{ base: 'none', lg: 'flex' }}
                iconPosition="right"
                color="#379EC8"
                gap="5px"
                mt="auto"
                mb="10px"
                variant="link"
                zIndex="500"
                as="a"
              >
                {helperObject[title].button}
              </ButtonWithIcon>
            </Link>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};
