import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookList: [],
  },
  reducers: {
    load: (state, action) => {
      state.bookList = action.payload.books;
    },
  },
});

export const { load } =
  bookSlice.actions;
export default bookSlice.reducer;
