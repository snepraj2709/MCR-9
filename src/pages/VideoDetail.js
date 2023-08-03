import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { useParams } from "react-router-dom";
import Video from "../components/Video";
import { useData } from "../context/DataContext";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function VideoDetail() {
  const { state } = useData();
  const { videoId } = useParams();

  const currentVideo = state?.allVideos.find((video) => video._id == videoId);
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [videoId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 grow mx-auto">
        <Sidebar className="fixed top-0" />
        <Video video={currentVideo} />
        <Suggestions />
      </div>
      <Footer />
    </div>
  );
}
