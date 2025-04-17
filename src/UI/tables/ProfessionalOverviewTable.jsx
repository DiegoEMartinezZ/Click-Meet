import { FaPencil } from "react-icons/fa6";
import { LuTextSearch } from "react-icons/lu";
import { useClickMeet } from "../../context/ClickMeetContext";
import { IoMdClose } from "react-icons/io";
import FilterFormProfessionals from "../forms/admin/FilterFormProfessionals";

const ProfessionalOverviewTable = ({ name }) => {
  const { handleFilterBtn, filterBtn, handleEditBtn, editBtn } = useClickMeet();
  return (
    <>
      <section className="bg-clickmeet-black text-clickmeet-white text-left font-medium flex justify-around items-center py-2 w-72 rounded-xl m-auto my-4">
        <h1>{name}</h1>
        <div className="flex">
          {!editBtn ? (
            <FaPencil
              onClick={handleEditBtn}
              className="text-2xl mx-1 text-clickmeet-black p-1 rounded-full bg-clickmeet-orange cursor-pointer"
            />
          ) : (
            <IoMdClose
              onClick={handleEditBtn}
              className="text-2xl mx-1 text-clickmeet-black p-1 rounded-full bg-clickmeet-white cursor-pointer"
            />
          )}

          {!filterBtn ? (
            <LuTextSearch
              onClick={handleFilterBtn}
              className="text-2xl text-clickmeet-black p-1 rounded-full bg-clickmeet-orange cursor-pointer"
            />
          ) : (
            <IoMdClose
              onClick={handleFilterBtn}
              className="text-2xl text-clickmeet-black p-1 rounded-full bg-clickmeet-white cursor-pointer"
            />
          )}
        </div>
      </section>
      {filterBtn && <FilterFormProfessionals />}
    </>
  );
};

export default ProfessionalOverviewTable;
