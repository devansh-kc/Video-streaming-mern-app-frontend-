import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  userTweets: [],
  loading: false,
  error: null,
  ownerInformation: null,
  likes: null,
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

export const createTweet = createAsyncThunk(
  "tweets/createTweet",
  async ({ content }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/tweets",
        {
          content: content,
        },
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

export const addTweetLike = createAsyncThunk(
  "tweets/addLike",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/likes/toggle/t/${id}`,
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      const { message } = error?.response?.data;

      return thunkAPI.rejectWithValue(message);
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
        state.userTweets = action.payload?.userTweets;
        state.ownerInformation = action.payload?.tweetOwner[0];
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchTweets.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(createTweet.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createTweet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.userTweets.push(action.payload);
      })
      .addCase(createTweet.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(addTweetLike.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addTweetLike.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.likes = action.payload;
      })
      .addCase(addTweetLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default tweetSlice.reducer;
