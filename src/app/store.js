import { configureStore } from '@reduxjs/toolkit';
import { commentReducer } from '../components/comment/commentSlice';
import { postReducer } from '../components/post/postSlice';
import { postPageReducer } from '../pages/postpage/postPageSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    post: postReducer,
    postPage: postPageReducer
  },
});
