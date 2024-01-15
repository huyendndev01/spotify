import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById } from "../redux/Slice/songSlice";
import { getListSongs } from "../redux/Slice/songsSlice";
const ListSongs = () => {
  const [idSong, setIdSong] = useState(0);

  const dispath = useDispatch();

  const songs = useSelector((state) => state.songs.songs);

  const handleSong = (id) => {
    setIdSong(id);
    dispath(getSongById(id));
  };

  // useEffect(() => {
  //   setIdSong(song.id);
  // }, [song]);

  useEffect(() => {
    dispath(getListSongs());
    // dispath(getSongById(0));
  }, []);
  return (
    <div className="col-span-2 overflow-hidden overflow-y-auto">
      <table className="w-full border-collapse border border-slate-500">
        <thead className="h-12 text-white text-xl sticky top-0 bg-slate-600">
          <tr>
            <th className="w-[10%] text-center border  bg-gray-900">#</th>
            <th className="w-[50%] text-left border  bg-gray-900">Title</th>
            <th className="w-[30%] text-center border  bg-gray-900">Author</th>
            <th className="w-[10%] text-center border  bg-gray-900">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="mt-4 bg-gray-800 cursor-pointer">
          {songs.map((song, id) => (
            <tr
              key={id}
              className={`hover:bg-slate-600 h-12 ${
                idSong === song.id ? "active" : null
              }`}
              onClick={() => handleSong(song.id)}
            >
              <td className="w-[10%] text-center border border-slate-700">
                {id + 1}
              </td>
              <td className="border border-slate-700">{song.name}</td>
              <td className="text-center border border-slate-700">
                {song.author}
              </td>
              <td className="text-center border border-slate-700">
                <i className="fa-solid fa-download"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSongs;
