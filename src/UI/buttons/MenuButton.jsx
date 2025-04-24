import { useNavigate } from "react-router-dom";

const MenuButton = ({ icon: Icon, text, url }) => {
  const navigate = useNavigate();

  const handlerToPage = () => {
    if (url) {
      navigate(url);
    } else {
      console.log("URL not provided for:", text);
    }
  };

  return (
    <li
      className="bg-clickmeet-orange text-clickmeet-black flex items-center justify-center p-3 md:py-4 lg:py-5 w-full rounded-xl shadow-md transition-all duration-200 cursor-pointer transform hover:scale-105"
      onClick={handlerToPage}
    >
      {Icon && (
        <Icon className="mx-2 md:mx-3 text-base md:text-xl lg:text-xl" />
      )}
      <h1 className="text-base md:text-lg lg:text-xl font-medium">{text}</h1>
    </li>
  );
};

export default MenuButton;
