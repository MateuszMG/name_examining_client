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
    genderizeData,
    isValid,
    loading,
    nationalizeData,
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
        {!!genderizeData && !!nationalizeData && (
          <>
            <table>
              <tbody>
                <Tr>
                  <td>Name:</td>
                  <td>{genderizeData.name}</td>
                </Tr>
                <Tr>
                  <td>Gender:</td>
                  <td>{genderizeData.gender}</td>
                </Tr>
                <Tr>
                  <td>Found:</td>
                  <td>{genderizeData.count}</td>
                </Tr>
                <Tr>
                  <td>Probability:</td>
                  <td>{genderizeData.probability * 100}%</td>
                </Tr>
              </tbody>
            </table>
            <div>
              {nationalizeData.country.map((country) => (
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
