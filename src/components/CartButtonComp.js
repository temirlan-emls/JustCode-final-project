import Cart from '../assets/cart.png';
import CartFull from '../assets/cart2.png';
import React, { useState, useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useSelector } from 'react-redux';
import { useOutside } from '../hooks/useOutside';

export default function CartButtonComp({ item }) {
  const { ref, isShown, setIsShown } = useOutside(false, 'mouseover');
  const auth = useSelector((state) => state.login.login);
  const cart = useSelector((state) => state.cart.cart);

  const [isInCart, setIsInCart] = useState(false);
  const [canUseCart, setCanUseCart] = useState(false);

  useEffect(() => {
    auth.id ? setCanUseCart(true) : setCanUseCart(false);
    const currentItem = cart.find((cartItem) => cartItem.title === item.title);

    if (currentItem) {
      if (currentItem.title === item.title) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    } else {
      setIsInCart(false);
    }
  }, [cart, auth, item]);

  const { removeProduct, addProduct } = useActions();
  return (
    <>
      {' '}
      {canUseCart ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            if (isInCart) {
              removeProduct(item);
              setIsInCart(false);
            } else {
              addProduct(item);
              setIsInCart(true);
            }
          }}
        >
          <img
            src={isInCart ? CartFull : Cart}
            alt='like'
            className={`lg:h-9 md:h-7  xs:h-6 hover:scale-125 transition-all duration-500 ease-in-out ${
              isInCart ? 'saturate-25 brightness-75' : 'saturate-0 brightness-0'
            }`}
          />
        </button>
      ) : (
        <button className='relative flex' ref={ref}>
          <img
            src={Cart}
            alt='like'
            className={`lg:h-9 md:h-7 xs:h-6 saturate-0 `}
            onClick={(e) => e.preventDefault()}
            onMouseOver={(e) => setIsShown(true)}
          />
          <div
            className={`${
              isShown ? 'block' : 'hidden'
            } absolute z-30 -top-10 -left-10 w-28 shadow-md`}
          >
            <p className='px-2 py-1 w-full bg-yellow-200 rounded-lg'>
              Register first
            </p>
          </div>
        </button>
      )}
    </>
  );
}
