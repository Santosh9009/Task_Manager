import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { fetchUser, login, signup } from "@/services/auth/Authapi";

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

// Helper function to extract error message
const handleError = (error: unknown): string => {
  return error instanceof Error ? error.message : "An unknown error occurred";
};

// Async thunk for fetching current user
export const fetchCurrentUser = createAsyncThunk<User, void, { rejectValue: string }>(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchUser();
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

// Generic login/signup function
const handleAuth = async (authFunc: Function, userDetails: any) => {
  const response = await authFunc(userDetails);
  if (response.token) {
    Cookies.set("token", response.token);
    return response.user;
  }
  throw new Error("Token missing");
};

// Async thunk for logging in
export const loginUser = createAsyncThunk<User, { email: string; password: string }, { rejectValue: string }>(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      return await handleAuth(login, credentials);
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

// Async thunk for signing up
export const signupUser = createAsyncThunk<User, { email: string; password: string; username: string }, { rejectValue: string }>(
  "auth/signupUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      return await handleAuth(signup, userDetails);
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

// Async thunk for logging out
export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      Cookies.remove("token");
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed";
      })
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Sign-up failed";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Logout failed";
      });
  },
});

export default authSlice.reducer;
