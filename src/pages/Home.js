import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state } = useData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 lg:max-w-6xl px-5 grow">
        <Sidebar className="sticky top-0" />
        <div className="col-span-6 flex flex-col ">
          <h2 className="font-bold text-2xl ml-5">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {state?.category?.map((cat) => (
              <div key={cat._id} className="m-1">
                <Category cat={cat} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
