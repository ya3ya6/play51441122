import { Box, Container, Stack } from '@chakra-ui/react';
import { FunctionComponent, ComponentProps } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { CustomHeading, FilterAndSearchBox, Pagination } from '@/common/components/Box';
import { useRouter } from 'next/router';
import { NewsList } from './NewsList/NewsList';
/**
 * ### Common Component SECTION.
 */
interface NewsSectionProps {
  title: string;
  text: string;
  currentPage: number;
  setPage: (page: number) => void;
  totalPages: number;
  posts: ComponentProps<typeof NewsList>['posts'];
}
export const NewsSection: FunctionComponent<NewsSectionProps> = ({
  title,
  text,
  currentPage,
  posts,
  setPage,
  totalPages,
}) => {
  const t = useText(I18_NAMESPACES.NEWS);
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
    <Box
      mx="auto"
      w="100%"
      bgPos="center"
      bgSize="cover"
      bgImage="url(/images/news/newsPattern.svg)"
    >
      <Container maxW="container.xl">
        <Box mb="20px" id="allPost">
          <CustomHeading title={t(`allNews.${title}`)} text={t(`allNews.${text}`)} />
        </Box>
        <Stack spacing="20px">
          <FilterAndSearchBox
            onChangeSearch={searchChangeHandler}
            onChangeFilter={filterChangeHandler}
          />
          <NewsList posts={posts} />
        </Stack>
        <Box mt="140px">
          <Pagination
            nextPage={nextPage}
            prevPage={prevPage}
            totalPages={totalPages}
            currentPage={currentPage}
            setPage={setPage}
          />
        </Box>
      </Container>
    </Box>
  );
};
