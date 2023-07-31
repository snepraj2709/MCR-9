import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";
import VideoCard from "../components/VideoCard";

function SinglePlaylist() {
  const { playlistName } = useParams();
  const { state } = useData();
  const currentPlaylist = state?.playlists.find(
    (playlist) => playlist.name === playlistName
  );

  console.log(currentPlaylist);
  return (
    <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <div className="col-span-6">
        <h2 className="font-bold text-2xl text-center">{playlistName}</h2>
        <div className="flex flex-wrap">
          {currentPlaylist?.videos?.map((video) => (
            <div key={video._id} className="w-1/2 p-2">
              <VideoCard data={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SinglePlaylist;
