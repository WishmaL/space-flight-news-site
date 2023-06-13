import React from 'react';
import Heart from "react-heart"


type TagContainerProps = {
  published_at: string
  favourite: boolean
  makeArticleFavorite: (arg: boolean) => void
}

const CardHeader = ({ published_at, favourite, makeArticleFavorite }: TagContainerProps) => {

  return (
    <div className="flex gap-3">
      <div className="flex text-xs font-medium tracking-wider uppercase mt-5 text-blue-600 justify-between w-full mx-2">
        <p>{published_at.split('T', 1)}</p>
        <span className='w-5 h-5'>
          <Heart isActive={favourite} onClick={() => makeArticleFavorite(!favourite)} animationScale={1.2} animationTrigger="both" animationDuration={.2} activeColor="red" inactiveColor="white" />
        </span>
      </div>
    </div>
  );
};

export default CardHeader;
