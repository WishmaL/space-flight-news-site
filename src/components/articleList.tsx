'use client';

import React, { useState, useEffect } from 'react'
import Pagination from './pagination';
import ArticleCard from './articleCard';
import { ArticleType } from '@/typings/article';
import getData from '@/app/api/articles/getAllArticles';


const ArticleList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getData(10, 10)
      setArticles(data.results)
    })()
  }, [])

  return (
    <>
      <h1>ArticleList</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {articles.map((article: ArticleType) => {
          return <ArticleCard key={article.id} article={article} />
        })}
      </div>
      <Pagination />
    </>
  )
}

export default ArticleList