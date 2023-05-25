import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';


export const store = configureStore({
  reducer: todoReducer,
})

export type AppDispathch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
