import { MdArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TitleSection = ({ icon: Icon, text }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="bg-clickmeet-orange flex items-center justify-center py-2 w-fit px-5 rounded-xl m-auto my-4">
        <MdArrowLeft className="text-2xl cursor-pointer" onClick={goBack} />
        <Icon className="mx-2" />
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default TitleSection;
