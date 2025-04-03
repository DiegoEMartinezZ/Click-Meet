import { FaMagnifyingGlass } from "react-icons/fa6";

const SubmitButton = ({ name }) => {
  return (
    <>
      <button
        type="submit"
        className="cursor-pointer flex items-center m-auto bg-clickmeet-orange p-1 rounded-lg my-3"
      >
        <FaMagnifyingGlass className="mx-1" />
        <h1>{name}</h1>
      </button>
    </>
  );
};

export default SubmitButton;
