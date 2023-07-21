import { Navigate } from 'react-router-dom';

import { Button } from '../../../components/global/Button/Button';
import { Form } from '../../../components/global/Form/Form';
import { TextInput } from '../../../components/global/TextInput/TextInput';

import { paths } from '../../../routes/paths';

import { Container, Title } from '../Auth.styled';

import { useRegister } from './useRegister';

export const Register = () => {
  const { errors, isValid, loading, logged, onSubmit, register, reset } =
    useRegister();

  if (logged) return <Navigate to={paths.profile} />;

  return (
    <Container>
      <Form onReset={() => reset()} onSubmit={onSubmit}>
        <Title>Register</Title>
        <TextInput
          {...register('username')}
          data-testid={'input_username'}
          error={errors?.username?.message}
          label={'Username'}
          placeholder={'Your name'}
        />
        <TextInput
          {...register('password')}
          error={errors?.password?.message}
          label={'Password'}
          placeholder={'StrongPassword1!'}
          type={'password'}
        />
        <TextInput
          {...register('confirmPassword')}
          error={errors?.confirmPassword?.message}
          label={'Repeat password'}
          placeholder={'StrongPassword1!'}
          type={'password'}
        />

        <Form.ButtonsWrapper>
          <Button isLoading={loading} type={'reset'}>
            Reset
          </Button>
          <Button disabled={!isValid} isLoading={loading} type={'submit'}>
            Register
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </Container>
  );
};
