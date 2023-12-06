import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: true,
  },
  reducers: {
    addLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
