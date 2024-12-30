import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "../Slice/auth.slice.js";
import videoReducer from "../Slice/video.slice.js";
import tweetReducer from "../Slice/tweet.slice.js";
import playListReducer from "../Slice/playlist.slice.js";
const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    video: videoReducer,
    tweet: tweetReducer,
    playList: playListReducer,
  },
});

export default store;
