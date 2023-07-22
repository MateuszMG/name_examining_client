import dayjs from 'dayjs';

import { Pagination } from '../../components/global/Pagination/Pagination';

import { addPlural } from '../../helpers/strings';

import { DayjsFormats } from '../../utils/config/const';

import {
  Countries,
  Country,
  Name,
  PageContainer,
  SavedRequestsContainer,
  SavedRequestWrapper,
  Table,
  TotalInfo,
  TR,
} from './Profile.styled';

import { useProfile } from './useProfile';

export const Profile = () => {
  const { handleRefetch, pagination, savedRequests } = useProfile();

  return (
    <PageContainer>
      <Pagination {...pagination} handleRefetch={handleRefetch} />

      <TotalInfo>
        You have {pagination.total} saved request{addPlural(pagination.total)}
      </TotalInfo>

      <SavedRequestsContainer>
        {savedRequests.map((item) => (
          <SavedRequestWrapper key={item.name}>
            <Name>{item.name}</Name>

            <Table>
              <tbody>
                <TR>
                  <td>Found:</td>
                  <td>{item.genderized.count}</td>
                </TR>
                <TR>
                  <td>Gender:</td>
                  <td>{item.genderized.gender}</td>
                </TR>
                <TR>
                  <td>Probability:</td>
                  <td>{(item.genderized.probability * 100).toFixed()}%</td>
                </TR>
              </tbody>
            </Table>

            <Countries>
              {item.nationalized.country.map((country) => (
                <Country key={country.country_id}>
                  <p>{country.country_id}</p>
                  <p>{(country.probability * 100).toFixed(2)}%</p>
                </Country>
              ))}
            </Countries>

            <Table>
              <tbody>
                <TR>
                  <td> First request:</td>
                  <td>
                    {dayjs(item.createdAt).format(DayjsFormats.savedRequest)}
                  </td>
                </TR>
                <TR>
                  <td>Last request:</td>
                  <td>
                    {dayjs(item.updatedAt).format(DayjsFormats.savedRequest)}
                  </td>
                </TR>
                <TR>
                  <td>All requests:</td>
                  <td>{item.savingTimes.length}</td>
                </TR>
              </tbody>
            </Table>
          </SavedRequestWrapper>
        ))}
      </SavedRequestsContainer>
    </PageContainer>
  );
};
