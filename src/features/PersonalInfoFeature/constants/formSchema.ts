import { PatchUserAPIArgsType } from '@/api/services/auth/types';

export const editProfileSchema: Record<
  keyof PatchUserAPIArgsType,
  {
    id: keyof PatchUserAPIArgsType;
    label: string;
    placeHolder?: string;
    isReadOnly?: boolean;
    isRequired?: boolean;
  }
> = {
  first_name: {
    id: 'first_name',
    label: 'info.form.fName',
    placeHolder: 'info.form.fName',
    isRequired: true,
  },
  last_name: {
    id: 'last_name',
    label: 'info.form.lName',
    placeHolder: 'info.form.lName',
    isRequired: true,
  },
  email: {
    id: 'email',
    label: 'info.form.email',
    placeHolder: 'info.form.email',
    isReadOnly: true,
  },
  gender: {
    id: 'gender',
    label: 'info.form.gender.label',
    placeHolder: 'info.form.gender.label',
  },
  company_name: {
    id: 'company_name',
    label: 'info.form.company',
    placeHolder: 'info.form.company',
  },
  code_meli: {
    id: 'code_meli',
    label: 'info.form.nationalCode',
    placeHolder: 'info.form.nationalCode',
  },
  address: {
    id: 'address',
    label: 'info.form.address',
    placeHolder: 'info.form.address',
  },
  phone_number: {
    id: 'phone_number',
    label: 'info.form.mobilePhone',
    placeHolder: 'info.form.mobilePhone',
    isReadOnly: true,
  },
  telephone: {
    id: 'telephone',
    label: 'info.form.tell',
    placeHolder: 'info.form.tell',
  },
  country: {
    id: 'country',
    label: 'info.form.country',
    placeHolder: 'info.form.country',
  },
};
