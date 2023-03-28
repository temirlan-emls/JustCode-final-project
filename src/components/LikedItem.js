import React from 'react';

export default function LikedItem({ item, index }) {
  return (
    <div className='w-full min-h-16 p-2 text-sm border grid grid-cols-3 self-start' to={`/${item.category}/${item.id}`}>
      <img src={item.image} alt={item.title} className='max-w-full' />
      <p className='col-span-2 ml-4'>
        {index + 1}) {item.title}
      </p>
    </div>
  );
}
