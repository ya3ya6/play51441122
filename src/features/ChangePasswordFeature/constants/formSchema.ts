import { PostPasswordResetConfirmAPIArgsType } from '@/api/services/auth/types/password';

export const FormSchema = [
  {
    id: 'new_password1' as keyof PostPasswordResetConfirmAPIArgsType,
    label: 'forgetPassword.two.newPassword',
    placeHolder: 'forgetPassword.two.newPassword',
    type: 'password',
  },
  {
    id: 'new_password2' as keyof PostPasswordResetConfirmAPIArgsType,
    label: 'forgetPassword.two.newPassword',
    placeHolder: 'forgetPassword.two.repeat',
    type: 'password',
  },
];
