import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../assets/cart.png';
import Star from '../assets/star.png';
import LikeButtonComp from './LikeButtonComp';

export default function ProductItem({ item }) {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <div className='w-full flex flex-col text-center items-center justify-center transition-all duration-300 ease-in-out capitalize font-normal border transform hover:scale-105 rounded-xl overflow-hidden'>
      {' '}
      <NavLink
        to={`/${item.category}/${item.id}`}
        className='h-3/6 w-full flex justify-center items-center hover:h-4/6 transition-all duration-300 ease-in-out'
      >
        <img src={item.image} alt={item.title} className='h-3/6' />
      </NavLink>
      <div className='h-3/6 w-full flex flex-col justify-around items-center border-t-2 rounded-t-3xl bg-gradient-to-t from-gray-100 to-white hover:h-3/6 transition-all duration-300 ease-in-out'>
        <p className='w-10/12'>{item.title}</p>
        <p className='w-10/12 text-2xl font-bold text-amber-500'>
          {item.price} $
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
            <button
              onClick={() => {
                if (isInCart) {
                  setIsInCart(false);
                } else {
                  setIsInCart(true);
                }
              }}
            >
              <img
                src={Cart}
                alt='cart'
                className={`h-8 hover:scale-125 transition-all duration-300 ease-in-out ${
                  isInCart ? '' : 'saturate-0 brightness-0'
                }`}
              />
            </button>

            <LikeButtonComp item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
