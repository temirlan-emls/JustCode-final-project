import React from 'react';
import { useGetAllProductsQuery } from '../store/fakeStoreApi/fakeStore.api';

export default function Search() {
  const { data } = useGetAllProductsQuery();

  const submitHandler = (event) => {
    event.preventDefault();
    data.filter((item) =>
      item.title
        .toLowerCase()
        .includes(event.target.searchData.value.toLowerCase())
    );
  };

  return (
    <div className='w-full h-16 mt-6'>
      <form
        className='w-full h-full'
        onSubmit={(event) => submitHandler(event)}
      >
        <input
          autoComplete='off'
          placeholder='Silicon power...'
          name='searchData'
          type='text'
          className='w-10/12 h-full border border-gray-300  rounded-tl-xl rounded-bl-xl border-r-0 focus:outline-none focus:border-gray-500 px-6 transition-all ease-in-out duration-200'
        />
        <input
          value='Search'
          type='submit'
          className='w-2/12 h-full rounded-tr-xl rounded-br-xl border border-l-0 border-gray-300 bg-yellow-300 font-semibold hover:bg-yellow-500 hover:border-gray-500 transition-all ease-in-out duration-200 focus:outline-none'
        />
      </form>
    </div>
  );
}
