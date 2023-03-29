import Cart from '../assets/cart.png';
import React, { useState, useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useSelector } from 'react-redux';
import { useOutside } from '../hooks/useOutside';

export default function LikeButtonComp({ item }) {
  const { ref, isShown, setIsShown } = useOutside(false, 'mouseover');
  const auth = useSelector((state) => state.login.login);
  const cart = useSelector((state) => state.cart.cart);

  const [isInCart, setIsInCart] = useState(false);
  const [canUseCart, setCanUseCart] = useState(false);

  useEffect(() => {
    auth.id ? setCanUseCart(true) : setIsInCart(false);
    if (cart.length) {
      const temp = cart.find((oneItem) => oneItem.title === item.title);
      if (temp) {
        if (temp.title === item.title) {
          setIsInCart(true);
        } else {
          setIsInCart(false);
        }
      }
    }
  }, [cart, item]);

  const { removeProduct, addProduct } = useActions();
  return (
    <>
      {' '}
      {canUseCart ? (
        <button
          onClick={() => {
            if (isInCart) {
              setIsInCart(false);
              removeProduct(item);
            } else {
              setIsInCart(true);
              addProduct(item);
            }
          }}
        >
          <img
            src={Cart}
            alt='like'
            className={`h-8 hover:scale-125 transition-all duration-300 ease-in-out ${
              isInCart ? '' : 'saturate-0 brightness-0'
            }`}
          />
        </button>
      ) : (
        <button className='relative flex' ref={ref}>
          <img
            src={Cart}
            alt='like'
            className={`h-8 saturate-25 contrast-50`}
            onMouseOver={() => setIsShown(true)}
          />
          <div
            className={`${
              isShown ? 'block' : 'hidden'
            } absolute z-30 -top-12 -left-10 w-28 shadow-md`}
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
