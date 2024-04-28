import { BaseErrorReposnseType } from '@/api/common/types/baseResponseType';
import { useRequestOTPMutation } from '@/api/services/auth';
import { PostRequestOTPAPIArgsType } from '@/api/services/auth/types/otp';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText, useToast } from '@/hooks';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { AxiosError } from 'axios';

export const RequestOTPStep = ({
  phoneNumber,
  setPhoneNumber,
  nextStep,
}: {
  phoneNumber: string;
  nextStep: () => void;
  setPhoneNumber: (number: string) => void;
}) => {
  const { errorToast } = useToast();
  const mutate = useRequestOTPMutation();
  const t = useText(I18_NAMESPACES.PROFILE);
  const handleSubmitOTP = () => {
    mutate.mutate(
      { phone_number: phoneNumber },
      {
        onSuccess: () => {
          nextStep();
        },
        // @ts-ignore
        onError: (data: AxiosError<BaseErrorReposnseType<PostRequestOTPAPIArgsType>>) => {
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
    <VStack w="100%" align="flex-start" justifyItems="center" spacing={6}>
      <FormControl>
        <FormLabel>{t('info.form.mobilePhone')}</FormLabel>
        <Input
          isReadOnly={mutate.isLoading}
          placeholder="09112223333"
          value={phoneNumber}
          onChange={(event: any) => setPhoneNumber(event.target.value)}
        />
      </FormControl>
      <Button
        onClick={handleSubmitOTP}
        disabled={mutate.isLoading || phoneNumber.length < 11}
        isLoading={mutate.isLoading}
        colorScheme="brand"
        mt="8"
      >
        {t('info.form.button.requestCode')}
      </Button>
    </VStack>
  );
};
