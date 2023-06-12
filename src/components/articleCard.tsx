import { ArticleType } from '@/typings/article'
import React from 'react'
import Image from 'next/image'

type ArticleCardProps = {
  article: ArticleType
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  console.log(article.title)
  return (
    <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
          {(
            // <Link href={`/#`}>
            <Image
              src='https://i0.wp.com/spacenews.com/wp-content/uploads/2023/06/littlejohn.jpg'
              alt='alt'
              className="rounded-full object-cover"
              fill
              sizes="96px"
            />
            // </Link>
          )}
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About title
            </h3>
          </div>
          <div>
            Article bio
            {/* {article.bio && <PortableText value={article.bio} />} */}
          </div>
          <div className="mt-3">
            {/* <Link
              href={`/#`}
              className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 ">
              View Profile
            </Link> */}
          </div>
        </div>
      </div>
    </div>
    // <h1>{article.title}</h1>
  )
}

export default ArticleCard
