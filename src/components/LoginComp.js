import React from 'react';
import login from '../assets/login.png';
import logout from '../assets/logout.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { useOutside } from '../hooks/useOutside';

export default function LoginComp() {
  const auth = useSelector((state) => state.login.login);
  const { setCredentials } = useActions();
  const { ref, isShown, setIsShown } = useOutside(false, 'mouseover');

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
    <NavLink
      ref={ref}
      to={'/loginRegister'}
      className='flex flex-col items-center py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out relative'
      onMouseOver={() => setIsShown(true)}
    >
      <img src={login} alt='login' className='h-6' />
      <p className='text-sm'>{auth.user ? auth.user : 'Login'}</p>
      {auth.user && (
        <div
          className={`rounded-lg flex flex-col p-4 items-center justify-center absolute w-24 h-220 top-12 overflow-hidden border-2  border-gray-300  bg-white z-20 ${
            isShown ? 'block' : 'hidden'
          }`}
          onClick={() => logOut()}
        >
          <img src={logout} alt='logout' className='w-6/12' />
          <p className='text-center text-sm'>Logout</p>
        </div>
      )}
    </NavLink>
  );
}
