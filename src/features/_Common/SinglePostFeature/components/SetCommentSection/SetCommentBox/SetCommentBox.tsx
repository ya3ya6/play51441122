import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { Button, Flex, FormControl, FormErrorMessage, Input, Textarea } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useQueryClient } from 'react-query';
import { useText, useToast } from '@/hooks';
import { useAddCommentMutation } from '@/api/services/blog/_mutations';
import { PostCommentAPIArgsType } from '@/api/services/blog/types/comments';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { PostDetailModel } from '../../../types/types';

const CommentSchema = (t: any) =>
  yup
    .object({
      name: yup.string().required(t('fieldRequired', { isCommon: true })),
      email: yup
        .string()
        .email()
        .required(t('fieldRequired', { isCommon: true })),
      message: yup.string().required(t('fieldRequired', { isCommon: true })),
    })
    .required();

interface SetCommentBoxPorpsType {
  post: PostDetailModel;
  replyUser: { id?: number; name: string };
  setReplyUser: Dispatch<SetStateAction<{ id?: number; name: string }>>;
}

export const SetCommentBox: FunctionComponent<SetCommentBoxPorpsType> = ({
  post,
  replyUser,
  setReplyUser,
}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useAddCommentMutation(queryClient, post.slug);
  const { successToast, errorToast } = useToast();
  const t = useText(I18_NAMESPACES.SINGLE);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostCommentAPIArgsType>({
    resolver: yupResolver(CommentSchema(t)),
  });

  const onSubmit: SubmitHandler<PostCommentAPIArgsType> = data => {
    mutate(
      { ...data, parent_id: replyUser.id as number, postSlug: post.slug },
      {
        onSuccess() {
          successToast(t('comments.successfullyMessage'));
          setValue('name', '');
          setValue('email', '');
          setValue('message', '');
        },
        onError() {
          errorToast(t('comments.errorMessage'));
        },
      },
    );
  };

  const cancellReply = () => {
    setReplyUser({
      name: '',
    });
  };

  return (
    <Flex w={{ base: '100%', lg: '60%' }} m="0 auto" direction="column" style={{ gap: '20px' }}>
      <FormControl isRequired isInvalid={errors.name as boolean | undefined}>
        <Input
          {...register('name')}
          bgColor="white"
          h="45px"
          placeholder={t('comments.fullName')}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors.email as boolean | undefined}>
        <Input {...register('email')} bgColor="white" h="45px" placeholder={t('comments.email')} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors.message as boolean | undefined}>
        <Textarea
          {...register('message')}
          bgColor="white"
          h="250"
          placeholder={t('comments.text')}
        />
        <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
      </FormControl>
      <Flex gap="20px">
        <Button onClick={handleSubmit(onSubmit)} rounded="full" w="160px" colorScheme="brand">
          {replyUser.id ? t('comments.buttonReply') : t('comments.button')}
        </Button>
        {replyUser.id && (
          <Button
            isLoading={isLoading}
            onClick={cancellReply}
            rounded="full"
            w="160px"
            colorScheme="brand"
          >
            {t('comments.cancel', { isCommon: true })}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
