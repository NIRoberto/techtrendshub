import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios/axios";
const initialState = {
  isLoggedIn: false,
  userData: {},
  error: "",
};
const setSession = (res) => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.setItem("token", res.data.token);
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
  } else {
    sessionStorage.setItem("token", res.data.token);
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
  }
};
export const login = createAsyncThunk("user/login", async (initialState) => {
  try {
    const response = await axios.post("/signin", initialState);
    setSession(response);
    window.location.reload(true);
    return response;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const signup = createAsyncThunk("user/signup", async (initialState) => {
  try {
    const response = await axios.post("/signup", initialState);
    setSession(response);
    window.location.reload(true);
    return response;
  } catch (error) {
    console.log(error.response);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
  extraReducers(builders) {
    builders
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.user.isLoggedIn = false;
        state.user.error = action.payload;
        console.log(action.payload);
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user.isLoggedIn = true;
        state.user.error = action.payload.data;
      });
  },
});

export const userStateError = (state) => state?.error;
export const allUserState = (state) => state.user;

export default userSlice.reducer;
