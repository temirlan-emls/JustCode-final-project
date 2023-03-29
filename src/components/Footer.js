import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import CartComp from './CartComp';
import LikedCom from './LikedCom';

export default function Footer() {
  return (
    <footer className='w-full h-44 bg-gray-100 rounded-t-xl flex flex-col justify-around items-center'>
      <div className='flex justify-around items-center font-bold text-sm tracking-wide w-full'>
        <LikedCom />
        <h2 className='py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out  flex items-center'>
          <NavLink to={'https://2gis.kz/almaty/'}>Stores</NavLink>
        </h2>
        <h2 className='py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out text-center'>
          <NavLink to={'https://cdek.kz/ru'}>Shipping and Payment</NavLink>
        </h2>
        <h2 className='py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out flex items-center'>
          <NavLink to={'/sales'}>Sales</NavLink>
        </h2>
        <CartComp isDropdown={false} />
      </div>
      <div className='w-11/12 h-0.5 bg-gray-400 rounded-lg'></div>
      <div className='w-full flex justify-center items-center'>
        <div className='w-4/12 '>
          <Logo />
        </div>
      </div>
    </footer>
  );
}
