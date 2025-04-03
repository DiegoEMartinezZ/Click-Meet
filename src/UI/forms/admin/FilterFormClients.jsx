import { useClickMeet } from "../../../context/ClickMeetContext";
import SubmitButton from "../../buttons/SubmitButton";
import Input from "../Input";
import Select from "../Select";

const FilterFormClients = () => {
  const { handleSubmit, handleStatusChange, isAvailable, status } =
    useClickMeet();

  return (
    <>
      <section className="flex justify-center items-center text-center bg-clickmeet-gray h-80 w-72 m-auto rounded-xl ">
        <div>
          <form onSubmit={handleSubmit} className="">
            <h1 className="text-center py-2 font-medium">
              Client Filter Options{" "}
            </h1>
            <Input field={"First Name"} />
            <Input field={"Email"} />
            <Input field={"Appointment Date"} />
            <Input field={"Appointment Hour"} />
            <Input field={"Service"} />
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

export default FilterFormClients;
