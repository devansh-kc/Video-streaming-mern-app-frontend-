import { createSlice } from "@reduxjs/toolkit";
const initialSlice = { userData: null };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
