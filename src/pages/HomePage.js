import CarouselComp from './../components/CarouselComp';
import RandomSale from './../components/RandomSale';
import Search from './../components/Search';

export default function HomePage() {
  return (
    <section className='w-full mt-10'>
      <div className='w-full h-1/5 grid grid-cols-3'>
        <div className='col-span-2'>
          <CarouselComp />
        </div>
        <div className='pl-6'>
          <RandomSale />
        </div>
      </div>

      <Search />
    </section>
  );
}
