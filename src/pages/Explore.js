import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

export default function Explore() {
  return (
    <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <Feed />
      <Suggestions />
    </div>
  );
}
