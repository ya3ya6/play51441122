import { Box, Flex, Heading } from '@chakra-ui/react';
import { QuoteIcon } from '@/common/icons';
import { Dispatch, FunctionComponent, LegacyRef, SetStateAction } from 'react';
import { useCommentsQuery } from '@/api/services/blog/_queries';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { GetCommentList } from './GetCommentList/GetCommentList';
import { PostDetailModel } from '../../types/types';

interface GetCommentSectionPropsType {
  post: PostDetailModel;
  replyUser: { id?: number; name: string };
  setReplyUser: Dispatch<SetStateAction<{ id?: number; name: string }>>;
  commentRef: LegacyRef<HTMLDivElement>;
}

export const GetCommentSection: FunctionComponent<GetCommentSectionPropsType> = ({
  post,
  replyUser,
  commentRef,
  setReplyUser,
}) => {
  const { data: comments } = useCommentsQuery({ slug: post.slug });
  const t = useText(I18_NAMESPACES.SINGLE);
  if (!comments?.length) {
    return null;
  }

  return (
    <>
      <Flex my="50px" w="100%" align="center" justify="center" gap="10px">
        <Box color="GrayText" transform="rotate(180deg)" fontSize="xl" ml="20px">
          <QuoteIcon />
        </Box>
        <Heading color="#2089AF" textAlign="center" size="lg">
          {t('comments.getTitle')}
        </Heading>
        <Box color="GrayText" fontSize="xl" mr="20px">
          <QuoteIcon />
        </Box>
      </Flex>

      <Flex style={{ gap: '25px' }} direction="column">
        <GetCommentList
          post={post}
          comments={comments}
          setReplyUser={setReplyUser}
          replyUser={replyUser}
          commentRef={commentRef}
        />
      </Flex>
    </>
  );
};
