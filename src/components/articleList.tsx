'use client';

import React, { useState, useEffect } from 'react';
import Pagination from './pagination/pagination';
import ArticleCard from './articleCard';
import { ArticleType } from '@/typings/article';
import getData from '@/app/api/articles/getAllArticles';
import ReactSearchBox from 'react-search-box';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [term, setTerm] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getData(10, 10 * (currentPage - 1), term);
      setArticles(data.results);
      setTotalCount(data.count);
    })();
  }, [term, currentPage]);

  const searchBarProps = {
    placeholder: 'Search for articles...',
    value: term,
    data: [...articles.map((a: ArticleType) => { return { key: a.id.toString(), value: a.title } })],
    callback: (record: string) => console.log(record),
    onSelect: (e: any) => { console.log("onSelect: ", e) },
    onChange: (e: any) => {
      setTerm(e);
    },
    inputBackgroundColor: '#EFEFEE',
    inputFontColor: '#6fa8dc',
    dropDownHoverColor: '#6fa8dc'
  };

  return (
    <>
      <ReactSearchBox {...searchBarProps} />
      <h1 className="text-6xl my-4">Spaceflight Article list</h1>
      <Pagination
        className="pagination-bar"
        onPageChange={(page) => setCurrentPage(page)}
        totalCount={totalCount}
        siblingCount={0}
        currentPage={currentPage}
        pageSize={10}
      />
      {term !== '' && (
        <>
          <h1>Search results for "{term}"...</h1>
        </>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {articles.map((article: ArticleType) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </div>

      <Pagination
        className="pagination-bar"
        onPageChange={(page) => setCurrentPage(page)}
        totalCount={totalCount}
        siblingCount={0}
        currentPage={currentPage}
        pageSize={10}
      />
    </>
  );
};

export default ArticleList;
