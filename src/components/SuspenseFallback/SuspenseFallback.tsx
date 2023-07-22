import { PageWrapper } from './SuspenseFallback.styled';

import { Loader } from '../global/Loader/Loader';

export const SuspenseFallback = () => {
  return (
    <PageWrapper>
      <Loader />
    </PageWrapper>
  );
};
