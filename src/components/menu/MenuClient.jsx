import { FaCalendar, FaCalendarCheck } from "react-icons/fa";
import MenuButton from "../../UI/buttons/MenuButton";
import { IoCalendarSharp } from "react-icons/io5";

const MenuClient = ({ title }) => {
  return (
    <>
      <section className="grid place-items-center">
        <div className="bg-white p-8 shadow-xl rounded-xl md:w-96 ">
          <h1 className="text-center font-bold md:text-2xl mb-6">{title}</h1>
          <ul className="space-y-6">
            <MenuButton
              icon={FaCalendarCheck}
              text={"Schedule Appointment"}
              url={"/client/appointment"}
            />
            <MenuButton
              icon={IoCalendarSharp}
              text={"My Appointments"}
              url={"/client/my-appointments"}
            />
            <MenuButton
              icon={FaCalendar}
              text={"Calendar"}
              url={"/client/calendar"}
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuClient;
