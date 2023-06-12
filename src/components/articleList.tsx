'use client';

import React, { useState, useEffect } from 'react'
import Pagination from './pagination';
import getData from '../app/api/articles/getAllArticles'
import ArticleCard from './articleCard';
import { ArticleType } from '@/typings/article';


const ArticleList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getData(10, 10)
      setArticles(data.results)
    })()
  }, [])

  console.log("articles: ", articles)

  return (
    <>
      <h1>ArticleList</h1>

      {articles.map((article: ArticleType) => {
        return <ArticleCard key={article.id} article={article} />
      })}
      <Pagination />
    </>
  )
}

export default ArticleList