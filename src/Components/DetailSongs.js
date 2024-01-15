import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongById } from "../redux/Slice/songSlice";

const DetailSongs = () => {
  const dispath = useDispatch();
  const song = useSelector((state) => state.song.song);
  useEffect(() => {
    dispath(getSongById(0));
  }, []);
  return (
    <div className="col-span-1 p-3 h-48">
      <h2 className="font-bold text-[#38b5ea] text-center">Now playing</h2>
      <p className="text-2xl md:pt-2 text-center">{song.name}</p>
      <div className="hidden md:flex md:justify-center md:items-center mt-5 md:mt-[40px]">
        <img className="w-10 md:w-64" src={song.links.images[0].url} />
      </div>
      <div className="flex justify-center items-center mt-6 px-10">
        <img
          class="w-16 rounded-full"
          alt="logo"
          src={song.links.images[1].url}
        />
        <span class="text-xl text-white ml-4 ">{song.author}</span>
      </div>
    </div>
  );
};

export default DetailSongs;
