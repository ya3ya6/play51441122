import { usePostsQuery } from '@/api/services/blog/_queries';
import { LatestNewsSection, NewsSection } from '@/common/components/Section';
import ROUTES from '@/routers';
import { numberOrDefault } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { NewsLetter } from '../_Common';

interface NewsTextFeatureProps {}

export const NewsTextFeature: FunctionComponent<NewsTextFeatureProps> = () => {
  const { data: selectedPosts } = usePostsQuery({
    isVip: true,
    pageSize: 4,
    type: 'N',
    contentType: 'T',
  });

  const router = useRouter();
  const currentPage = numberOrDefault(router.query.page, 1);
  const pageSize = numberOrDefault(router.query.pageSize, 12);

  const setPage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page,
      },
    });
  };

  const { data: latestPosts } = usePostsQuery({
    pageSize,
    contentType: 'T',
    type: 'N',
    page: currentPage,
    name: router.query.name as string,
    ordering: router.query.ordering as string,
  });

  const selectedPostsWithLink =
    selectedPosts?.results.map(selectedPost => ({
      ...selectedPost,
      link: ROUTES.NEWS.POST(selectedPost.slug),
    })) ?? [];

  const latestPostsWithLink =
    latestPosts?.results.map(latestPost => ({
      ...latestPost,
      link: ROUTES.NEWS.POST(latestPost.slug),
    })) ?? [];

  return (
    <Box>
      <LatestNewsSection posts={selectedPostsWithLink} />
      <NewsSection
        title="title"
        text="description"
        currentPage={currentPage}
        totalPages={numberOrDefault(latestPosts?.count, 0) / pageSize}
        posts={latestPostsWithLink}
        setPage={setPage}
      />
      <NewsLetter mt="140px" mb="100px" />
    </Box>
  );
};
