import Input from "../Input";
import SubmitButton from "../../buttons/SubmitButton";
import Select from "../Select";
import { useClickMeet } from "../../../context/ClickMeetContext";

const FilterFormProfessionals = () => {
  const { handleSubmit, handleStatusChange, isAvailable, status } =
    useClickMeet();
  return (
    <>
      <section className="flex justify-center items-center text-center bg-clickmeet-gray h-80 w-72 m-auto rounded-xl ">
        <div>
          <form onSubmit={handleSubmit} className="">
            <h1 className="text-center py-2 font-medium">
              {" "}
              Professional Filter Options{" "}
            </h1>
            <Input field={"Professional Name"} />
            <Input field={"Service"} />
            <Input field={"Description"} />
            <Input field={"Date"} />
            <Select
              text={"Choose Status:"}
              onChange={handleStatusChange}
              options={isAvailable}
              required={true}
              value={status}
            />
            <SubmitButton name={"Search"} />
          </form>
        </div>
      </section>
    </>
  );
};

export default FilterFormProfessionals;
