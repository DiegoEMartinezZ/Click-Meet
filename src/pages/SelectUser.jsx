import { RiAdminFill } from "react-icons/ri";
import { RiUserSmileFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SelectUser = () => {
  const navigate = useNavigate();
  const handleUserSelect = () => {
    console.log("Click");
  };

  const handleAdminView = () => {
    navigate("/admin");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-clickmeet-black text-white">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-1">
            Click <span className="text-clickmeet-orange">&</span> Meet
          </h1>
          <p className="text-clickmeet-orange text-lg">
            A better way to plan your day.
          </p>
        </div>

        <h2 className="text-xl mb-8">Select your type of user</h2>

        <div className="flex gap-10">
          <div
            className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            onClick={handleAdminView}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-clickmeet-orange mb-4 flex items-center justify-center">
              <RiAdminFill className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
            <span className="text-base">Admin</span>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleUserSelect()}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-clickmeet-orange mb-4 flex items-center justify-center">
              <RiUserSmileFill className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
            <span className="text-base">Client</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUser;
