import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    authuser: userSlice,
    movies: movieSlice,
    search: searchSlice,
    config: configSlice,
  },
});

export default appStore;
