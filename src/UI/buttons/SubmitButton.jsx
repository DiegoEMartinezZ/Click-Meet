import { FaMagnifyingGlass } from "react-icons/fa6";
import { useClickMeet } from "../../context/ClickMeetContext";

const SubmitButton = ({ name }) => {
  const { handleClick } = useClickMeet();
  return (
    <>
      <button
        onClick={handleClick}
        type="submit"
        className="cursor-pointer flex items-center m-auto bg-clickmeet-orange p-1 rounded-lg my-3"
      >
        <FaMagnifyingGlass className="mx-1" />
        <h1 className="text-sm">{name}</h1>
      </button>
    </>
  );
};

export default SubmitButton;
