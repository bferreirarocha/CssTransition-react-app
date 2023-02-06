import { configureStore } from "@reduxjs/toolkit";
import coverReducer from "./cover/slicer";

export default configureStore({
  reducer: {
    queryString: coverReducer,
  },
});
