import { createSlice } from "@reduxjs/toolkit";
export const coverSlice = createSlice({
  name: "cover",
  initialState: {
    value: "Rdn",
  },
  reducers: {
    setCover: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCover } = coverSlice.actions;

export const selectCover = (state) => state.cover.value;

export default coverSlice.reducer;
