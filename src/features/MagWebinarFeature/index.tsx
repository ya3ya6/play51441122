import { usePostsQuery } from '@/api/services/blog/_queries';
import { ArticlesSection, WebinarSection } from '@/common/components/Section';
import ROUTES from '@/routers';
import { numberOrDefault } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { NewsLetter } from '../_Common';

export const MagWebinarFeature: FunctionComponent = () => {
  const { data: webinars } = usePostsQuery({
    type: 'M',
    contentType: 'C',
    pageSize: 8,
  });

  const router = useRouter();
  const currentPage = numberOrDefault(router.query.page, 1);
  const pageSize = numberOrDefault(router.query.pageSize, 12);
  const { data: latestPosts } = usePostsQuery({
    pageSize,
    type: 'M',
    contentType: 'C',
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

  const webinarsWithLink =
    webinars?.results.map(webinar => ({
      ...webinar,
      link: ROUTES.MAG.POST(webinar.slug),
    })) ?? [];

  const latestPostsWithLink =
    latestPosts?.results.map(latestPost => ({
      ...latestPost,
      link: ROUTES.MAG.POST(latestPost.slug),
    })) ?? [];

  return (
    <Box mb="100px">
      <WebinarSection mt="80px" mb="150px" posts={webinarsWithLink} />
      <NewsLetter mb="180px" />
      <ArticlesSection
        title="articles.conferenceTitle"
        description="articles.conferenceDescription"
        currentPage={currentPage}
        totalPages={numberOrDefault(latestPosts?.count, 0) / pageSize}
        posts={latestPostsWithLink}
        setPage={setPage}
      />
    </Box>
  );
};
