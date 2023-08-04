import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useEffect } from "react";
import {
  Header,
  Sidebar,
  Video,
  Suggestions,
  Footer,
} from "../components/index";

export default function VideoDetail() {
  const { state } = useData();
  const { videoId } = useParams();

  const currentVideo = state?.allVideos.find(
    (video) => video._id === parseInt(videoId)
  );
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [videoId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="col-span-6">
          <Video video={currentVideo} />
          <Suggestions />
        </div>
      </div>
      <Footer />
    </div>
  );
}
