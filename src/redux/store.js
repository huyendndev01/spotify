import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./Slice/songsSlice";
import songSlice from "./Slice/songSlice";
export const store = configureStore({
  reducer: {
    songs: songsSlice,
    song: songSlice,
  },
});
