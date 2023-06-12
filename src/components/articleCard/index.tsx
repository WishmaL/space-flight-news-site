import { ArticleType } from '@/typings/article'
import React from 'react'
import MainImage from './mainImage'
import TextContainer from './textContainer'

type ArticleCardProps = {
  article: ArticleType
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <>
      <div className='group cursor-pointer'>
        <MainImage imgSrc={article.image_url} />
        {/* //TODO: Pass following pros using some other method */}
        <TextContainer article={{
          title: article.title,
          url: article.url,
          summary: article.summary,
          published_at: article.published_at,
          updated_at: article.updated_at,
          featured: article.featured
        }} />
      </div>
    </>
  )
}

export default ArticleCard
