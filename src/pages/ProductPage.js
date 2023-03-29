import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../store/fakeStoreApi/fakeStore.api';
import ErrorComp from '../components/ErrorComp';
import LoadingComp from '../components/LoadingComp';
import LikeButtonComp from '../components/LikeButtonComp';
import CartButtonComp from '../components/CartButtonComp';
import { useSetPageTitle } from './../hooks/useSetPageTitle';
import PriceComp from '../components/PriceComp';

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(id);
  useSetPageTitle(`Product #${id}`, 'Product');

  return (
    <div className='mt-10 w-full min-h-screen grid grid-cols-2 gap-6'>
      {isError && (
        <>
          <ErrorComp />
          <ErrorComp />
        </>
      )}
      {isLoading && (
        <>
          <LoadingComp />
          <LoadingComp />
        </>
      )}
      {data && (
        <>
          <div className='flex flex-col'>
            <img
              src={data.image}
              alt={data.title}
              className='h-3/6 self-center justify-self-center mt-12 transform hover:scale-105 transition-all duration-300 ease-in-out'
            />
          </div>
          <div className='flex flex-col'>
            <div>
              <div className='grid grid-cols-12'>
                <p className='text-3xl col-span-10'>{data.title}</p>
                <div className='flex justify-around items-center col-span-2'>
                  <LikeButtonComp item={data} />
                  <CartButtonComp item={data} />
                </div>
              </div>

              <div className='w-8/12 mt-2 h-1 bg-yellow-300 rounded-lg'></div>
              <div className='w-7/12 mt-2 h-1 bg-yellow-300 rounded-lg'></div>
            </div>
            <p className='my-12 text-xl'>{data.description}</p>
            <p className='text-6xl text-yellow-400 self-end bg-slate-800 px-4 py-2 rounded-tl-2xl rounded-br-2xl'>
              <PriceComp price={data.price} />
            </p>
          </div>
        </>
      )}
    </div>
  );
}
