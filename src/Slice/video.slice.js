import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk(
  "video/fetchDetails",
  async (id) => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/videos/${id}`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response.data.data[0];
  }
);
export const fetchComments = createAsyncThunk(
  "video/fetchComments",
  async (id) => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/comments/${id}`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response.data.data;
  }
);

export const addComment = createAsyncThunk(
  "video/addComment",
  async ({ id, content }) => {
    const response = await axios.post(
      `http://localhost:8000/api/v1/comments/${id}`,
      { content },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response.data.data;
  }
);

export const addLike = createAsyncThunk(
  "video/addLike",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/likes/toggle/v/${id}`,
        {}, // Add body if needed, here it's an empty object
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // For sending cookies with the request
        }
      );
      return response.data; // Return the data to be handled in the extraReducers
    } catch (error) {
      // Reject with the error message
      //   console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoDetails: null,
    comments: [],
    likes: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.videoDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addComment.pending, (state, action) => {
        state.comments.push(action.payload);
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.loading = false;
        state.error = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addLike.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.loading = false;
        state.likes = action.payload.likes;
        state.error = null;
      })
      .addCase(addLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default videoSlice.reducer;
