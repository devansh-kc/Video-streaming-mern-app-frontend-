import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "../Slice/auth.slice.js";
import videoReducer from "../Slice/video.slice.js";
import tweetReducer from "../Slice/tweet.slice.js";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    video: videoReducer,
    tweet: tweetReducer,
  },
});

export default store;
