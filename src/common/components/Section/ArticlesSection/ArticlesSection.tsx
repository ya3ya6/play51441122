import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { FilterAndSearchBox, Pagination } from '@/common/components/Box';
import { CurveBottom, CurveTop } from '@/common/components/Design';
import { useRouter } from 'next/router';
import { ArticlesList } from './ArticlesList/ArticlesList';
import { PostModel } from '../types';

interface Props {
  currentPage: number;
  setPage: (page: number) => void;
  totalPages: number;
  posts: PostModel[];
  title: string;
  description: string;
}

/**
 * ### Common Component SECTION.
 */
export const ArticlesSection: FunctionComponent<Props> = ({
  currentPage,
  posts,
  setPage,
  totalPages,
  title,
  description,
}) => {
  const t = useText(I18_NAMESPACES.MAG);
  const router = useRouter();

  const nextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const searchChangeHandler = (value: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ordering: router.query.ordering,
          name: value,
        },
      },
      undefined,
      { scroll: false },
    );
  };

  const filterChangeHandler = (value?: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          ordering: value,
        },
      },
      undefined,
      { scroll: false },
    );
  };

  return (
    <Stack mt="100px" spacing="20px">
      <Box>
        <Box>
          <Flex id="allPost" mb={{ base: '40px', lg: '-50px' }} w="100%" direction="column">
            <Flex w="100%" align="center" justify="center">
              <Heading color="#1f87ad" as="h1" size="lg" mx="50px" px="20px" flexShrink={0}>
                {t(title)}
              </Heading>
            </Flex>
            <Text textAlign="center">{t(description)}</Text>
          </Flex>
          <CurveTop display={{ base: 'none', lg: 'block' }} />
        </Box>
        <Box py={{ base: '40px', lg: '0' }} zIndex="5" w="100%" bgColor="gray.100">
          <FilterAndSearchBox
            onChangeSearch={searchChangeHandler}
            onChangeFilter={filterChangeHandler}
            mb="25px"
          />
          <ArticlesList posts={posts} />
        </Box>
        <Box>
          <CurveBottom display={{ base: 'none', lg: 'block' }} />
          <Pagination
            mt={{ base: '40px', lg: '-50px' }}
            nextPage={nextPage}
            prevPage={prevPage}
            totalPages={totalPages}
            currentPage={currentPage}
            setPage={setPage}
          />
        </Box>
      </Box>
    </Stack>
  );
};
