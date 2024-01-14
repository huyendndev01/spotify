import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../App.css";
import { useContext } from "react";
import { Songs } from "../Context/SongContext";

const Playing = () => {
  const { song, handleSetSong } = useContext(Songs);

  const pre = () => {
    handleSetSong(song.id - 1);
  };

  const next = () => {
    handleSetSong(song.id + 1);
  };
  return (
    <div className=" bg-gray-900 h-[100px]">
      <AudioPlayer
        className="player-music"
        src={song.url}
        showSkipControls={true}
        onClickNext={next}
        onClickPrevious={pre}
      />
    </div>
  );
};

export default Playing;
