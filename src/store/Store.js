import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "../Slice/auth.slice.js";
import videoReducer from "../Slice/video.slice.js";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    video: videoReducer,
  },
});

export default store;
