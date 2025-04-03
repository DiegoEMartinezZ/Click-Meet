import { FaCalendarCheck, FaUserCircle, FaUserTie } from "react-icons/fa";
import MenuButton from "../../UI/buttons/MenuButton";

const MenuAdmin = ({ title }) => {
  return (
    <>
      <section className="absolute top-0 bottom-0 right-0 left-0 h-screen grid place-items-center">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-center font-bold">{title}</h1>
          <ul>
            <MenuButton icon={FaCalendarCheck} text={"Upcoming Meetings"} />
            <MenuButton icon={FaUserCircle} text={"User Metrics"} />
            <MenuButton icon={FaUserTie} text={"Professional Overview"} />
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuAdmin;
