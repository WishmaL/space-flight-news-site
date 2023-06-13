import { ArticleType } from '@/typings/article'
import React from 'react'
import MainImage from './mainImage'
import TitleContainer from './titleContainer'
import CardHeader from './cardHeader'
import SummaryContainer from './summaryContainer'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addToFavourite, removeFromFavourite } from '@/redux/features/articleListSlice'

type ArticleCardProps = {
  article: ArticleType
}

const ArticleCard = ({ article }: ArticleCardProps) => {

  const favoriteArticles = useAppSelector((state) => state.articleListReducer);
  const dispatch = useAppDispatch();

  const makeArticleFavorite = (isActive: boolean) => {
    if (isActive) {
      dispatch(addToFavourite(article.id))
    } else {
      dispatch(removeFromFavourite(article.id))
    }
  }

  return (
    <>
      <div className='group cursor-pointer'>
        <MainImage imgSrc={article.image_url} />
        <div>
          <CardHeader published_at={article.published_at} favourite={favoriteArticles.favouriteArticleIds.includes(article.id)} makeArticleFavorite={makeArticleFavorite} />
          <TitleContainer title={article.title} />
          <SummaryContainer summary={article.summary} />
        </div>
      </div>
    </>
  )
}

export default ArticleCard
