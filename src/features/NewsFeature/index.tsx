import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { NewsSection, VideosSection, LatestNewsSection } from '@/common/components/Section';
import { usePostsQuery } from '@/api/services/blog/_queries';
import ROUTES from '@/routers';
import { useRouter } from 'next/router';
import { numberOrDefault } from '@/utils/helpers';
import { NewsLetter } from '../_Common';

interface NewsFeatureProps {}

export const NewsFeature: FunctionComponent<NewsFeatureProps> = () => {
  const { data: videoPosts } = usePostsQuery({
    contentType: 'V',
    type: 'N',
    pageSize: 7,
  });

  const { data: selectedPosts } = usePostsQuery({
    isVip: true,
    type: 'N',
    pageSize: 4,
  });

  const router = useRouter();
  const currentPage = numberOrDefault(router.query.page, 1);
  const pageSize = numberOrDefault(router.query.pageSize, 12);
  const { data: latestPosts } = usePostsQuery({
    pageSize,
    type: 'N',
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

  const videoPostsWithLink =
    videoPosts?.results.map(videoPost => ({
      ...videoPost,
      link: ROUTES.NEWS.POST(videoPost.slug),
    })) ?? [];

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
    <Box my="75px">
      <VideosSection my="100px" videos={videoPostsWithLink} />
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
