import { configureStore } from "@reduxjs/toolkit";
import queryStringSlice from "./cover/slicer";

export default configureStore({
  reducer: {
    queryString: queryStringSlice,
  },
});
