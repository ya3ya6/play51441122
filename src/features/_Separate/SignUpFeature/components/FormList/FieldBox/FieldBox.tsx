import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { IDTypes, InputsType } from '../../../types';

interface FieldBoxProps {
  id: IDTypes;
  label: string;
  placeHolder: string;
  type: string;
  register: UseFormRegister<InputsType>;
  formState: FormState<InputsType>;
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
      <FormLabel textAlign="left" htmlFor="email">
        {label}
      </FormLabel>
      <Input type={type} id={id} placeholder={placeHolder} {...register(id)} />
      <FormErrorMessage>{errors[id] && errors[id]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FieldBox;
