import React from 'react';
import like from '../assets/like.png';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

export default function LikedCom() {
  const liked = useSelector((state) => state.liked.liked);

  return (
    <NavLink to={'/liked'} className='flex flex-col items-center justify-center py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out relative'>
      <img
        src={like}
        alt='cart'
        className={`transition-all duration-300 ease-in-out h-8 saturate-0 brightness-0 `}
      />
      {liked.length ? (
        <p className='text-sm absolute -right-3 bottom-2 px-2 py-1 rounded-full bg-yellow-300'>
          {liked.length}
        </p>
      ) : (
        ''
      )}
    </NavLink>
  );
}
