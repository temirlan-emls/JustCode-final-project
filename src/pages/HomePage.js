import CarouselComp from './../components/CarouselComp';
import RandomSale from './../components/RandomSale';
import Search from './../components/Search';
import { useGetProductsByLimitQuery } from '../store/fakeStoreApi/fakeStore.api';
import ProductItem from './../components/ProductItem';
import ErrorComp from '../components/ErrorComp';
import LoadingComp from '../components/LoadingComp';
import { useSetPageTitle } from './../hooks/useSetPageTitle';

export default function HomePage() {
  const { data, isLoading, isError } = useGetProductsByLimitQuery(4);

  useSetPageTitle('HOME PAGE');

  return (
    <section className='w-full mt-10 min-h-screen'>
      <div className='w-full md:grid md:gap-6 md:grid-cols-3 xs:flex xs:flex-col'>
        <div className='col-span-2'>
          <CarouselComp />
        </div>
        <div>
          <RandomSale />
        </div>
      </div>
      <Search />
      <div className='mt-10 mb-20 min-h-96 flex-col w-full flex justify-center items-center'>
        {isError && <ErrorComp />}
        {isLoading && <LoadingComp />}{' '}
        <div className='w-full h-full grid gap-4 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2'>
          {' '}
          {data &&
            data.map((item) => <ProductItem key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
