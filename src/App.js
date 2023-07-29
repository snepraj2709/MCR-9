import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import VideoDetail from "./pages/VideoDetail";
import Watchlist from "./pages/Watchlist";
import Playlist from "./pages/Playlist";
import SinglePlaylist from "./pages/SinglePlaylist";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/:videoId" element={<VideoDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistName" element={<SinglePlaylist />} />
      </Routes>
    </div>
  );
}
