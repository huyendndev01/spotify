import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/songs.json";
export const songSlice = createSlice({
  name: "songs",
  initialState: {
    song: {
      name: "Sing me to sleep",
      author: "Alan Walker",
      url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
      id: 0,
      links: {
        images: [
          {
            url: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
          },
        ],
      },
    },
  },
  reducers: {
    getSongById: (state, action) => {
      state.song = data.find((song) => song.id === action.payload);
    },
  },
});

export const { getSongById } = songSlice.actions;

export default songSlice.reducer;
