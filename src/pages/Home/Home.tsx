import { Button } from '../../components/global/Button/Button';
import { Form } from '../../components/global/Form/Form';
import { CopyIcon } from '../../components/global/Icon/Icon.styled';
import { TextInput } from '../../components/global/TextInput/TextInput';

import { PageWrapper, Result, Title, Wrapper } from './Home.styled';

import { useHome } from './useHome';

export const Home = () => {
  const {
    country,
    errors,
    gender,
    isValid,
    loading,
    name,
    nameNotFound,
    onReset,
    onSubmit,
    register,
  } = useHome();

  return (
    <PageWrapper>
      <Form onReset={onReset} onSubmit={onSubmit}>
        <Title>Check your name</Title>

        <TextInput
          {...register('name')}
          error={errors?.name?.message}
          placeholder={'Charles'}
        />

        <Form.ButtonsWrapper>
          <Button isLoading={loading} type='reset'>
            Reset
          </Button>
          <Button disabled={!isValid} isLoading={loading} type='submit'>
            Check name
          </Button>
        </Form.ButtonsWrapper>
      </Form>

      <Wrapper>
        <div>
          {!loading && nameNotFound && (
            <p>Such a name "{name}" does not exist</p>
          )}

          {gender && country && (
            <Result>
              <p>{name}</p>
              <p>{gender}</p>
              <p>{country}</p>
              <CopyIcon
                onClick={() =>
                  navigator.clipboard.writeText(`${name} ${gender} ${country}`)
                }
              />
            </Result>
          )}
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
