import React from 'react';
import cart from '../assets/cart.png';
import { NavLink } from 'react-router-dom';

export default function CartComp() {
  return (
    <NavLink
      to={'/cart'}
      className='flex flex-col items-center relative py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'
    >
      <img src={cart} alt='login' className='h-6 saturate-0 brightness-0' />
      <p className='text-sm'>Cart</p>
    </NavLink>
  );
}
