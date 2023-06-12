import React from 'react';

type TagContainerProps = {
  published_at: string
  featured: boolean
}

const TagContainer = ({ published_at, featured }: TagContainerProps) => {
  return (
    <div className="flex gap-3">
      <a href="/category/design">
        <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
          {published_at.split('T', 1)}
        </span>
      </a>
      {/* //TODO: Filter these if they are 'Featured' */}
      {/* <a href="/category/lifestyle"> */}
      <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
        {featured && <p>Featured</p>}
      </span>
      {/* </a> */}
    </div>
  );
};

export default TagContainer;
