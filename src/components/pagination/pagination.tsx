import { usePagination, DOTS } from '@/hooks/usePagination';
import classnames from 'classnames';
import React from 'react'
import './styles.css'

type PaginationType = {
  onPageChange: (value: React.SetStateAction<number>) => void,
  totalCount: number,
  siblingCount: number,
  currentPage: number,
  pageSize: number,
  className: any
}

const Pagination = ({ onPageChange, currentPage,
  totalCount,
  siblingCount,
  pageSize,
  className }: PaginationType) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  }) as (string | number)[];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {

        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={pageNumber} className="pagination-item dots text-white">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={classnames('pagination-item', {
              '!text-amber-600': pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        }, 'text-white')}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  )
}

export default Pagination
