import * as yup from 'yup';

export const LoginSchema = (t: any) =>
  yup
    .object({
      email: yup
        .string()
        .email(t('validation.email', { isCommon: true }))
        .required(t('fieldRequired', { isCommon: true })),
    })
    .required();
