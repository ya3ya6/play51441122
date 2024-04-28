import { usePostsQuery } from '@/api/services/blog/_queries';
import { ArticlesSection, TutorialVideosSection } from '@/common/components/Section';
import ROUTES from '@/routers';
import { numberOrDefault } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { NewsLetter } from '../_Common';

interface MagTutorialVideoFeatureProps {}

export const MagTutorialVideoFeature: FunctionComponent<MagTutorialVideoFeatureProps> = () => {
  const { data: tutorialPosts } = usePostsQuery({
    type: 'M',
    contentType: 'V',
    pageSize: 6,
    ordering: '-views',
  });

  const router = useRouter();
  const currentPage = numberOrDefault(router.query.page, 1);
  const pageSize = numberOrDefault(router.query.pageSize, 12);
  const { data: latestPosts } = usePostsQuery({
    pageSize,
    type: 'M',
    contentType: 'V',
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

  const latestPostsWithLink =
    latestPosts?.results.map(latestPost => ({
      ...latestPost,
      link: ROUTES.MAG.POST(latestPost.slug),
    })) ?? [];

  return (
    <Box mb="100px">
      <TutorialVideosSection posts={tutorialPostsWithLink} mt="80px" mb="150px" />
      <NewsLetter mb="180px" />
      <ArticlesSection
        title="articles.tutorialTitle"
        description="articles.tutorialDescription"
        currentPage={currentPage}
        totalPages={numberOrDefault(latestPosts?.count, 0) / pageSize}
        posts={latestPostsWithLink}
        setPage={setPage}
      />
    </Box>
  );
};
