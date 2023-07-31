import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

function Watchlist() {
  const { state } = useData();
  const watchlist = state?.allVideos?.filter((video) => video.watchLater);
  return (
    <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <Feed list={watchlist} page="Watchlist" />
    </div>
  );
}

export default Watchlist;
