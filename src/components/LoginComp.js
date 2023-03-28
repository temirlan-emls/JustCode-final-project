import React from 'react';
import login from '../assets/login.png';
import { NavLink } from 'react-router-dom';

export default function LoginComp() {
  return (
    <NavLink
      to={'/login'}
      className='flex flex-col items-center py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'
    >
      <img src={login} alt='login' className='h-6' />
      <p className='text-sm'>Login</p>
    </NavLink>
  );
}
