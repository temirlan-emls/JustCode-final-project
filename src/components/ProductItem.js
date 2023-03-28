import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../assets/cart.png'
import Star from '../assets/star.png'

export default function ProductItem({ item }) {
  return (
    <NavLink
      to={`/${item.category}/${item.id}`}
      className='w-full flex flex-col text-center items-center justify-center transition-all duration-300 ease-in-out capitalize font-normal border transform hover:scale-105 rounded-xl overflow-hidden'
    >
      <div className='h-3/6 w-full flex justify-center items-center hover:h-4/6 transition-all duration-300 ease-in-out'>
        <img src={item.image} alt={item.title} className='h-3/6' />
      </div>
      <div className='h-3/6 w-full flex flex-col justify-around items-center border-t-2 rounded-t-xl bg-gradient-to-b from-gray-50 to-white hover:h-2/6 transition-all duration-300 ease-in-out'>
        <p className='w-10/12'>{item.title}</p>
        <p className='w-10/12 text-2xl font-bold text-amber-500'>{item.price} $</p>
        <div className='grid grid-cols-2 w-full'>
            <div>
              Rating:
              <br/>
              <div className='flex justify-center items-center'>
                {item.rating.rate}<img src={Star} alt="star" className='h-4'/>
                   ({item.rating.count})
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <button ><img src={Cart} alt="cart" className='h-8'/></button>
            </div>
        </div>
      </div>
    </NavLink>
  );
}
