import Image from 'next/image';
import React from 'react';

type ImageProp = {
  imgSrc: string
}

const MainImage = ({ imgSrc }: ImageProp) => {
  return (
    <div>
      <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
        <a
          className="relative block aspect-square"
          href="/post/14-architectural-design-ideas-for-spacious-interior"
        >
          <Image
            alt="Thumbnail"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover transition-all"
            style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            sizes="(max-width: 768px) 30vw, 33vw"
            width={80}
            height={100}
            src={imgSrc}
          />
        </a>
      </div>
    </div>
  );
};

export default MainImage;
