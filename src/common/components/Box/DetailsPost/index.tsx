import { Flex, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useText } from '@/hooks';
import Link from 'next/link';
import { ClockIcon, CommentIcon1 } from '@/common/icons';
import { useDate } from '@/utils/helpers';
import { ButtonWithIcon } from '../../Element';
import { PostModel } from '../../Section/types';

interface DetailsPostProps {
  post: PostModel;
}
/**
 * ### Common Component BOX.
 */
export const DetailsPost: FunctionComponent<DetailsPostProps> = ({ post }) => {
  const { date } = useDate();
  const t = useText();
  return (
    <Flex w="100%">
      <Link passHref href={post.link}>
        <ButtonWithIcon
          as="a"
          iconPosition="right"
          gap="5px"
          flexDirection="row"
          variant="ghost"
          colorScheme="blue"
        >
          {t('readMore', { isCommon: true })}
        </ButtonWithIcon>
      </Link>
      <Stack spacing="20px" ms="auto" direction="row">
        <HStack>
          <Icon fontSize="lg" aria-label="Button" as={ClockIcon} />
          <Text>{date(post.createdAt)}</Text>
        </HStack>
        <HStack>
          <Icon fontSize="lg" aria-label="Button" as={CommentIcon1} />
          <Text> {post.commentsCount}</Text>
        </HStack>
      </Stack>
    </Flex>
  );
};
