import React from 'react'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      {' '}
      <NavLink to={'/'} className='flex justify-center'>
        <img
          src={logo}
          alt='logo'
          className='md:w-4/6 xs:w-5/6 transform hover:scale-110 transition-all duration-300 ease-in-out'
        />
      </NavLink>
    </div>
  );
}
