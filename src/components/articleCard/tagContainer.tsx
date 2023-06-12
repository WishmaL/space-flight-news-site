import React from 'react';

const TagContainer = () => {
  return (
    <div className="flex gap-3">
      <a href="/category/design">
        <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
          Design
        </span>
      </a>
      <a href="/category/lifestyle">
        <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
          Lifestyle
        </span>
      </a>
    </div>
  );
};

export default TagContainer;
