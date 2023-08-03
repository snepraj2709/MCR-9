import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

function Watchlist() {
  const { state } = useData();
  const watchlist = state?.allVideos?.filter((video) => video.watchLater);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <h2 className="font-bold text-2xl ml-4">Watchlist</h2>
          <Feed list={watchlist} page="Watchlist" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Watchlist;
