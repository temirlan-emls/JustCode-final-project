import './CategoryPage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductInCategoryQuery } from '../store/fakeStoreApi/fakeStore.api';
import { useSetPageTitle } from './../hooks/useSetPageTitle';
import ErrorComp from '../components/ErrorComp';
import LoadingComp from '../components/LoadingComp';
import ProductItem from '../components/ProductItem';
import PriceComp from '../components/PriceComp';

export default function CategoryPage() {
  ///////////////////////
  const { category } = useParams();
  useSetPageTitle(category.toUpperCase(), 'Category');
  ///////////////////////
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

    setRatingCurr(ratingMinMax.max);
    setPriceCurr(priceMinMax.max);
  }, [data]);

  useEffect(() => {
    setRatingCurr(ratingMinMax.max);
    setPriceCurr(priceMinMax.max);
  }, [ratingMinMax, priceMinMax]);
  ///////////////////////
  const onPriceChangeHandle = (event) => {
    setPriceCurr(event.target.value);
  };
  const onRatingChangeHandle = (event) => {
    setRatingCurr(event.target.value);
  };
  ///////////////////////
  const [sortType, setSortType] = useState('price');
  const selectFromHandler = (event) => {
    if (event.target.value === 'Lowest Price') {
      setSortType('price');
    } else if (event.target.value === 'Highest Price') {
      setSortType('-price');
    } else if (event.target.value === 'Lowest Rating') {
      setSortType('exRate');
    } else if (event.target.value === 'Highest Rating') {
      setSortType('-exRate');
    }
  };
  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  ///////////////////////
  const [pageSearchInfo, setPageSearchInfo] = useState();
  const searchInPageHandler = (event) => {
    setPageSearchInfo(event.target.value);
  };

  return (
    <div className='grid grid-cols-4 mb-20'>
      <div className='col-span-1 h-96 border border-gray-300 mt-10 mr-6 p-6 rounded-xl bg-gray-50'>
        <p className='text-4xl font-bold'>Filter</p>
        {isError && <ErrorComp />}
        {isLoading && <LoadingComp />}
        {data && (
          <form>
            {' '}
            <div className='mt-10'>
              <label htmlFor='price'>Price</label>
              <br />
              <input
                type='range'
                name='price'
                step='0.01'
                className='w-full'
                min={priceMinMax.min}
                max={priceMinMax.max}
                onChange={(event) => {
                  onPriceChangeHandle(event);
                }}
              />
              <div className='flex justify-between'>
                <p className='border-b-2 p-2 border-b-yellow-300'>
                  <PriceComp price={priceMinMax.min} />
                </p>
                {priceCurr && (
                  <p className='p-2 bg-yellow-900 text-yellow-300 rounded-lg'>
                    <PriceComp price={priceCurr} />
                  </p>
                )}

                <p className='border-b-2 p-2 border-b-yellow-300'>
                  <PriceComp price={priceMinMax.max} />
                </p>
              </div>
            </div>
            <div className='mt-10'>
              <label htmlFor='rating'>Rating</label>
              <br />
              <input
                type='range'
                name='rating'
                step='0.01'
                className='w-full'
                min={ratingMinMax.min}
                max={ratingMinMax.max}
                onChange={(event) => {
                  onRatingChangeHandle(event);
                }}
              />
              <div className='flex justify-between'>
                <p className='border-b-2 p-2 border-b-yellow-300'>
                  {ratingMinMax.min}
                  <PriceComp price={ratingCurr} />
                </p>
                {ratingCurr && (
                  <p className='p-2 bg-yellow-900 text-yellow-300 rounded-lg'>
                    {ratingCurr}
                  </p>
                )}

                <p className='border-b-2 p-2 border-b-yellow-300'>
                  {ratingMinMax.max}
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
      <div className='col-span-3 min-h-screen'>
        <div className='mt-10 mb-6 flex justify-between'>
          <form onChange={(e) => searchInPageHandler(e)}>
            {' '}
            <input
              type='text'
              name='searchInPage'
              placeholder='Search In Category...'
              className='px-2 py-1 border border-gray-400 rounded-md'
            />
          </form>
          <p className='text-xl font-semibold'>{category.toUpperCase()}</p>
          <form onChange={(e) => selectFromHandler(e)}>
            {' '}
            <select className='px-2 py-1 border border-gray-400 rounded-md'>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Lowest Rating</option>
              <option>Highest Rating</option>
            </select>
          </form>
        </div>
        {isError && <ErrorComp />}
        {isLoading && <LoadingComp />}{' '}
        <div className='w-full grid grid-cols-3 gap-6'>
          {' '}
          {data &&
            data
              .filter((item) => item.price <= priceCurr)
              .filter((item) => item.rating.rate <= ratingCurr)
              .filter((item) => {
                if (pageSearchInfo) {
                  return item.title
                    .toLowerCase()
                    .includes(pageSearchInfo.toLowerCase());
                }
                return item;
              })
              .map((item) => {
                return { ...item, exRate: item.rating.rate };
              })
              .sort(dynamicSort(sortType))
              .map((item) => <ProductItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}
