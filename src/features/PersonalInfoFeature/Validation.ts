import * as yup from 'yup';

export const SignUpSchema = (t: any) => {
  return yup
    .object({
      first_name: yup.string().required(t('fieldRequired', { isCommon: true })),
      last_name: yup.string().required(t('fieldRequired', { isCommon: true })),
      code_meli: yup.string(),
      country: yup.string().required(t('fieldRequired', { isCommon: true })),
      address: yup.string(),
      company_name: yup.string(),
      telephone: yup.string(),
    })
    .required();
};
