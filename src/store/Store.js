import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "../Slice/auth.slice.js";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});

export default store;
