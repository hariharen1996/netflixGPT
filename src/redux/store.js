import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
  reducer: {
    authuser: userSlice,
    movies: movieSlice,
  },
});

export default appStore;
