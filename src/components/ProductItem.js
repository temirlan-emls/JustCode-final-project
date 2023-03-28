import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductItem({ item }) {
  return (
    <NavLink
      to={`/${item.category}`}
      className='w-full flex flex-col text-center items-center justify-center transition-all duration-300 ease-in-out capitalize font-normal border transform hover:scale-105'
    >
      <div className='h-4/6 w-full flex justify-center items-center'>
        <img src={item.image} alt={item.title} className='h-3/6' />
      </div>
      <div className='h-2/6 w-full flex justify-center items-center border-t-2'>
        <p className='w-10/12'>{item.title}</p>
      </div>
    </NavLink>
  );
}
