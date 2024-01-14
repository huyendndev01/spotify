import { useContext, useEffect, useState } from "react";
import { Songs } from "../Context/SongContext";

const ListSongs = () => {
  const [idSong, setIdSong] = useState(0);

  const { Data, handleSetSong, song } = useContext(Songs);

  const handleSong = (id) => {
    setIdSong(id);
    handleSetSong(id);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-hidden overflow-y-auto">
      <table className="w-full ">
        <thead className="h-12 text-white text-xl sticky top-0 bg-slate-600">
          <tr>
            <th className="w-[10%] text-center">#</th>
            <th className="w-[50%] text-left">Title</th>
            <th className="w-[30%] text-center">Author</th>
            <th className="w-[10%] text-center">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="mt-4 bg-gray-800 cursor-pointer">
          {Data.map((song, id) => (
            <tr
              key={id}
              className={`hover:bg-slate-600 h-12 ${
                idSong === song.id ? "active" : null
              }`}
              onClick={() => handleSong(song.id)}
            >
              <td className="w-[10%] text-center">{id + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
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
