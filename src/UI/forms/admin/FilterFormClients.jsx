import Input from "../Input";
import SubmitButton from "../../buttons/SubmitButton";
import Select from "../Select";
import { useClickMeet } from "../../../context/ClickMeetContext";
import FilterSelection from "../FilterSelection";

const FilterFormClients = () => {
  const {
    handleSubmit,
    handleDayChange,
    days,
    selectedDay,
    handleStatusChange,
    isAvailable,
    status,
    formData,
    handleInputChange,
    isClicked,
  } = useClickMeet();

  return (
    <>
      {isClicked ? (
        <FilterSelection />
      ) : (
        <section className="flex justify-center items-center text-center bg-clickmeet-gray h-80 w-72 m-auto rounded-xl ">
          <div>
            <form onSubmit={handleSubmit}>
              <h1 className="text-center py-2 font-medium">
                Clients Filter Options
              </h1>
              <Input
                field={"First Name"}
                name={"firstName"}
                value={formData.firstName}
                onChange={handleInputChange}
              />

              <Select
                text={"Choose Status:"}
                onChange={handleStatusChange}
                options={isAvailable}
                required={true}
                value={status}
              />

              <Input
                field={"Service"}
                name={"service"}
                value={formData.service}
                onChange={handleInputChange}
              />

              <Input
                type={"date"}
                field={"Registration Date"}
                name={"registrationDate"}
                value={formData.registrationDate}
                onChange={handleInputChange}
              />

              <Input
                type={"time"}
                field={"Appointment Time"}
                name={"appointmentTime"}
                value={formData.appointmentTime}
                onChange={handleInputChange}
              />

              <Select
                text={"Select a day:"}
                onChange={handleDayChange}
                options={days}
                required={true}
                value={selectedDay}
              />

              <Input
                field={"Professional Name"}
                name={"professionalName"}
                value={formData.professionalName}
                onChange={handleInputChange}
              />

              <SubmitButton name={"Search"} />
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default FilterFormClients;
