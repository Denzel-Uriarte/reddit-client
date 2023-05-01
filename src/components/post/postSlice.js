import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    comments: [{
      name: 'gatopan',
      created_utc: 2453245345,
      body: 'metodologia gatopan',
      score: 1234
    },
    {
      name: 'wezar',
      created_utc: 4534534535,
      body: 'gif',
      score: 1234
    }]
  },
  reducers: {
    setComments: (state, action) => {
      const { name, created_utc, body, score } = action.payload;
      state.comments.push({
        name: name,
        created_utc: created_utc,
        body: body,
        score: score
      });
    }
  }
});


export const { setComments } = postSlice.actions;
export const selectComments = (state) => state.post.comments;
export const postReducer = postSlice.reducer;
