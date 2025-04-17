import { IoMdClose } from "react-icons/io";
import { useClickMeet } from "../../context/ClickMeetContext";

const FilterSelected = ({ filterWord, filterKey }) => {
  const { deleteFilterSelection } = useClickMeet();
  return (
    <>
      <div>
        <p className="text-clickmeet-orange mx-1 flex justify-center items-center rounded-xl w-fit px-5 bg-clickmeet-black p-1 text-xs font-medium">
          <IoMdClose
            onClick={() => deleteFilterSelection(filterKey)}
            className="mr-2 cursor-pointer"
          />
          <span>{filterWord}</span>
        </p>
      </div>
    </>
  );
};

export default FilterSelected;
