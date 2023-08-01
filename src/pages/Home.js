import Category from "../components/Category";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state } = useData();

  return (
    <div>
      <Header />
      <hr className="border-gray-300" />
      <div className="grid grid-cols-8 mx-auto lg:max-w-6xl px-5">
        <Sidebar className="sticky top-0" />
        <div className="col-span-6 flex flex-col">
          <h2 className="font-bold text-2xl ml-8">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {state?.category?.map((cat) => (
              <div key={cat._id}>
                <Category cat={cat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
