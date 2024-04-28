import { useText } from '@/hooks';
import { Button, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormSchema } from '../../constants/formSchema';
import { IDTypes, InputsType } from '../../types';
import { LoginSchema } from '../../Validation';
import FieldBox from './FieldBox/FieldBox';

interface FormListProps {
  onSubmit: SubmitHandler<InputsType>;
  buttonText: string;
  isLoading: boolean;
}

const FormList: FunctionComponent<FormListProps> = ({ onSubmit, buttonText, isLoading }) => {
  const t = useText();
  const { register, handleSubmit, formState } = useForm<InputsType>({
    resolver: yupResolver(LoginSchema(t)),
  });

  return (
    <Stack w="full" spacing="10px" as="form" onSubmit={handleSubmit(onSubmit)}>
      {FormSchema.map(({ id, label, placeHolder, type }) => (
        <FieldBox
          key={id}
          id={id as IDTypes}
          type={type}
          label={t(label)}
          placeHolder={placeHolder}
          formState={formState}
          register={register}
        />
      ))}
      <Button type="submit" mt={4} colorScheme="brand" w="100%" isLoading={isLoading}>
        {buttonText}
      </Button>
    </Stack>
  );
};

export default FormList;
