import { I18_NAMESPACES } from '@/common/constants/Locales';
import { CommentModel } from '@/features/_Common/SinglePostFeature/types';
import { PostDetailModel } from '@/features/_Common/SinglePostFeature/types/types';
import { useText } from '@/hooks';
import { useDate } from '@/utils/helpers';
import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface GetCommentBoxProps {
  post: PostDetailModel;
  comment: CommentModel;
  comments: CommentModel[];
  commentRef: any;
  replyUser: { id?: number; name: string };
  setReplyUser: Dispatch<SetStateAction<{ id?: number; name: string }>>;
}

const GetCommentBox = ({
  comment,
  comments,
  post,
  commentRef,
  setReplyUser,
  replyUser,
}: GetCommentBoxProps) => {
  const { date } = useDate();
  const scrollToElement = () => {
    commentRef?.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };
  const t = useText(I18_NAMESPACES.COMMON);
  const toggleOpenReply = (name: string, id?: number) => {
    scrollToElement();
    if (id && id === comment.id) {
      setReplyUser({
        id: Number(id),
        name,
      });
    } else {
      setReplyUser({
        name: '',
      });
    }
  };

  return (
    <Box position="relative" w="100%">
      <Flex
        w="100%"
        direction="column"
        bgColor={Number.isInteger(comment.parentId) ? '#f1f1f1' : 'white'}
        position="relative"
        padding="40px 20px"
        rounded="3xl"
        pt="40px"
      >
        <Box
          position="absolute"
          p="5px"
          top="0"
          transform="translateY(-50%)"
          bgColor="#f7f7f7"
          rounded="full"
        >
          <Avatar size="md" name={comment.name} />
        </Box>
        <Flex w="100%" justify="space-between" align="flex-start">
          <Heading mb="20px" size="sm">
            {comment.name}
          </Heading>
          <Text color="gray.400" ml="auto" mt="-24px">
            {date(comment.createdAt)}
          </Text>
          <Button
            size="xs"
            mt="-24px"
            ml={4}
            variant="link"
            onClick={() => toggleOpenReply(comment.name, comment.id)}
          >
            {replyUser.id === comment.id
              ? t('comments.cancel', { isCommon: true })
              : t('comments.reply', { isCommon: true })}
          </Button>
        </Flex>
        <Text color="gray.500">{comment.message}</Text>
      </Flex>
      <Flex direction="column" maxW="100%" mt="20px" ms="50px">
        {comments
          .filter(c => c.parentId === comment.id)
          .map(c => (
            <GetCommentBox
              key={c.id}
              commentRef={commentRef}
              post={post}
              comment={c}
              comments={comments}
              setReplyUser={setReplyUser}
              replyUser={replyUser}
            />
          ))}
      </Flex>
    </Box>
  );
};

export default GetCommentBox;
