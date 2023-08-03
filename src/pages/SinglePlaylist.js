import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";
import VideoCard from "../components/VideoCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

function SinglePlaylist() {
  const { playlistName } = useParams();
  const { state } = useData();
  const currentPlaylist = state?.playlists.find(
    (playlist) => playlist.name === playlistName
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 grow">
        <Sidebar />
        <div className="col-span-6">
          <h2 className="font-bold text-2xl ml-4">{playlistName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 md:gap-4">
            {currentPlaylist?.videos?.map((video) => (
              <div key={video._id} className="p-2">
                <VideoCard data={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SinglePlaylist;
