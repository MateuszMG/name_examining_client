import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useLazyGenderizeQuery } from '../../redux/api/genderize';
import { useLazyNationalizeQuery } from '../../redux/api/nationalize';

export const useHome = () => {
  const [genderize, { data: genderizeData, isLoading: genderizeLoaading }] =
    useLazyGenderizeQuery();
  const [
    nationalize,
    { data: nationalizeData, isLoading: nationalizeLoaading },
  ] = useLazyNationalizeQuery();

  const loading = genderizeLoaading || nationalizeLoaading;

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<NameSchema>({
    mode: 'onChange',
    resolver: yupResolver(nameValidation),
    defaultValues: {
      name: 'eryk',
    },
  });

  const onReset = () => reset({ name: '' });

  const onSubmit = handleSubmit((formData) => {
    genderize(formData.name);
    nationalize(formData.name);
  });

  return {
    errors,
    genderizeData,
    isValid,
    loading,
    nationalizeData,
    onReset,
    onSubmit,
    register,
  };
};

const nameValidation = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim('Name cannot contain leading and trailing spaces')
    .strict(true)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.',
    ),
});

type NameSchema = yup.InferType<typeof nameValidation>;
