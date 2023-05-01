import { configureStore } from '@reduxjs/toolkit';
import { commentReducer } from '../components/comment/commentSlice';
import { postReducer } from '../components/post/postSlice';
import { postsPageReducer } from '../pages/postspage/postsPageSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    post: postReducer,
    postsPage: postsPageReducer
  },
});
