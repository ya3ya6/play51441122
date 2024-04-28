import { usePostsQuery } from '@/api/services/blog/_queries';
import { useMagHeaderPostsQuery } from '@/api/services/overview/_queries';
import {
  ArticlesSection,
  WebinarSection,
  TutorialVideosSection,
  MagViewedSection,
} from '@/common/components/Section';
import ROUTES from '@/routers';
import { numberOrDefault } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { NewsLetter } from '../_Common';

export const MagFeature: FunctionComponent = () => {
  const { data: headerPosts } = useMagHeaderPostsQuery(null);

  const { data: tutorialPosts } = usePostsQuery({
    type: 'M',
    contentType: 'V',
    pageSize: 8,
  });

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

  const tutorialPostsWithLink =
    tutorialPosts?.results.map(tutorialPost => ({
      ...tutorialPost,
      link: ROUTES.MAG.POST(tutorialPost.slug),
    })) ?? [];

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
    <Box>
      <MagViewedSection posts={headerPosts ?? []} />
      <TutorialVideosSection posts={tutorialPostsWithLink} />
      <WebinarSection posts={webinarsWithLink} />
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
