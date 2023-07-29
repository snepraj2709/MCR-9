import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
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
      <div className="col-span-6 md:col-span-4">
        <h2 className="text-base font-bold text-center">{playlistName}</h2>
        {currentPlaylist?.videos?.map((video) => (
          <div key={video._id}>
            <VideoCard data={video} />
          </div>
        ))}
      </div>
      <Suggestions />
    </div>
  );
}

export default SinglePlaylist;
