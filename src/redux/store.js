import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";
import configSlice from "./configSlice";
import videoSlice from "./videoSlice";
import loaderSlice from "./loaderSlice";

const appStore = configureStore({
  reducer: {
    authuser: userSlice,
    movies: movieSlice,
    search: searchSlice,
    config: configSlice,
    movievideos: videoSlice,
    load: loaderSlice,
  },
});

export default appStore;
