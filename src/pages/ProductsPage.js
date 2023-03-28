import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useGetProductInCategoryQuery } from '../store/fakeStoreApi/fakeStore.api';
import ErrorComp from './../components/ErrorComp';
import LoadingComp from './../components/LoadingComp';
import ProductItem from '../components/ProductItem';
export default function ProductsPage() {
  const { category } = useParams();
  const { data, isLoading, isError } = useGetProductInCategoryQuery(category);
  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: 100,
  });
  const [ratingMinMax, setRatingMinMax] = useState({
    min: 0,
    max: 100,
  });
  const [priceCurr, setPriceCurr] = useState();
  const [ratingCurr, setRatingCurr] = useState();

  useEffect(() => {
    const priceArr = [];
    const ratingArr = [];

    data?.forEach((item) => {
      priceArr.push(item.price);
      ratingArr.push(item.rating.rate);
    });

    setPriceMinMax({
      min: Math.min.apply(Math, priceArr),
      max: Math.max.apply(Math, priceArr),
    });

    setRatingMinMax({
      min: Math.min.apply(Math, ratingArr),
      max: Math.max.apply(Math, ratingArr),
    });
  }, [data]);

  const onPriceChangeHandle = (event) => {
    setPriceCurr(event.target.value);
  };
  const onRatingChangeHandle = (event) => {
    setRatingCurr(event.target.value);
  };
  return (
    <>
      <div className='grid grid-cols-4'>
        <div className='col-span-1 h-96 border mt-10 mr-6 p-6'>
          <p className='text-4xl font-bold'>Filter</p>
          <form>
            {' '}
            <div className='mt-10'>
              <label htmlFor='price'>Price</label>
              <br />
              <input
                type='range'
                name='price'
                step='0.1'
                className='w-full'
                min={priceMinMax.min}
                max={priceMinMax.max}
                onChange={(event) => {
                  onPriceChangeHandle(event);
                }}
              />
              <div className='flex justify-between'>
                <p className='border-b-2 p-2 border-b-yellow-300'>
                  {priceMinMax.min} $
                </p>
                <p className='p-2 bg-black text-yellow-300'>
                  {priceCurr && priceCurr + '$'}
                </p>
                <p className='border-b-2 p-2 border-b-yellow-300'>
                  {priceMinMax.max} $
                </p>
              </div>
            </div>
            <div className='mt-10'>
              <label htmlFor='rating'>Rating</label>
              <br />
              <input
                type='range'
                name='rating'
                step='0.1'
                className='w-full'
                min={ratingMinMax.min}
                max={ratingMinMax.max}
                onChange={(event) => {
                  onRatingChangeHandle(event);
                }}
              />
              <div className='flex justify-between'>
                <p>{ratingMinMax.min} $</p>
                <p>{ratingCurr && ratingCurr + '$'} </p>
                <p>{ratingMinMax.min} $</p>
              </div>
            </div>
          </form>
        </div>
        <div className='col-span-3'>
          {' '}
          {isError && <ErrorComp />}
          {isLoading && <LoadingComp />}{' '}
          <div className='w-full grid grid-cols-3 gap-6 mt-10'>
            {' '}
            {data &&
              data.map((item) => <ProductItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}
