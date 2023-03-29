import React, { useEffect, useState } from 'react';
import { useGetProductQuery } from '../store/fakeStoreApi/fakeStore.api';
import ErrorComp from './ErrorComp';
import LoadingComp from './LoadingComp';
import { NavLink } from 'react-router-dom';
import PriceComp from './PriceComp';

export default function RandomSale() {
  const [randomInt, setRandomInt] = useState(1);
  const { data, isLoading, isError } = useGetProductQuery(randomInt);

  useEffect(() => {
    setRandomInt(getRandomInt(1, 20));
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className='w-full h-full relative border-2 border-gray-300 flex flex-col items-center justify-end overflow-hidden rounded-xl'>
      {isError && <ErrorComp />}
      {isLoading && <LoadingComp />}
      {data && (
        <>
          {' '}
          <NavLink
            to={'/sales'}
            className='w-28 h-10 rounded-br-xl bg-yellow-300 absolute top-0 left-0 flex justify-center items-center font-bold uppercase p-0 hover:h-12 hover:w-32 hover:text-xl transition-all duration-300 ease-in-out'
          >
            <p>Sales</p>
          </NavLink>
          <div className='w-64 h-28 absolute top-0 right-0 p-6 flex flex-col items-end font-bold uppercase'>
            <p className='text-4xl mb-2 text-amber-500'>
              <PriceComp price={data.price * 0.5} />
            </p>
            <div className='relative'>
              <p className='text-xl text-gray-400 font-thin'>
                <PriceComp price={data.price} />
              </p>
              <div className='w-full h-[1px] bg-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12'></div>
            </div>
          </div>
          <NavLink
            className='w-full flex flex-col items-center text-center transform hover:scale-110 transition-all duration-300 ease-in-out'
            to={`/${data.category}/${data.id}`}
          >
            {' '}
            <img
              src={data.image}
              alt={data.title}
              className='w-3/6  max-h-64 mb-6'
            />
            <p className='font-semibold w-4/5 mb-4'> {data.title}</p>
          </NavLink>
          <div className='w-full h-1/6 hover:h-1/5 border-t-2 border-gray-300 bg-gray-100 flex flex-col justify-center items-center text-xl rounded-t-xl  hover:text-2xl  transition-all ease-in-out duration-200'>
            <p>Offer is valid until:</p>
            <p className='font-semibold text-amber-600'>31.12.23</p>
          </div>
        </>
      )}
    </div>
  );
}
