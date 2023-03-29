import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButtonComp from './CartButtonComp';

export default function DropdownItem({ item, index }) {
  return (
    <div className='w-full rounded-t-3xl ml-2 border-t-2 min-h-16 p-2 text-sm grid grid-cols-3 self-start bg-gradient-to-tl from-slate-100 to-white'>
      <NavLink to={`/${item.category}/${item.id}`}>
        <img src={item.image} alt={item.title} className='max-w-full' />
      </NavLink>
      <div className='col-span-2 ml-4 flex flex-col justify-around items-center'>
        <NavLink
          to={`/${item.category}/${item.id}`}
          className='w-full text-start'
        >
          {index + 1}) {item.title}
        </NavLink>

        <CartButtonComp item={item} />
      </div>
    </div>
  );
}
