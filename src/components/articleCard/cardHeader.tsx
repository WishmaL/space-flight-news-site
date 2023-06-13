import React, { useState } from 'react';
// import Heart from 'react-animated-heart';
import Heart from "react-heart"

type TagContainerProps = {
  published_at: string
  favourite: boolean
}

const CardHeader = ({ published_at, favourite }: TagContainerProps) => {

  const [active, setActive] = useState(favourite)

  return (
    <div className="flex gap-3">
      <div className="flex text-xs font-medium tracking-wider uppercase mt-5 text-blue-600 justify-between w-full mx-2">
        <p>{published_at.split('T', 1)}</p>
        <span className='w-5 h-5'>
          <Heart isActive={active} onClick={() => setActive(!active)} animationScale={1.2} animationTrigger="both" animationDuration={.2} activeColor="red" inactiveColor="white" />
        </span>
      </div>
    </div>
  );
};

export default CardHeader;
