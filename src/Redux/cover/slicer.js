import { createSlice } from "@reduxjs/toolkit";
export const coverSlice = createSlice({
  name: "queryString",
  initialState: {
    cover: "Rdn",
    language: "en",
  },
  reducers: {
    setCover: (state, action) => {
      state.cover = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      console.log("setLanguage " + action.payload);
    },
  },
});

export const { setCover, setLanguage } = coverSlice.actions;

export const selectCover = (state) => state.queryString.cover;
export const selectLaguage = (state) => state.queryString.language;

export default coverSlice.reducer;
