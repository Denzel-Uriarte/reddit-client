import { createSlice } from "@reduxjs/toolkit";


export const postPageSlice = createSlice({
  name: "post",
  initialState: {
    post: ""
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    }
  }
});

export const { setPost } = postPageSlice.actions;
export const selectPost = (state) => state.postPage.post;
export const postPageReducer = postPageSlice.reducer;