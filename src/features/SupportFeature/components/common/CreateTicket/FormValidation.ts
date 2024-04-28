import * as yup from 'yup';

export const TicketSchema = (t: any) =>
  yup
    .object({
      title: yup.string().required(t('fieldRequired', { isCommon: true })),
      message: yup.string().required(t('fieldRequired', { isCommon: true })),
      file: yup.mixed(),
    })
    .required();

export const MessageSchema = (t: any) =>
  yup
    .object({
      message: yup.string().required(t('fieldRequired', { isCommon: true })),
      file: yup.mixed(),
    })
    .required();
