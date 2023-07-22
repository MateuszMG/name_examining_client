import { ReactNode, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { pageLimitOptions } from '../../../utils/config/const';

import { NextIcon, PreviousIcon } from '../Icon/Icon.styled';
import { Wrapper } from './Pagination.styled';

import { SelectInput } from '../SelectInput/SelectInput';

export interface HandleRefetchData {
  limit: number;
  page: number;
}

interface PaginationProps {
  children?: ReactNode;
  handleRefetch: (data: HandleRefetchData) => void;
  limit: number;
  page: number;
  total: number;
}

export const Pagination = ({
  children,
  handleRefetch,
  limit,
  page,
  total,
}: PaginationProps) => {
  const [newLimit, setNewLimit] = useState(limit);

  const pageCount = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    handleRefetch({
      limit: newLimit,
      page: newPage,
    });
  };

  const handleLimitChange = (newLimit: number) => {
    setNewLimit(newLimit);
    handleRefetch({ limit: newLimit, page: 0 });
  };

  return (
    <Wrapper>
      <ReactPaginate
        activeClassName={'pagination-active'}
        breakLabel={'...'}
        className={'pagination'}
        nextLabel={<NextIcon />}
        onPageChange={(event) => handlePageChange(event.selected)}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        previousLabel={<PreviousIcon />}
        renderOnZeroPageCount={null}
        forcePage={page}
      />

      <SelectInput
        onChange={({ value }) => handleLimitChange(+value)}
        options={pageLimitOptions}
      />

      {children}
    </Wrapper>
  );
};
