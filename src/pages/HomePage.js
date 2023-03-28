import CarouselComp from './../components/CarouselComp';
import RandomSale from './../components/RandomSale';
import Search from './../components/Search';
import { useGetProductsByLimitQuery } from '../store/fakeStoreApi/fakeStore.api';
import ProductItem from './../components/ProductItem';
import ErrorComp from '../components/ErrorComp';
import LoadingComp from '../components/LoadingComp';

export default function HomePage() {
  const { data, isLoading, isError } = useGetProductsByLimitQuery(4);

  return (
    <section className='w-full mt-10 min-h-screen'>
      <div className='w-full grid grid-cols-3'>
        <div className='col-span-2'>
          <CarouselComp />
        </div>
        <div className='pl-6'>
          <RandomSale />
        </div>
      </div>
      <Search />
      <div className='mt-10 w-full h-96 grid grid-cols-4 gap-4'>
        {' '}
        {isError && <ErrorComp />}
        {isLoading && <LoadingComp />}{' '}
        {data && data.map((item) => <ProductItem key={item.id} item={item} />)}
      </div>
    </section>
  );
}
