// TODO: remove this

import React from 'react';
import CardHeader from './cardHeader';
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
        <CardHeader published_at={article.published_at} featured={article.featured} />
        <TitleContainer title={article.title} />
        <SummaryContainer summary={article.summary} />
      </div>
    </>
  );
};

export default TextContainer;
