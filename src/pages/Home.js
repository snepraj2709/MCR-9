import Category from "../components/Category";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state } = useData();

  return (
    <div className="grid grid-cols-8  mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <div className="col-span-6 flex flex-col">
        <h2 className="font-bold text-2xl">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {state?.category?.map((cat) => (
            <div key={cat._id}>
              <Category cat={cat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
