import { PostPasswordResetConfirmAPIArgsType } from '@/api/services/auth/types/password';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

interface FieldBoxProps {
  id: keyof PostPasswordResetConfirmAPIArgsType;
  label: string;
  placeHolder: string;
  type: string;
  register: UseFormRegister<PostPasswordResetConfirmAPIArgsType>;
  formState: FormState<PostPasswordResetConfirmAPIArgsType>;
}

const FieldBox: FunctionComponent<FieldBoxProps> = ({
  id,
  label,
  placeHolder,
  type,
  register,
  formState: { errors },
}) => {
  return (
    <FormControl isInvalid={errors[id] as boolean | undefined}>
      <FormLabel textAlign="start" htmlFor="email">
        {label}
      </FormLabel>
      <Input type={type} textAlign="start" id={id} placeholder={placeHolder} {...register(id)} />
      <FormErrorMessage>{errors[id] && errors[id]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FieldBox;
