import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './../components/ProductItem';

export default function LikedPage() {
  const liked = useSelector((state) => state.liked.liked);
  return (
    <div className='w-full min-h-screen flex flex-col'>
      {!liked.length && (
        <h2 className='text-4xl font-bold mt-10'>No liked item(s)</h2>
      )}

      {!!liked.length && (
        <>
          <h2 className='text-4xl font-bold mt-10'>
            Liked items list - {liked.length} items
          </h2>
          <div className='mt-6 mb-20 w-full grid md:grid-cols-4 md:gap-4 min-h-3/6 xs:gap-2 xs:grid-cols-2'>
            {liked.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
