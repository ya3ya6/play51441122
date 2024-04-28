import { BaseErrorReposnseType } from '@/api/common/types/baseResponseType';
import { useVerifyOTPMutation } from '@/api/services/auth';
import { PostVerifyOTPAPIArgsType } from '@/api/services/auth/types/otp';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText, useToast } from '@/hooks';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useQueryClient } from 'react-query';

export const VerifyOTP = ({ phoneNumber, close }: { phoneNumber: string; close: () => void }) => {
  const { errorToast, successToast } = useToast();
  const queryClient = useQueryClient();
  const mutate = useVerifyOTPMutation(queryClient);
  const [otp, setOTP] = useState('');
  const t = useText(I18_NAMESPACES.PROFILE);
  const handleSubmitOTP = () => {
    mutate.mutate(
      { phone_number: phoneNumber, otp },
      {
        onSuccess: () => {
          successToast(t('info.message.doneCode'));
          close();
        },
        // @ts-ignore
        onError: (data: AxiosError<BaseErrorReposnseType<PostVerifyOTPAPIArgsType>>) => {
          Object.entries(data.response?.data ?? {}).forEach(([name, errors]) => {
            errors.forEach(err => {
              errorToast(err);
            });
          });
        },
      },
    );
  };

  return (
    <VStack align="flex-start" justifyItems="center" spacing={6}>
      <FormControl>
        <FormLabel>{t('info.form.verificationCode')}</FormLabel>
        <Input
          isReadOnly={mutate.isLoading}
          placeholder="123456"
          value={otp}
          onChange={(event: any) => setOTP(event.target.value)}
        />
      </FormControl>
      <Button
        onClick={handleSubmitOTP}
        disabled={mutate.isLoading || otp.length < 6}
        isLoading={mutate.isLoading}
        colorScheme="brand"
        mt="8"
      >
        {t('info.form.button.done')}
      </Button>
    </VStack>
  );
};
