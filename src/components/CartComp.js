import React from 'react';
import Cart from '../assets/cart.png';
import { useSelector } from 'react-redux';

export default function CartComp() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div
      to={'/cart'}
      className='flex flex-col items-center justify-center relative py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'
    >
      <img
        src={Cart}
        alt='cart'
        className={`transition-all duration-300 ease-in-out h-9 saturate-0 brightness-0 `}
      />
      {cart.length ? (
        <p className='text-sm absolute -right-3 bottom-2 px-2 py-1 rounded-full bg-yellow-300'>
          {cart.length}
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
