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
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
};

// In your auth slice
export const fetchCurrentUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("auth/fetchCurrentUser", async (_, { rejectWithValue }) => {
  try {
    const user = await fetchUser(); // Assuming this is your API call
    return user;
  } catch (error) {
    return rejectWithValue(handleError(error));
  }
});

// Async thunk for logging in
export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await login(credentials);
    console.log("Login Response:", response); // Add this line

    if (response.token) {
      Cookies.set("token", response.token);
      return response.user
    } else {
      return rejectWithValue("Token missing");
    }
  } catch (error) {
    return rejectWithValue(handleError(error));
  }
});

// Async thunk for signing up
export const signupUser = createAsyncThunk<
  User,
  { email: string; password: string; username: string },
  { rejectValue: string }
>("auth/signupUser", async (userDetails, { rejectWithValue }) => {
  try {
    const response = await signup(userDetails);

    if (response.token) {
      Cookies.set("token", response.token);
      return response.user;
    } else {
      return rejectWithValue("Token missing");
    }
  } catch (error) {
    return rejectWithValue(handleError(error));
  }
});

// Async thunk for logging out
export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      Cookies.remove("token"); // Clear token from cookies
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
        state.status = "idle";
        state.user = action.payload;
      })
      // Login flow
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed";
      })

      // Signup flow
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Sign-up failed";
      })

      // Logout flow
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
