import { Header, Footer, HeroImage, CategoryCard } from "../components/index";
import { useData } from "../context/DataContext";

function Home() {
  const { state } = useData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="lg:max-w-6xl mx-auto space-y-4">
        <HeroImage />
        <p className="font-sans text-3xl font-bold text-center">Categories</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {state?.category?.map((cat) => (
            <div className="grid grid-cols-6 mx-auto">
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
