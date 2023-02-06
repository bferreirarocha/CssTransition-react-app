import { createSlice } from "@reduxjs/toolkit";
const queryStringSlice = createSlice({
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

export const { setCover, setLanguage } = queryStringSlice.actions;
export const selectCover = (state) => state.queryString.cover;
export const selectLaguage = (state) => state.queryString.language;

export default queryStringSlice.reducer;
