import { usePostsQuery } from '@/api/services/blog/_queries';
import { useMagHeaderPostsQuery } from '@/api/services/overview/_queries';
import { ArticlesSection, MagViewedSection } from '@/common/components/Section';
import ROUTES from '@/routers';
import { numberOrDefault } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { NewsLetter } from '../_Common';

interface MagArticleFeatureProps {}

export const MagArticleFeature: FunctionComponent<MagArticleFeatureProps> = () => {
  const { data: headerPosts } = useMagHeaderPostsQuery(null);

  const router = useRouter();
  const currentPage = numberOrDefault(router.query.page, 1);
  const pageSize = numberOrDefault(router.query.pageSize, 12);
  const { data: latestPosts } = usePostsQuery({
    pageSize,
    type: 'M',
    contentType: 'T',
    page: currentPage,
    name: router.query.name as string,
    ordering: router.query.ordering as string,
  });

  const setPage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page,
      },
    });
  };

  const latestPostsWithLink =
    latestPosts?.results.map(latestPost => ({
      ...latestPost,
      link: ROUTES.MAG.POST(latestPost.slug),
    })) ?? [];

  return (
    <Box mb="100px">
      <MagViewedSection posts={headerPosts ?? []} />
      <ArticlesSection
        title="articles.title"
        description="articles.description"
        currentPage={currentPage}
        totalPages={numberOrDefault(latestPosts?.count, 0) / pageSize}
        posts={latestPostsWithLink}
        setPage={setPage}
      />
      <NewsLetter mt="150px" mb="100px" />
    </Box>
  );
};
