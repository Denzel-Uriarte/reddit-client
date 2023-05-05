import { createSlice } from "@reduxjs/toolkit";


export const postsPageSlice = createSlice({
  name: "term",
  initialState: {
    term: "hot.json"
  },
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    }
  }
});

export const { setTerm } = postsPageSlice.actions;
export const selectTerm = (state) => state.postsPage.term;
export const postsPageReducer = postsPageSlice.reducer;