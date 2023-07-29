import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { useParams } from "react-router-dom";
import Video from "../components/Video";
import { useData } from "../context/DataContext";

export default function VideoDetail() {
  const { state } = useData();
  const { videoId } = useParams();

  const currentVideo = state?.allVideos.find((video) => video._id == videoId);

  return (
    <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <Video video={currentVideo} />
      <Suggestions />
    </div>
  );
}