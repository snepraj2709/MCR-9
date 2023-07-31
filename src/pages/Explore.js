import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

export default function Explore() {
  const { state } = useData();
  return (
    <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <Feed list={state?.allVideos} page="Explore" />
    </div>
  );
}
