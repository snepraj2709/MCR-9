import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import VideoDetail from "./pages/VideoDetail";
import Watchlist from "./pages/Watchlist";

export default function App() {
  //

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/:videoId" element={<VideoDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}
