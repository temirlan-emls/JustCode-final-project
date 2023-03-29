import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { likedActions } from '../store/liked/liked.slice';
import { loginActions } from '../store/login/login.slice';

const allActions = {
  ...likedActions,
  ...loginActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
