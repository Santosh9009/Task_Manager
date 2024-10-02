import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice';
import authReducer from './slices/authSlice';

export const store= ()=> configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  }
});


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
