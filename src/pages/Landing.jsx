import { TiPin } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import MainTitle from "../UI/txt/MainTitle";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-clickmeet-black text-white">
      <div className="flex flex-col items-center text-center">
        <MainTitle />
        <button
          className="bg-clickmeet-orange text-white py-2 px-6 rounded-full flex items-center transition-transform hover:scale-105"
          onClick={() => navigate("/select-user")}
        >
          <TiPin className="mr-1" size={18} />
          Start
        </button>
      </div>
    </div>
  );
};

export default Landing;
