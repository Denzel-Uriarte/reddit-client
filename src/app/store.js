import { configureStore } from '@reduxjs/toolkit';
import { postPageReducer } from '../pages/postpage/postPageSlice';

export const store = configureStore({
  reducer: {
    postPage: postPageReducer
  },
});
