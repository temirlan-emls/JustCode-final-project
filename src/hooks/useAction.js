import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { likedActions } from '../store/liked/liked.slice';
import { loginActions } from '../store/login/login.slice';
import { cartActions } from './../store/cart/cart.slice';

const allActions = {
  ...likedActions,
  ...loginActions,
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
