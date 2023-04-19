import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    replies: [{
      id: 1,
      name: 'denzel',
      created_utc: 'infinity ago',
      body: 'hello everyone'
    },
    {
      id: 2,
      name: 'diego',
      created_utc: 'infinity ago',
      body: 'meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow'
    }]
  },
  reducers: {
    setReplies: (state, action) => {
      const { id, name, created_utc, body } = action.payload;
      state.replies.push({
        id: id,
        name: name,
        created_utc: created_utc,
        body: body});
    }
  }
});


export const { setReplies } = commentSlice.actions;
export const selectReplies = (state) => state.comment.replies;
export const commentReducer = commentSlice.reducer;
