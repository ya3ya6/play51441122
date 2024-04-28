import { useMutation, QueryClient } from 'react-query';
import { useCommentsQuery } from './_queries';
import { BlogServiceFetcher } from './_restApi';

export const useAddCommentMutation = (queryClient: QueryClient, postSlug: string) =>
  useMutation(BlogServiceFetcher.postCommentAPI, {
    onSuccess: () => useCommentsQuery.invalidate({ queryClient }, { slug: postSlug }),
  });
