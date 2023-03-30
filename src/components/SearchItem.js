import React from 'react';
import { NavLink } from 'react-router-dom';
import Star from '../assets/star.png';
import LikeButtonComp from './LikeButtonComp';
import CartButtonComp from './CartButtonComp';
import PriceComp from './PriceComp';

export default function SearchItem({ item, index }) {
  return (
    <div className='w-64 rounded-xl border h-full bg-gradient-to-tl from-slate-100 to-white flex flex-col items-center justify-center text-center'>
      <NavLink
        to={`/${item.category}/${item.id}`}
        className='h-3/6 w-full flex justify-center items-center hover:h-4/6 transition-all duration-300 ease-in-out'
      >
        <img src={item.image} alt={item.title} className='h-3/6' />
      </NavLink>
      <div className='h-3/6 w-full flex flex-col justify-around items-center border-gray-300 border-t-2 rounded-t-3xl bg-gradient-to-t from-gray-100 to-white hover:h-3/6 transition-all duration-300 ease-in-out'>
        <p className='w-10/12'>{item.title}</p>
        <p className='w-10/12 text-2xl font-bold text-amber-500'>
          <PriceComp price={item.price} />
        </p>
        <div className='grid grid-cols-2 w-full'>
          <div>
            Rating:
            <br />
            <div className='flex justify-center items-center'>
              {item.rating.rate}
              <img
                src={Star}
                alt='star'
                className='h-4 ml-0.5 mr-2 contrast-75'
              />
              ({item.rating.count})
            </div>
          </div>
          <div className='flex justify-around items-center'>
            <CartButtonComp item={item} />
            <LikeButtonComp item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
