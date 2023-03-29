import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DropdownItem({ item, index }) {
  return (
    <NavLink
      to={`/${item.category}/${item.id}`}
      className='w-full rounded-t-3xl ml-2 border-t-2 min-h-16 p-2 text-sm grid grid-cols-3 self-start  bg-gradient-to-tl from-slate-100 to-white'
    >
      <img src={item.image} alt={item.title} className='max-w-full' />
      <p className='col-span-2 ml-4'>
        {index + 1}) {item.title}
      </p>
    </NavLink>
  );
}
