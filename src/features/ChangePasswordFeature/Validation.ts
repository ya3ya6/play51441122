import * as yup from 'yup';

export const passwordSchema = (t: any) =>
  yup
    .object({
      new_password1: yup
        .string()
        .required(t('fieldRequired'))
        .min(12, t('validation.password.min')),
      new_password2: yup
        .string()
        .required(t('fieldRequired'))
        .min(12, t('validation.password.min'))
        .oneOf([yup.ref('new_password1'), null], t('validation.confirm')),
    })
    .required();
