import React, { useState } from 'react';
import { useGetAllProductsQuery } from '../store/fakeStoreApi/fakeStore.api';
import { useOutside } from '../hooks/useOutside';
import SearchItem from './SearchItem';

export default function Search() {
  const { ref, isShown, setIsShown } = useOutside(false, 'click');

  const { data } = useGetAllProductsQuery();
  const [filteredData, setFilteredData] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (event.target.value.length >= 3) {
      setFilteredData(
        data.filter((item) =>
          item.title.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredData('');
    }
  };
  return (
    <div className='w-full h-16 mt-6'>
      <form
        className='w-full h-full flex justify-around relative'
        onChange={(event) => submitHandler(event)}
        ref={ref}
        onMouseOver={() => setIsShown(true)}
      >
        <input
          autoComplete='off'
          placeholder='Silicon power...'
          name='searchData'
          type='text'
          className={`w-11/12 h-full border rounded-xl focus:outline-none focus:bg-yellow-50 hover:bg-yellow-50 border-gray-500 px-6 ${
            isShown && filteredData
              ? 'border-b-0 rounded-b-none bg-yellow-50'
              : ''
          }`}
        />
        {filteredData && (
          <div
            className={` ${
              isShown && filteredData ? '' : 'hidden'
            } absolute w-11/12 h-96 p-4 gap-4 bg-gradient-to-b from-yellow-50 to-white z-30 left-13 top-16 border border-gray-500 border-t-0 rounded-b-xl overflow-hidden overflow-x-scroll flex`}
          >
            <div className='flex gap-4 h-full'>
              {filteredData && filteredData.length ? (
                filteredData.map((item) => (
                  <div className='w-64' key={item.id}>
                    {' '}
                    <SearchItem item={item} />
                  </div>
                ))
              ) : (
                <p className='w-full text-center text-5xl self-center'>
                  Nothing found
                </p>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
