import { ArticleType } from '@/typings/article'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainImage from './mainImage'
import TagContainer from './tagContainer'
import TitleContainer from './titleContainer'
import TextContainer from './textContainer'

type ArticleCardProps = {
  article: ArticleType
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  console.log(article.title)
  return (
    <>
      <div className='group cursor-pointer'>
        <MainImage imgSrc={article.image_url} />
        <TextContainer />
      </div>
    </>
  )
}

export default ArticleCard
