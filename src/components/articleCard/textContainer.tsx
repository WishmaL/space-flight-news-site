import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TagContainer from './tagContainer';
import TitleContainer from './titleContainer';

const TextContainer = () => {
  return (
    <>
      <div>
        <TagContainer />
        <TitleContainer title={'test'} />
      </div>
    </>
  );
};

export default TextContainer;
