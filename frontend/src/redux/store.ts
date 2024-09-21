import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
