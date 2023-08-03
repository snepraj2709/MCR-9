import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import VideoDetail from "./pages/VideoDetail";
import Watchlist from "./pages/Watchlist";
import Playlist from "./pages/Playlist";
import SinglePlaylist from "./pages/SinglePlaylist";
import SingleCategory from "./pages/SingleCategory";
import ToastWrapper from "./components/ToastWrapper";
import LikedVideos from "./pages/LikedVideos";

export default function App() {
  return (
    <div className="min-h-screen p-0 w-full dark:bg-slate-900 dark:text-slate-50 mx-auto">
      <ToastWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/:videoId" element={<VideoDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistName" element={<SinglePlaylist />} />
        <Route path="/category/:categoryName" element={<SingleCategory />} />
      </Routes>
    </div>
  );
}
