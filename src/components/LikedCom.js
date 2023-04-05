import React from 'react';
import like from '../assets/like.png';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

export default function LikedCom() {
  const liked = useSelector((state) => state.liked.liked);

  return (
    <NavLink
      to={'/liked'}
      className='flex flex-col items-center justify-center py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out relative xs:p-0'
    >
      <img
        src={like}
        alt='cart'
        className={`transition-all duration-300 ease-in-out lg:h-8 saturate-0 brightness-0 xs:h-6`}
      />
      {liked.length ? (
        <p className='text-sm absolute -right-3 bottom-2 px-2 py-1 rounded-full bg-yellow-300 xs:text-xs'>
          {liked.length}
        </p>
      ) : (
        ''
      )}
    </NavLink>
  );
}
