import * as yup from 'yup';

export const SignUpSchema = (t: any) =>
  yup
    .object({
      email: yup.string().email(t('validation.email')).required(t('fieldRequired')),
      password: yup.string().required(t('fieldRequired')).min(12, t('validation.password.min')),
      confermPassword: yup
        .string()
        .required(t('fieldRequired'))
        .min(12, t('validation.password.min'))
        .oneOf([yup.ref('password'), null], t('validation.confirm')),
    })
    .required();
