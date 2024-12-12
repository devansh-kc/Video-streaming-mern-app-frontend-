import { createSlice } from "@reduxjs/toolkit";
const loadFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);

    if (serializedData === null) return null;
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Could not load data from localStorage", error);
    return null;
  }
};

const initialState = {
  userInfo: loadFromLocalStorage("user") || null,
};
export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    userLogOut: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInformation");
    },
    totalNotification: (state, action) => {
      state.userNotification = action.payload;
    },
    decreaseNotificationCount: (state, action) => {
      state.userNotification = action.payload;
    },
  },
});

export const {
  userLogin,
  userLogOut,
  totalNotification,
  decreaseNotificationCount,
} = UserSlice.actions;

export default UserSlice.reducer;
