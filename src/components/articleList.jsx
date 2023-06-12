'use client';

import React, { useState, useEffect } from 'react'
import Pagination from './pagination';
import getData from '../app/api/articles/getAllArticles'


const ArticleList = () => {
  const [articles, setArticles] = useState([])

  useEffect(async () => {
    const data = await getData(10, 10)
    setArticles(data.results)
  }, [])

  console.log("articles: ", articles)

  return (
    <>
      <div>ArticleList</div>
      <Pagination />
    </>
  )
}

export default ArticleList