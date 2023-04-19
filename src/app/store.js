import { configureStore } from '@reduxjs/toolkit';
import { commentReducer } from '../components/comment/commentSlice';


export const store = configureStore({
  reducer: {
    comment: commentReducer
  },
});
