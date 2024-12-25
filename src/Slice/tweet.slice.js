import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userTweets: [],
  loading: false,
  error: null,
};

export const fetchTweets = createAsyncThunk(
  "tweets/fetchTweets",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/tweets/user/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const { data } = response.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        console.log(action);
        state.userTweets = action.payload?.userTweets;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchTweets.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export default tweetSlice.reducer;
