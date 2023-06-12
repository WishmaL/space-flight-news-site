import React from 'react';
import TagContainer from './tagContainer';
import TitleContainer from './titleContainer';
import SummaryContainer from './summaryContainer';

type TextContainerType = {
  article: {
    title: string;
    url: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
  }
}

const TextContainer = ({ article }: TextContainerType) => {
  return (
    <>
      <div>
        <TagContainer published_at={article.published_at} featured={article.featured} />
        <TitleContainer title={article.title} />
        <SummaryContainer summary={article.summary} />
      </div>
    </>
  );
};

export default TextContainer;
