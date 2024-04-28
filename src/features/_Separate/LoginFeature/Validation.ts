import * as yup from 'yup';

export const LoginSchema = (t: any) =>
  yup
    .object({
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('fieldRequired', { isCommon: true })),
      password: yup.string().required(t('fieldRequired', { isCommon: true })),
    })
    .required();
