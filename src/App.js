import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { ToastWrapper } from "./components/index";
import {
  Explore,
  VideoDetail,
  Watchlist,
  Playlist,
  SinglePlaylist,
  SingleCategory,
  LikedVideos,
  Home,
  UploadVideo,
} from "./pages/index";

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
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
    </div>
  );
}
