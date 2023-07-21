import { Button } from '../../components/global/Button/Button';
import { Form } from '../../components/global/Form/Form';
import { Loader } from '../../components/global/Loader/Loader';
import { TextInput } from '../../components/global/TextInput/TextInput';

import {
  Container,
  NationalizeSection,
  Title,
  Tr,
  Wrapper,
} from './Home.styled';

import { useHome } from './useHome';

export const Home = () => {
  const {
    errors,
    genderized,
    isValid,
    loading,
    nationalized,
    onReset,
    onSubmit,
    register,
  } = useHome();

  return (
    <Container>
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
        {loading && <Loader />}
        {!!genderized && !!nationalized && (
          <>
            <table>
              <tbody>
                <Tr>
                  <td>Name:</td>
                  <td>{genderized.name}</td>
                </Tr>
                <Tr>
                  <td>Gender:</td>
                  <td>{genderized.gender}</td>
                </Tr>
                <Tr>
                  <td>Found:</td>
                  <td>{genderized.count}</td>
                </Tr>
                <Tr>
                  <td>Probability:</td>
                  <td>{genderized.probability * 100}%</td>
                </Tr>
              </tbody>
            </table>
            <div>
              {nationalized.country.map((country) => (
                <NationalizeSection key={country.country_id}>
                  <p>{country.country_id}</p>
                  <p>{(country.probability * 100).toFixed(2)} %</p>
                </NationalizeSection>
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
