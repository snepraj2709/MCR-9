import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useData } from "../context/DataContext";

function Home() {
  const { state } = useData();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="lg:max-w-6xl px-5 mx-auto m-3">
        <div className="m-4 space-y-4">
          <div className="flex w-full p-4">
            <img
              src="https://res.cloudinary.com/dqg4mckho/image/upload/v1691067566/vidtune/dooxg2mt0zupmllql1vk.jpg"
              alt="paper art by Freepik"
              className="w-2/3 object-cover"
            />
            <div className="flex flex-col w-1/3 my-auto space-y-3 p-4">
              <p className="font-sans text-2xl font-semibold text-center">
                Learn paper art from top artists at{" "}
                <span className="text-red-700 font-bold font-sans">
                  Vidtune
                </span>
              </p>
              <button
                className="dark:bg-slate-500 rounded-full p-3 w-25 mx-auto shadow-xl bg-blue-500 text-white font-semibold text-lg"
                onClick={() => navigate("/explore")}>
                Explore Now
              </button>
            </div>
          </div>
          <hr className="dark:border-gray-100 border-slate-900" />
        </div>
        <p className="font-sans text-3xl font-bold text-center py-4">
          Categories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {state?.category?.map((cat) => (
            <div className="grid grid-cols-6 ">
              <CategoryCard currentCategory={cat} className="m-1" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
