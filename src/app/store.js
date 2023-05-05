import { configureStore } from '@reduxjs/toolkit';
import { commentReducer } from '../components/comment/commentSlice';
import { postPageReducer } from '../pages/postpage/postPageSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    postPage: postPageReducer
  },
});
