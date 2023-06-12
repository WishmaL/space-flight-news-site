'use client';

import React, { useState, useEffect } from 'react'
import Pagination from './pagination/pagination';
import ArticleCard from './articleCard';
import { ArticleType } from '@/typings/article';
import getData from '@/app/api/articles/getAllArticles';


const ArticleList = () => {
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    (async () => {
      const data = await getData(10, 10 * (currentPage - 1))
      setArticles(data.results)
      setTotalCount(data.count)
    })()
  }, [currentPage])

  return (
    <>
      <h1 className='text-6xl my-4'>Spaceflight Article list</h1>
      <Pagination
        className="pagination-bar"
        onPageChange={page => setCurrentPage(page)}
        totalCount={totalCount}
        siblingCount={0}
        currentPage={currentPage}
        pageSize={10}
      />
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {articles.map((article: ArticleType) => {
          return <ArticleCard key={article.id} article={article} />
        })}
      </div>
      <Pagination
        className="pagination-bar"
        onPageChange={page => setCurrentPage(page)}
        totalCount={totalCount}
        siblingCount={0}
        currentPage={currentPage}
        pageSize={10}
      />
    </>
  )
}

export default ArticleList