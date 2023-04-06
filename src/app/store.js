import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/zounter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
