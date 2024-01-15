import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { getSongById } from "../redux/Slice/songSlice";

const Playing = () => {
  const dispath = useDispatch();
  const { song } = useSelector((state) => state.song);

  console.log(song);
  const pre = () => {
    dispath(getSongById(song.id - 1));
  };

  const next = () => {
    dispath(getSongById(song.id + 1));
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
