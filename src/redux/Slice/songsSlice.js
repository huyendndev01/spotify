import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/songs.json";
export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
  },
  reducers: {
    getListSongs: (state) => {
      state.songs = data;
    },
  },
});

export const { getListSongs } = songsSlice.actions;

export default songsSlice.reducer;
