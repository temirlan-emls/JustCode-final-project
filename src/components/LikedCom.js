import React from 'react';
import like from '../assets/like.png';
import { useSelector } from 'react-redux';
import { useOutside } from '../hooks/useOutside';
import DropdownItem from './DropdownItem';

export default function LikedCom({ isDropdown = true }) {
  const { ref, isShown, setIsShown } = useOutside(false, 'mouseover');
  const liked = useSelector((state) => state.liked.liked);

  return (
    <div
      className='flex flex-col items-center py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out relative'
      ref={ref}
    >
      <img
        src={like}
        alt='login'
        className={`transition-all duration-300 ease-in-out h-6 ${
          liked.length !== 0 ? '' : 'saturate-0 brightness-0'
        }`}
        onMouseOver={() => setIsShown(true)}
      />
      <p className='text-sm'> {liked.length ? liked.length : 'Liked'}</p>
      {isDropdown && (
        <div
          className={`rounded-lg flex flex-col items-center absolute w-96 max-h-80 top-12 overflow-hidden border-gray-200 overflow-y-scroll bg-white z-10 ${
            isShown && liked.length
              ? 'border-2 border-gray-300 block'
              : 'hidden'
          }`}
        >
          <p className='p-1'>LIKED</p>
          {liked.map((item, index) => (
            <DropdownItem item={item} key={item.id} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
