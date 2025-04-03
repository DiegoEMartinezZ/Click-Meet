import Input from "../Input";
import SubmitButton from "../../buttons/SubmitButton";
import Select from "../Select";
import { useClickMeet } from "../../../context/ClickMeetContext";

const FilterFormMeetings = () => {
  const {
    handleSubmit,
    handleMonthChange,
    months,
    selectedMonth,
    handleStatusChange,
    isAvailable,
    status,
  } = useClickMeet();

  return (
    <>
      <section className="flex justify-center items-center text-center bg-clickmeet-gray h-80 w-72 m-auto rounded-xl ">
        <div>
          <form onSubmit={handleSubmit}>
            <h1 className="text-center py-2 font-medium">
              Meeting Filter Options
            </h1>
            <Select
              text={"Select a Month:"}
              onChange={handleMonthChange}
              options={months}
              required={true}
              value={selectedMonth}
            />
            <Input field={"First Name"} />
            <Input field={"Email"} />
            <Input field={"Service"} />
            <Input field={"Professional Name"} />
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

export default FilterFormMeetings;
