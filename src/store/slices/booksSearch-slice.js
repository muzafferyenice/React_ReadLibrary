import { createSlice } from "@reduxjs/toolkit";

export const bookSearchSlice = createSlice({
    name: "booksearch",
    initialState: {
        book: [],
    },
    reducers: {
        setBook: (state, action) => {
            state.book = action.payload;
        },
    },
});

export const { setBook } = bookSearchSlice.actions;
export default bookSearchSlice.reducer;
