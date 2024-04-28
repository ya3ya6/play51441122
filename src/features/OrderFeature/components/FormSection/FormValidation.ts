import * as yup from 'yup';

export const OrderSchema = (t: any) =>
  yup
    .object({
      full_name: yup.string().required(t('fieldRequired', { isCommon: true })),
      phone_number: yup.string().required(t('fieldRequired', { isCommon: true })),
      mobile_number: yup.string().required(t('fieldRequired', { isCommon: true })),
      company: yup.string().required(t('fieldRequired', { isCommon: true })),
      city: yup.string().required(t('fieldRequired', { isCommon: true })),
      address: yup.string().required(t('fieldRequired', { isCommon: true })),
    })
    .required();
