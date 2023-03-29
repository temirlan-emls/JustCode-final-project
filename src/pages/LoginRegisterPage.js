import { useState, useEffect } from 'react';
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from '../store/fakeStoreApi/fakeStore.api';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';

export default function LoginRegisterPage() {
  ////////////////////////////////////
  const [isLogin, setIsLogin] = useState(true);
  const toggleHandler = (event) => {
    event.target.textContent.toLowerCase() === 'login'
      ? setIsLogin(true)
      : setIsLogin(false);
  };
  ////////////////////////////////////
  const auth = useSelector((state) => state.login.login);
  const [loginUser, { data: loginData, isLoading: loginLoading }] =
    useLoginUserMutation();
  const [currentUser, setCurrentUser] = useState('');
  const { setCredentials } = useActions();
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    event.target.username.value = 'johnd';
    event.target.password.value = 'm38rmF$';
    if (event.target.username.value && event.target.password.value) {
      loginUser(
        JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        })
      );

      setCurrentUser(event.target.username.value);

      event.target.username.style = '';
      event.target.password.style = '';
    } else {
      const errorStyle = 'background-color: rgb(254 202 202)';
      event.target.username.style = errorStyle;
      event.target.password.style = errorStyle;
    }
  };

  useEffect(() => {
    if (loginData && currentUser) {
      setCredentials({
        user: currentUser,
        // id: Math.floor(Math.random() * 100) + 1,
        id: 99,
        token: loginData.token,
      });
    }
  }, [loginData, currentUser]);

  ////////////////////////////////////
  const [registerUser, { data: registerData, isLoading: registerLoading }] =
    useRegisterUserMutation();
  const registerSubmitHandler = (event) => {
    event.preventDefault();
    if (
      event.target.username.value &&
      event.target.password.value &&
      event.target.email.value &&
      event.target.firstName.value &&
      event.target.lastName.value &&
      event.target.phone.value
    ) {
      registerUser(
        JSON.stringify({
          email: event.target.email.value,
          username: event.target.username.value,
          password: event.target.password.value,
          name: {
            firstname: event.target.firstName.value,
            lastname: event.target.lastName.value,
          },
          address: {
            city: 'kilcoole2',
            street: '7835 new road2',
            number: 34,
            zipcode: '12926-38742',
            geolocation: {
              lat: '-37.31593',
              long: '81.14963',
            },
          },
          phone: event.target.phone.value,
        })
      );
      event.target.username.style = '';
      event.target.password.style = '';
      event.target.email.style = '';
      event.target.firstName.style = '';
      event.target.lastName.style = '';
      event.target.phone.style = '';
    } else {
      const errorStyle = 'background-color: rgb(254 202 202)';

      event.target.username.style = errorStyle;
      event.target.password.style = errorStyle;
      event.target.email.style = errorStyle;
      event.target.firstName.style = errorStyle;
      event.target.lastName.style = errorStyle;
      event.target.phone.style = errorStyle;
    }
  };

  return (
    <section className='h-screen w-full flex justify-center '>
      <div className='w-6/12 h-3/6 bg-gradient-to-t from-slate-100 to-white mt-24 rounded-xl border-2 border-gray-300 overflow-hidden relative flex justify-center items-center'>
        <div
          className='w-full grid grid-cols-2 h-12 absolute top-0 left-0 z-10'
          onClick={(e) => toggleHandler(e)}
        >
          <button className='border border-b-2 border-r-2 border-b-gray-200  bg-gray-100 hover:bg-yellow-100 hover:border-b-8 hover:border-b-yellow-300 transition-all duration-300 ease-in-out'>
            Login
          </button>
          <button className='border border-b-2 border-b-gray-200  bg-gray-100 hover:bg-yellow-100 hover:border-b-8 hover:border-b-yellow-300 transition-all duration-300 ease-in-out'>
            Register
          </button>
        </div>
        {isLogin ? (
          <div className='w-full h-full flex flex-col justify-center items-center relative'>
            <form
              className='w-full flex flex-col justify-center items-center'
              onSubmit={(e) => {
                loginSubmitHandler(e);
              }}
            >
              <h2 className='text-2xl'>Login</h2>
              <div className='flex flex-col w-8/12 mb-6'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  className='border  border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>
              <div className='flex flex-col w-8/12 mb-6'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='border  border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>
              {loginLoading ? (
                <input
                  disabled
                  value='Loading...'
                  type='submit'
                  className='px-4 py-2 bg-gray-500 rounded-lg text-white'
                />
              ) : (
                <input
                  value='Login'
                  type='submit'
                  className='px-4 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 hover:border-b-8 hover:border-b-yellow-300 transition-all duration-300 ease-in-out'
                />
              )}
            </form>
            {loginData ? (
              <>
                {loginData.token ? (
                  <p className='absolute bottom-0 px-4 py-2 bg-green-300 rounded-t-xl animate-pulse'>
                    Success login {auth && auth.user}
                  </p>
                ) : (
                  <p className='absolute bottom-0 px-4 py-2 bg-red-300 rounded-t-xl animate-pulse'>
                    Error login
                  </p>
                )}
              </>
            ) : (
              <p className='absolute bottom-0 px-4 py-2 bg-gray-200 rounded-t-xl animate-pulse'>
                Lust press "Login", it will autocomplete input field
              </p>
            )}
          </div>
        ) : (
          <form
            className='w-full flex flex-col justify-center items-center'
            onSubmit={(e) => {
              registerSubmitHandler(e);
            }}
          >
            <h2 className='text-2xl'>Register</h2>
            <div className='grid grid-cols-2 w-11/12 gap-x-6'>
              <div className='flex flex-col mb-6'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  name='email'
                  className='border border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label htmlFor='username'>Last name</label>
                <input
                  type='text'
                  name='lastName'
                  className='border border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='border border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label htmlFor='email'>First name</label>
                <input
                  type='text'
                  name='firstName'
                  className='border border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>

              <div className='flex flex-col mb-6'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  className='border border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label htmlFor='password'>Phone</label>
                <input
                  type='text'
                  name='phone'
                  className='border border-gray-300  rounded-md focus:outline-none focus:border-gray-500 px-2 py-2 transition-all ease-in-out duration-200'
                />
              </div>
            </div>
            {registerLoading ? (
              <input
                disabled
                value='Loading...'
                type='submit'
                className='px-4 py-2 bg-gray-500 rounded-lg text-white'
              />
            ) : (
              <input
                value='Login'
                type='submit'
                className='px-4 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 hover:border-b-8 hover:border-b-yellow-300 transition-all duration-300 ease-in-out'
              />
            )}
            {registerData && (
              <p className='absolute bottom-0 px-4 py-2 bg-green-300 rounded-t-xl animate-pulse'>
                Added new user! ID: 22
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
