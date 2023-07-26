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
    <PageWrapper data-testid={'page__home'}>
      <Form onReset={onReset} onSubmit={onSubmit}>
        <Title data-testid={'page__title'}>Check your name</Title>

        <TextInput
          {...register('name')}
          data-testid={'input__name'}
          error={errors?.name?.message}
          placeholder={'Charles'}
        />

        <Form.ButtonsWrapper>
          <Button
            data-testid={'button__reset'}
            isLoading={loading}
            type='reset'
          >
            Reset
          </Button>
          <Button
            data-testid={'button__submit'}
            disabled={!isValid}
            isLoading={loading}
            type='submit'
          >
            Check name
          </Button>
        </Form.ButtonsWrapper>
      </Form>

      <Wrapper>
        {!loading && nameNotFound && (
          <p data-testid={'text__not-found'}>
            Such a name "{name}" does not exist
          </p>
        )}

        {gender && country && (
          <Result>
            <p data-testid={'text__name'}>{name}</p>
            <p data-testid={'text__gender'}>{gender}</p>
            <p data-testid={'text__country'}>{country}</p>
            <CopyIcon
              onClick={() =>
                navigator.clipboard.writeText(`${name} ${gender} ${country}`)
              }
            />
          </Result>
        )}
      </Wrapper>
    </PageWrapper>
  );
};
