import { useState, useEffect } from 'react';
import mapPoint from '../assets/mapPoint.png';
import { NavLink } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/fakeStoreApi/fakeStore.api';
import LoadingComp from './LoadingComp';
import ErrorComp from './ErrorComp';
import Logo from './Logo';
import CartComp from './CartComp';
import LikedCom from './LikedCom';
import LoginComp from './LoginComp';
import { useParams } from 'react-router-dom';

export default function Navbar() {
  const { category } = useParams();
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    if (category) {
      setActiveTab(category);
    } else {
      setActiveTab();
    }
  }, [category]);
  return (
    <nav className='w-full h-56'>
      <div className='w-full h-4/6 grid grid-cols-3 items-center'>
        <div className='flex justify-between font-bold lg:text-base md:text-xs sm:text-[12px] xs:text-[8px] tracking-wide'>
          <h2 className='border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out  flex items-center'>
            <NavLink to={'https://2gis.kz/almaty/'}>Stores</NavLink>
          </h2>
          <h2 className='border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out text-center'>
            <NavLink to={'https://cdek.kz/ru'}>Shipping and Payment</NavLink>
          </h2>
          <h2 className='border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out flex items-center'>
            <NavLink to={'/sales'}>Sales</NavLink>
          </h2>
        </div>
        <div>
          <Logo />
        </div>
        <div className='flex sm:justify-between lg:flex-row  items-center font-bold text-lg tracking-wide xs:flex-col xs:justify-center '>
          <h2 className='flex items-center border-b-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out  lg:text-base lg:w-3/6 md:text-xs sm:text-[12px] xs:text-[8px] xs:leading-3 xs:w-full xs:h-3/6 xs:p-0 xs:justify-center'>
            <img
              src={mapPoint}
              alt='mapPoint'
              className='lg:h-12 xs:h-8 md:h-10'
            />
            <NavLink to={'https://2gis.kz/almaty/firm/9429940000785873'}>
              Almaty,
              <br />
              st.Abay 52a
            </NavLink>
          </h2>
          <div className='w-3/6 flex justify-around xs:w-full xs:h-3/6 xs:p-0'>
            <CartComp />
            <LikedCom />
            <LoginComp />
          </div>
        </div>
      </div>
      <div className='w-full h-2/6 bg-gray-100 flex items-center justify-between rounded-xl overflow-hidden lg:text-lg xs:text-xs text-center'>
        {isError && <ErrorComp />}
        {isLoading && <LoadingComp />}
        {data &&
          data.map((item) => (
            <NavLink
              onClick={() => setActiveTab(item)}
              to={`/${item}`}
              key={item}
              className={`h-full w-full flex items-center justify-center hover:bg-yellow-100 hover:border-b-8 border-b-yellow-300 transition-all duration-300 ease-in-out capitalize font-normal ${
                activeTab === item
                  ? 'bg-yellow-100 border-b-8 border-b-yellow-300'
                  : ''
              }`}
            >
              {item}
            </NavLink>
          ))}
      </div>
    </nav>
  );
}
