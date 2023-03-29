import mapPoint from '../assets/mapPoint.png';
import { NavLink } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/fakeStoreApi/fakeStore.api';
import LoadingComp from './LoadingComp';
import ErrorComp from './ErrorComp';
import Logo from './Logo';
import CartComp from './CartComp';
import LikedCom from './LikedCom';
import LoginComp from './LoginComp';

export default function Navbar() {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  return (
    <nav className='w-full h-56'>
      <div className='w-full h-4/6 grid grid-cols-3 items-center'>
        <div className='flex justify-between font-bold text-xl tracking-wide'>
          <h2 className='py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out  flex items-center'>
            <NavLink to={'/stores'}>Stores</NavLink>
          </h2>
          <h2 className='py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out text-center line leading-5'>
            <NavLink to={'/shipping'}>
              Shipping
              <br />
              and
              <br />
              Payment
            </NavLink>
          </h2>
          <h2 className='py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out flex items-center'>
            <NavLink to={'/sales'}>Sales</NavLink>
          </h2>
        </div>
        <div>
          <Logo />
        </div>
        <div className='flex justify-between items-center font-bold text-xl tracking-wide'>
          <h2 className='flex py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'>
            <img src={mapPoint} alt='mapPoint' className='h-12' />
            <NavLink to={'https://2gis.kz/almaty/firm/9429940000785873'}>
              Almaty,
              <br />
              st.Abay 52a
            </NavLink>
          </h2>
          <div className='w-3/6 flex justify-around'>
            <LoginComp />
            <LikedCom />
            <CartComp />
          </div>
        </div>
      </div>
      <div className='w-full h-2/6 bg-gray-100 flex items-center justify-between rounded-xl overflow-hidden'>
        {isError && <ErrorComp />}
        {isLoading && <LoadingComp />}
        {data &&
          data.map((item) => (
            <NavLink
              to={`/${item}`}
              key={item}
              className='h-full w-full flex items-center justify-center hover:bg-yellow-100 hover:border-b-8 border-b-yellow-300 transition-all duration-300 ease-in-out capitalize font-normal'
            >
              {item}
            </NavLink>
          ))}
      </div>
    </nav>
  );
}
