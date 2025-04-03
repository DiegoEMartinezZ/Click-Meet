import { useNavigate } from "react-router-dom";

const MenuButton = ({ icon: Icon, text, url }) => {
  const navigate = useNavigate();

  const handlerToPage = () => {
    navigate(url);
  };

  return (
    <>
      <li
        className="bg-clickmeet-orange flex items-center justify-center py-3 w-60 rounded-xl m-auto my-4 cursor-pointer"
        onClick={handlerToPage}
      >
        <Icon className="mx-2" />
        <h1>{text}</h1>
      </li>
    </>
  );
};

export default MenuButton;
