import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videoGenre: null,
    videos: null,
  },
  reducers: {
    addMoviesGenre: (state, action) => {
      state.videoGenre = action.payload;
    },
    addAllVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addMoviesGenre, addAllVideos } = videoSlice.actions;
export default videoSlice.reducer;
