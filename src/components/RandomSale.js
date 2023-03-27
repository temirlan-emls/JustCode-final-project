import React, { useEffect, useState } from 'react';
import { useGetProductQuery } from '../store/fakeStoreApi/fakeStore.api';
import ErrorComp from './ErrorComp';
import LoadingComp from './LoadingComp';
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

  console.log(data);
  return (
    <div className='w-full h-full relative border-2 border-gray-300 flex flex-col items-center justify-end'>
      {isError && <ErrorComp />}
      {isLoading && <LoadingComp />}
      {data && (
        <>
          {' '}
          <div className='w-28 h-10 bg-yellow-300 absolute top-0 left-0 flex justify-center items-center font-bold uppercase'>
            <p>Sales</p>
          </div>
          <div className='w-64 h-28 absolute top-0 right-0 p-6 flex flex-col items-end font-bold uppercase'>
            <p className='text-4xl mb-2 text-yellow-300'>
              {Math.floor(data.price * 0.5)} $
            </p>
            <div className='relative'>
              <p className='text-xl text-gray-400 font-thin'>{data.price} $</p>
              <div className='w-full h-[1px] bg-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12'></div>
            </div>
          </div>
          <div className='w-full flex flex-col items-center text-center'>
            <img
              src={data.image}
              alt={data.title}
              className='w-3/6  max-h-64 mb-6'
            />
            <p className='font-semibold w-4/5 mb-4'> {data.title}</p>
          </div>
          <div className='w-full h-1/6 bg-gray-200 flex flex-col justify-center items-center text-xl'>
            <p>Offer is valid until:</p>
            <p className='font-semibold text-yellow-600'>31.12.23</p>
          </div>
        </>
      )}
    </div>
  );
}
