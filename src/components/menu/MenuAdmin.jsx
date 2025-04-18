import { FaCalendarCheck, FaUserCircle, FaUserTie } from "react-icons/fa";
import MenuButton from "../../UI/buttons/MenuButton";

const MenuAdmin = ({ title }) => {
  return (
    <>
      <section className="grid place-items-center">
        <div className="bg-white p-8 shadow-xl rounded-xl md:w-96">
          <h1 className="text-center font-bold md:text-2xl mb-6">{title}</h1>
          <ul className="space-y-6">
            <MenuButton
              icon={FaCalendarCheck}
              text={"Upcoming Meetings"}
              url={"/admin/upcoming-meetings"}
            />
            <MenuButton
              icon={FaUserCircle}
              text={"Client Metrics"}
              url={"/admin/client-metrics"}
            />
            <MenuButton
              icon={FaUserTie}
              text={"Professional Overview"}
              url={"/admin/professional-overview"}
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuAdmin;
