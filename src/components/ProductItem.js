import React from 'react';
import { NavLink } from 'react-router-dom';
import Star from '../assets/star.png';
import LikeButtonComp from './LikeButtonComp';
import CartButtonComp from './CartButtonComp';
import PriceComp from './PriceComp';

export default function ProductItem({ item }) {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center  transition-all duration-300 ease-in-out capitalize font-normal border border-gray-300 transform hover:scale-105 rounded-xl overflow-hidden '>
      {' '}
      <NavLink
        to={`/${item.category}/${item.id}`}
        className='h-3/6 w-full flex justify-center items-center hover:h-4/6 transition-all duration-300 ease-in-out'
      >
        <img src={item.image} alt={item.title} className='h-3/6' />
      </NavLink>
      <div className='h-3/6 w-full flex flex-col justify-around border-gray-300 items-center border-t-2 rounded-t-3xl bg-gradient-to-t from-gray-100 to-white hover:h-3/6 transition-all duration-300 ease-in-out'>
        <p className='w-10/12 lg:text-lg md:text-sm sm:text-[12px] xs:text-[8px]'>
          {item.title}
        </p>
        <p className='w-10/12 text-2xl font-bold text-amber-500 lg:text-2xl md:text-xl sm:text-lg xs:text-sm'>
          <PriceComp price={item.price} />
        </p>
        <div className='w-full lg:text-lg md:text-sm sm:text-[12px] xs:text-[8px] flex flex-col gap-4 mb-4'>
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
