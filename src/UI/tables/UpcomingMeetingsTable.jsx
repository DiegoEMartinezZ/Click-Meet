import { useState } from "react";
import { LuTextSearch } from "react-icons/lu";
import FilterFormMeetings from "../forms/admin/FilterFormMeetings";
import { IoMdClose } from "react-icons/io";

const UpcomingMeetingsTable = ({ month }) => {
  const [filterBtn, setFilterBtn] = useState(false);

  const handleFilterBtn = () => {
    setFilterBtn(!filterBtn);
  };
  return (
    <>
      <section className="bg-clickmeet-black text-clickmeet-white text-left font-medium flex justify-around items-center py-2 w-60 rounded-xl m-auto my-4">
        <h1>{month}</h1>
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
      </section>
      {filterBtn && <FilterFormMeetings />}
    </>
  );
};

export default UpcomingMeetingsTable;
