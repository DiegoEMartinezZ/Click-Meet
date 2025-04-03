import { FaCalendar, FaCalendarCheck } from "react-icons/fa";
import MenuButton from "../../UI/buttons/MenuButton";
import { IoCalendarSharp } from "react-icons/io5";

const MenuClient = ({ title }) => {
  return (
    <>
      <section className="absolute top-0 bottom-0 right-0 left-0 h-screen grid place-items-center">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-center font-bold">{title}</h1>
          <ul>
            <MenuButton icon={FaCalendarCheck} text={"Schedule Appointment"} />
            <MenuButton icon={IoCalendarSharp} text={"My Appointments"} />
            <MenuButton icon={FaCalendar} text={"Calendar"} />
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuClient;
