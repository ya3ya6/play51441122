import { PatchUserAPIArgsType } from '@/api/services/auth/types';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

export interface FieldBoxProps {
  field: {
    id: keyof PatchUserAPIArgsType;
    label: string;
    placeHolder?: string;
    isReadOnly?: boolean;
    isRequired?: boolean;
  };
  register: UseFormRegister<PatchUserAPIArgsType>;
  formState: FormState<PatchUserAPIArgsType>;
}

const FieldBox: FunctionComponent<FieldBoxProps> = ({
  field: { id, label, placeHolder = '', isReadOnly = false, isRequired = false },
  register,
  formState: { errors },
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={errors[id] as boolean | undefined}>
      <FormLabel textAlign="left" htmlFor="email">
        {label}
      </FormLabel>
      <Input id={id} isReadOnly={isReadOnly} placeholder={placeHolder} {...register(id)} />
      <FormErrorMessage>{errors[id] && errors[id]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FieldBox;
