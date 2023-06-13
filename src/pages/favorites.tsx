'use client';

import React, { useEffect } from 'react';
import { ArticleType } from '@/typings/article';
import ReactSearchBox from 'react-search-box';
// TODO: remove reset
import {
  setArticles,
  setCurrentPage,
  setTotalCount,
  setTerm,
  clearSearchTerm,
} from '@/redux/features/articleListSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { useGetArticlesQuery } from '@/redux/services/articleApi';
import Pagination from '@/components/pagination/pagination';
import ArticleCard from '@/components/articleCard';

const Favorites = () => {
  const { articles, currentPage, term, totalCount, favouriteArticleIds } = useAppSelector(
    (state) => state.articleListReducer
  );

  const dispatch = useAppDispatch();

  // favouriteArticleIds.includes(article.id)

  const searchBarProps = {
    placeholder: term !== '' ? 'Search for articles...' : term,
    value: term,
    data: favouriteArticleIds.length !== 0 ? [
      ...articles?.map((a: ArticleType) => {
        return { key: a.id.toString(), value: a.title };
      })
    ] : [],
    callback: (record: string) => console.log(record),
    onSelect: (e: any) => {
      console.log('onSelect: ', e);
    },
    onChange: (e: any) => {
      dispatch(setTerm(e));
    },
    inputBackgroundColor: '#EFEFEE',
    inputFontColor: '#6fa8dc',
    dropDownHoverColor: '#6fa8dc',
    clearOnSelect: false,
  };

  return (
    <>
      <div className="w-1/2">
        <ReactSearchBox {...searchBarProps} />
      </div>
      <h1 className="text-6xl my-4">Spaceflight Article list</h1>
      <Pagination
        className="pagination-bar"
        onPageChange={(page: any) => dispatch(setCurrentPage(page))}
        totalCount={totalCount}
        siblingCount={0}
        currentPage={currentPage}
        pageSize={10}
      />
      {term !== '' && (
        <>
          <h1>Search results for "{term}"...</h1>
          <button onClick={() => dispatch(clearSearchTerm())}>
            Clear search
          </button>
        </>
      )}

      {favouriteArticleIds.length !== 0 ? (
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {/* {articles.map((article: ArticleType) => {
            return favouriteArticleIds.includes(article.id) && <ArticleCard key={article.id} article={article} />;
          })} */}
        </div>
      ) : <h2>No favorites articles are available !</h2>}

      <Pagination
        className="pagination-bar"
        onPageChange={(page: any) => setCurrentPage(page)}
        totalCount={totalCount}
        siblingCount={0}
        currentPage={currentPage}
        pageSize={10}
      />
    </>
  );
};

export default Favorites;
