import { createSlice } from "@reduxjs/toolkit";

export const searchBookCatSlice = createSlice({
    name: "searchC",
    initialState: {
        cat: "Book",
        text: "",

    },
    reducers: {
        SetSearchCat: (state, action) => {
            state.cat = action.payload;
        },
        SetSearchText: (state, action) => {
            state.text = action.payload;
        },



    },
});

// reducer isimleri ile aynı olacak şekilde action lar otomatik oluşturulur
// ve export edilir
export const { SetSearchCat, SetSearchText } = searchBookCatSlice.actions;

// reducer export edilir.
export default searchBookCatSlice.reducer;