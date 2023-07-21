import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { genderize } from '../../redux/genderize/genderizeActions';
import { nationalize } from '../../redux/nationalize/nationalizeActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const {
    genderized: { loading: genderizeLoaading, genderized },
    nationalized: { loading: nationalizeLoaading, nationalized },
  } = useAppSelector();

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

  const onSubmit = handleSubmit((data) => {
    dispatch(genderize(data.name));
    dispatch(nationalize(data.name));
  });

  return {
    errors,
    genderized,
    isValid,
    loading,
    nationalized,
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
