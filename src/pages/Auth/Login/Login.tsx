import { Navigate } from 'react-router-dom';

import { Button } from '../../../components/global/Button/Button';
import { Form } from '../../../components/global/Form/Form';
import { TextInput } from '../../../components/global/TextInput/TextInput';

import { paths } from '../../../routes/paths';

import { PageWrapper, Title } from '../Auth.styled';

import { useLogin } from './useLogin';

export const Login = () => {
  const { errors, loading, logged, isValid, onSubmit, register, reset } =
    useLogin();

  if (logged) return <Navigate to={paths.profile} />;

  return (
    <PageWrapper data-testid={'page_login'}>
      <Form onReset={() => reset()} onSubmit={onSubmit}>
        <Title data-testid={'text_title'}>Login</Title>
        <TextInput
          {...register('username')}
          data-testid={'input__username'}
          error={errors?.username?.message}
          label={'Username'}
          placeholder={'Your name'}
        />
        <TextInput
          {...register('password')}
          data-testid={'input__password'}
          error={errors?.password?.message}
          label={'Password'}
          placeholder={'StrongPassword1!'}
          type={'password'}
        />

        <Form.ButtonsWrapper>
          <Button
            data-testid={'button__reset'}
            isLoading={loading}
            type={'reset'}
          >
            Reset
          </Button>
          <Button
            data-testid={'button__submit'}
            disabled={!isValid}
            isLoading={loading}
            type={'submit'}
          >
            Login
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </PageWrapper>
  );
};
