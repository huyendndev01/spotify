import { useState } from "react";
import "./App.css";
import DetailSongs from "./Components/DetailSongs";
import ListSongs from "./Components/ListSongs";
import Navbar from "./Components/Navbar";
import Playing from "./Components/Playing";
import { Songs } from "./Context/SongContext";
import Data from "./data/songs.json";

function App() {
  const [song, setSong] = useState(Data[0]);

  const handleSetSong = (id) => {
    const song = Data.find((song) => song.id === id);
    if (!song) setSong(Data[0]);
    else setSong(song);
  };

  return (
    <div className="App">
      <Songs.Provider value={{ Data, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 text-neutral-400 bg-slate-700 md:h-screen-navbar-player h-screen-navbar-small">
          <DetailSongs />
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
