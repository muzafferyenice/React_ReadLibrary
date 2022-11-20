import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";
import bookSlice from "./slices/BookSlice";
import bookSearchSlice from "./slices/booksSearch-slice";
import counterSlice from "./slices/counter-slice";
import searchBookCatSlice from "./slices/search-book-cat";
export default configureStore({
  reducer: {
    auth: authSlice,
    book: bookSlice,
    counter: counterSlice,
    booksearch: bookSearchSlice,
    searchC: searchBookCatSlice,
  },
});
