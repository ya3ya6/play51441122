import { NewsSection, VideosSection } from '@/common/components/Section';
import ROUTES from '@/routers';
import { numberOrDefault } from '@/utils/helpers';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { usePostsQuery } from '../../api/services/blog/_queries';
import { NewsLetter } from '../_Common';

interface NewsVideoFeatureProps {}

export const NewsVideoFeature: FunctionComponent<NewsVideoFeatureProps> = () => {
  const { data: videoPosts } = usePostsQuery({
    contentType: 'V',
    type: 'N',
    pageSize: 7,
  });

  const router = useRouter();
  const currentPage = numberOrDefault(router.query.page, 1);
  const pageSize = numberOrDefault(router.query.pageSize, 12);
  const { data: latestPosts } = usePostsQuery({
    contentType: 'V',
    type: 'N',
    pageSize,
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

  const latestPostsWithLink =
    latestPosts?.results.map(latestPost => ({
      ...latestPost,
      link: ROUTES.NEWS.POST(latestPost.slug),
    })) ?? [];

  return (
    <Box>
      <VideosSection mt="80px" videos={videoPostsWithLink} />
      <NewsLetter my="80px" />
      <NewsSection
        title="videoTitle"
        text="videoDescription"
        currentPage={currentPage}
        totalPages={numberOrDefault(latestPosts?.count, 0) / pageSize}
        posts={latestPostsWithLink}
        setPage={setPage}
      />
    </Box>
  );
};
