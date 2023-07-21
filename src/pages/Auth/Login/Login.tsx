import { Navigate } from 'react-router-dom';

import { Button } from '../../../components/global/Button/Button';
import { Form } from '../../../components/global/Form/Form';
import { TextInput } from '../../../components/global/TextInput/TextInput';

import { paths } from '../../../routes/paths';

import { Container, Title } from '../Auth.styled';

import { useLogin } from './useLogin';

export const Login = () => {
  const { errors, loading, logged, isValid, onSubmit, register, reset } =
    useLogin();

  if (logged) return <Navigate to={paths.profile} />;

  return (
    <Container>
      <Form onReset={() => reset()} onSubmit={onSubmit}>
        <Title>Login</Title>
        <TextInput
          {...register('username')}
          error={errors?.username?.message}
          label={'Email'}
          placeholder={'Your name'}
        />
        <TextInput
          {...register('password')}
          error={errors?.password?.message}
          label={'Password'}
          placeholder={'StrongPassword1!'}
          type={'password'}
        />

        <Form.ButtonsWrapper>
          <Button isLoading={loading} type={'reset'}>
            Reset
          </Button>
          <Button disabled={!isValid} isLoading={loading} type={'submit'}>
            Login
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </Container>
  );
};
