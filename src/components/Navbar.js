import logo from '../assets/logo.png';
import mapPoint from '../assets/mapPoint.png';
import login from '../assets/login.png';
import cart from '../assets/cart.png';
import like from '../assets/like.png';
import { NavLink } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/fakeStoreApi/fakeStore.api';
import LoadingComp from './LoadingComp';
import ErrorComp from './ErrorComp';

export default function Navbar() {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  return (
    <div className='w-full h-56'>
      <div className='w-full h-4/6 grid grid-cols-3 items-center'>
        <div className='flex justify-between font-bold text-xl tracking-wide'>
          <h2 className='py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'>
            <NavLink to={'/stores'}>Stores</NavLink>
          </h2>
          <h2 className='py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'>
            <NavLink to={'/sales'}>Sales</NavLink>
          </h2>
          <h2 className='py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'>
            <NavLink to={'/shipping'}>Shipping and Payment</NavLink>
          </h2>
        </div>
        <div>
          <NavLink to={'/'} className='flex justify-center'>
            <img src={logo} alt='logo' className='w-4/6' />
          </NavLink>
        </div>
        <div className='flex justify-between items-center font-bold text-xl tracking-wide'>
          <h2 className='flex py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'>
            <img src={mapPoint} alt='mapPoint' className='h-12' />
            <NavLink to={'https://2gis.kz/almaty/firm/9429940000785873'}>
              Almaty, st.
              <br />
              Abay 52a
            </NavLink>
          </h2>
          <div className='w-3/6 flex justify-around'>
            <NavLink
              to={'/login'}
              className='flex flex-col items-center py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'
            >
              <img src={login} alt='login' className='h-8' />
              <p>Login</p>
            </NavLink>
            <NavLink
              to={'/liked'}
              className='flex flex-col items-center py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'
            >
              <img src={like} alt='login' className='h-8' />
              <p>Liked</p>
            </NavLink>
            <NavLink
              to={'/cart'}
              className='flex flex-col items-center relative py-4 border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'
            >
              <img src={cart} alt='login' className='h-8' />
              <p>Cart</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='w-full h-2/6 bg-gray-100 flex items-center justify-between rounded-lg overflow-hidden'>
        {isError && <ErrorComp />}
        {isLoading && <LoadingComp />}
        {data &&
          data.map((item) => (
            <NavLink
              key={item}
              className='h-full w-full flex items-center justify-center hover:bg-yellow-100 hover:border-b-8 border-b-yellow-300 transition-all duration-300 ease-in-out capitalize font-normal'
            >
              {item}
            </NavLink>
          ))}
      </div>
    </div>
  );
}
