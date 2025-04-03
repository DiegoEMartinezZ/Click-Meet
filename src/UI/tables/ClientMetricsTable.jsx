import { FaPencil } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { LuTextSearch } from "react-icons/lu";
import FilterFormClients from "../forms/admin/FilterFormClients";
import { useClickMeet } from "../../context/ClickMeetContext";

const ClientMetricsTable = ({ name }) => {
  const { handleFilterBtn, filterBtn } = useClickMeet();
  return (
    <>
      <section className="bg-clickmeet-black text-clickmeet-white text-left font-medium flex justify-around items-center py-2 w-72 rounded-xl m-auto my-4">
        <h1>{name}</h1>
        <div className="flex">
          <FaPencil className="text-2xl mx-1 text-clickmeet-black p-1 rounded-full bg-clickmeet-orange cursor-pointer" />
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
      {filterBtn && <FilterFormClients />}
    </>
  );
};

export default ClientMetricsTable;
