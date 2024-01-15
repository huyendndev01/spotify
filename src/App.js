import { useEffect, useState } from "react";
import "./App.css";
import DetailSongs from "./Components/DetailSongs";
import ListSongs from "./Components/ListSongs";
import Navbar from "./Components/Navbar";
import Playing from "./Components/Playing";
import { Songs } from "./Context/SongContext";
import Data from "./data/songs.json";
import { useSelector, useDispatch } from "react-redux";
import { getListSongs } from "./redux/Slice/songsSlice";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 text-neutral-400 bg-slate-700 md:h-screen-navbar-player h-screen-navbar-small">
        <DetailSongs />
        <ListSongs />
      </div>
      <Playing />
    </div>
  );
}

export default App;
