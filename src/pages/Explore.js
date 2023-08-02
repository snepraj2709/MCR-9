import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

export default function Explore() {
  const { state } = useData();
  return (
    <div>
      <Header />
      <hr className="border-gray-300" />
      <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
        <Sidebar className="sticky top-0" />
        <Feed list={state?.filteredVideos} page="Explore" />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
