import React from 'react';
import login from '../assets/login.png';
import logout from '../assets/logout.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';

export default function LoginComp() {
  const auth = useSelector((state) => state.login.login);
  const { setCredentials } = useActions();

  const logOut = () => {
    if (auth.user) {
      setCredentials({
        user: null,
        id: null,
        token: null,
      });
    }
  };

  return (
    <>
      {auth.id ? (
        <div
          onClick={() => logOut()}
          className='flex flex-col items-center py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out relative'
        >
          <img src={logout} alt='logout' className='h-6' />
          <p className='text-sm'>{auth.user && auth.user}</p>
        </div>
      ) : (
        <NavLink
          to={'/loginRegister'}
          className='flex flex-col items-center py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out relative'
        >
          <img src={login} alt='login' className='h-6' />
          <p className='text-sm'>Login</p>
        </NavLink>
      )}
    </>
  );
}
