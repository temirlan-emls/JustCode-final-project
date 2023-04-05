import React from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useSelector } from 'react-redux';

export default function DropdownItem({ item, index }) {
  const cart = useSelector((state) => state.cart.cart);
  const { incrementQuantity, decrementQuantity, removeProduct } = useActions();

  const cartIncrDecrHandler = (event) => {
    event.preventDefault();

    if (event.target.innerText === '+') {
      incrementQuantity(item);
    } else {
      const currentItem = cart.find((cartItem) => cartItem.id === item.id);

      if (currentItem.quantity === 1) {
        removeProduct(item);
      } else {
        decrementQuantity(item);
      }
    }
  };

  return (
    <div className='w-full rounded-t-3xl ml-2 border-t-2 min-h-16 p-2 text-sm grid grid-cols-3 self-start bg-gradient-to-tl from-slate-100 to-white'>
      <NavLink to={`/${item.category}/${item.id}`}>
        <img src={item.image} alt={item.title} className='max-w-full' />
      </NavLink>
      <div className='col-span-2 ml-4 flex flex-col justify-around '>
        <NavLink
          to={`/${item.category}/${item.id}`}
          className='w-full text-start 2xl:text-lg md:text-md xs:text-xs'
        >
          {index + 1}) {item.title}
        </NavLink>
        <div className='w-full flex justify-center items-center 2xl:text-lg md:text-md xs:text-xs'>
          Quantity:{' '}
          <span className='mx-2 p-2 bg-amber-300 rounded-2xl '>
            {item.quantity}
          </span>
        </div>

        <div className='w-full flex justify-center'>
          <form
            onClick={(e) => cartIncrDecrHandler(e)}
            className='w-10/12 h-6 bg-yellow-200 grid grid-cols-2 rounded-lg overflow-hidden '
          >
            <button className='border-r-2 border-gray-500 hover:bg-amber-400'>
              -
            </button>
            <button className='hover:bg-amber-400'>+</button>
          </form>
        </div>
      </div>
    </div>
  );
}
