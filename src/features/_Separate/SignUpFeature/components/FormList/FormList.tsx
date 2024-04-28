import { I18_NAMESPACES } from '@/common/constants/Locales';
import { useText } from '@/hooks';
import { Button, Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpFormSchema, VerifyFormSchema } from '../../constants/formSchema';
import { IDTypes, InputsType } from '../../types';
import { SignUpSchema } from '../../Validation';
import FieldBox from './FieldBox/FieldBox';

interface FormListProps {
  onSubmit: SubmitHandler<InputsType>;
  buttonText: string;
  step: number;
  isLoading: boolean;
}

const FormList: FunctionComponent<FormListProps> = ({ onSubmit, buttonText, step, isLoading }) => {
  const t = useText(I18_NAMESPACES.COMMON);
  const { register, handleSubmit, formState } = useForm<InputsType>({
    resolver: yupResolver(SignUpSchema(t)),
  });

  const FormSchemaWithStep = step === 0 ? SignUpFormSchema : VerifyFormSchema;

  return (
    <Flex w="full" direction="column" gap="10px" as="form" onSubmit={handleSubmit(onSubmit)}>
      {FormSchemaWithStep.map(({ id, label, placeHolder, type }) => (
        <FieldBox
          key={id}
          id={id as IDTypes}
          label={t(label)}
          type={type ?? 'text'}
          placeHolder={t(placeHolder)}
          formState={formState}
          register={register}
        />
      ))}
      <Button type="submit" mt={4} colorScheme="brand" w="100%" isLoading={isLoading}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default FormList;
