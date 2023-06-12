import React from 'react';

type TitleContainer = {
  title: string
}

const TitleContainer = ({ title }: TitleContainer) => {
  console.log(title)
  return (
    <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
      <a href="/post/14-architectural-design-ideas-for-spacious-interior">
        <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
          14 Architectural Design Ideas for a Spacious Interior
        </span>
      </a>
    </h2>
  );
};

export default TitleContainer;
