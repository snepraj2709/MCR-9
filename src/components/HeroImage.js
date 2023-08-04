import { useNavigate } from "react-router-dom";

function HeroImage() {
  const navigate = useNavigate();
  return (
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
            <span className="text-red-700 font-bold font-sans">Vidtune</span>
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
  );
}

export default HeroImage;
