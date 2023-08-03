import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

export default function Explore() {
  const { state } = useData();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 grow mx-auto">
        <Sidebar className="sticky top-0" />
        <Feed list={state?.filteredVideos} page="Explore" />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
