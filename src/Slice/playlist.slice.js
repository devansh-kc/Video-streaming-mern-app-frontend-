import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userPlayList: [],
  loading: false,
  error: null,
};

export const fetchUserPlayList = createAsyncThunk(
  "playList/fetchOwnerPlayList",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/playlist/user/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const { data } = response.data;

      return data;
    } catch (error) {
      const { message } = error?.response?.data;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchUserPlayListById = createAsyncThunk(
  "playList/fetchPlayListById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/playlist/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const { data } = response.data;
      console.log(data);

      return data;
    } catch (error) {
      const { message } = error?.response?.data;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const PlayListSlice = createSlice({
  name: "playList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPlayList.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPlayList.fulfilled, (state, action) => {
        state.loading = false;

        state.userPlayList = action.payload;
        state.error = null;
      })
      .addCase(fetchUserPlayList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchUserPlayListById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPlayListById.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;

        state.userPlayList = action.payload;
        state.error = null;
      })
      .addCase(fetchUserPlayListById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default PlayListSlice.reducer;
