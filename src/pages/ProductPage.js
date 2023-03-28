import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useGetProductQuery } from '../store/fakeStoreApi/fakeStore.api';
import ErrorComp from '../components/ErrorComp';
import LoadingComp from '../components/LoadingComp';
import Cart from '../assets/cart.png';

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(id);

  console.log(data);
  return (
    <div className='mt-10'>
      {isError && <ErrorComp />}
      {isLoading && <LoadingComp />}
      {data && (
        <div className='w-full min-h-screen grid grid-cols-2'>
          <div className='flex flex-col'>
            <div>
              <p className='text-3xl'>{data.title}</p>
              <div className='w-8/12 mt-2 h-1 bg-yellow-300 rounded-lg'></div>
              <div className='w-7/12 mt-2 h-1 bg-yellow-300 rounded-lg'></div>
            </div>

            <img
              src={data.image}
              alt={data.title}
              className='h-3/6 self-center justify-self-center mt-12 transform hover:scale-105 transition-all duration-300 ease-in-out'
            />
          </div>
          <div className='flex flex-col '>
            <p className='text-6xl text-yellow-400 self-end bg-slate-800 px-4 py-2 rounded-tl-2xl rounded-br-2xl'>
              {data.price} $
            </p>
            <p className='my-12 text-xl'>{data.description}</p>
            <NavLink className='transform hover:scale-125 transition-all duration-300 ease-in-out w-2/12 text-center'>
              <img src={Cart} alt='cart' />
              Add to Cart
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
