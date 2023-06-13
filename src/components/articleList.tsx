'use client';

import React, { useEffect } from 'react';
import Pagination from './pagination/pagination';
import ArticleCard from './articleCard';
import { ArticleType } from '@/typings/article';
import getData from '@/app/api/articles/getAllArticles';
import ReactSearchBox from 'react-search-box';
// TODO: remove reset
import { setArticles, setCurrentPage, setTotalCount, setTerm, reset, clearSearchTerm } from "@/redux/features/articleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const ArticleList = () => {

  const { articles, currentPage, term, totalCount } = useAppSelector((state) => state.articleReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const data = await getData(10, 10 * (currentPage - 1), term);
      dispatch(setArticles(data.results.map((obj: ArticleType) => ({ ...obj, favourite: false }))));
      dispatch(setTotalCount(data.count));
    })();
  }, [term, currentPage]);

  const searchBarProps = {
    placeholder: term !== '' ? 'Search for articles...' : term,
    value: term,
    data: [...articles.map((a: ArticleType) => { return { key: a.id.toString(), value: a.title } })],
    callback: (record: string) => console.log(record),
    onSelect: (e: any) => { console.log("onSelect: ", e) },
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
      <div className='w-1/2'>
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
          <button onClick={() => dispatch(clearSearchTerm())}>Clear search</button>
        </>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {articles.map((article: ArticleType) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </div>

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

export default ArticleList;
