import React from 'react';
import Cart from '../assets/cart.png';
import { useSelector } from 'react-redux';
import { useOutside } from '../hooks/useOutside';
import DropdownItem from './DropdownItem';
import { useActions } from '../hooks/useAction';

export default function CartComp({ isDropdown = true }) {
  const { ref, isShown, setIsShown } = useOutside(false, 'mouseover');
  const cart = useSelector((state) => state.cart.cart);

  const { clearCart } = useActions();
  const makeOrderHandler = () => {
    clearCart();
    alert('Order created (Joke)');
  };

  return (
    <div
      to={'/cart'}
      className='flex flex-col items-center justify-center relative py-4 border-t-4 border-transparent hover:border-yellow-300 transition-all duration-300 ease-in-out'
      ref={ref}
    >
      <img
        src={Cart}
        alt='cart'
        className={`transition-all duration-300 ease-in-out h-9 saturate-0 brightness-0 `}
        onMouseOver={() => setIsShown(true)}
      />
      {cart.length ? (
        <p className='text-sm absolute -right-3 bottom-2 px-2 py-1 rounded-full bg-yellow-300'>
          {cart.length}
        </p>
      ) : (
        ''
      )}
      {isDropdown && (
        <div
          className={`rounded-2xl flex flex-col items-center absolute w-96 max-h-80 top-12 overflow-hidden border-gray-200 overflow-y-scroll bg-white z-10 ${
            isShown && cart.length ? 'border-2 border-gray-300 block' : 'hidden'
          }`}
        >
          <p className='p-1'>CART</p>
          {cart.map((item, index) => (
            <DropdownItem item={item} key={item.id} index={index} />
          ))}
          <div>
            <button
              className='px-2 py-2 my-2 bg-yellow-200 rounded-lg hover:bg-amber-300 transition-all duration-300 ease-in-out'
              onClick={() => makeOrderHandler()}
            >
              Make order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
