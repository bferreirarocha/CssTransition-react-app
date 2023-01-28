import { configureStore } from "@reduxjs/toolkit";
import coverReducer from "./cover/slicer";

export default configureStore({
  reducer: {
    cover: coverReducer,
  },
});
