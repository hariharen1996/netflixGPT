import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    searchResult: null,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    addMovieSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { toggleSearchView, addMovieSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
