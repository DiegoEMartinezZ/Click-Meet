import { BiSolidBellRing } from "react-icons/bi";
import { CiHome, CiLogin } from "react-icons/ci";
import { useClickMeet } from "../../context/ClickMeetContext";

const ClientNavBar = () => {
  const { goHome, goToLogin } = useClickMeet();
  return (
    <>
      <nav className="bg-clickmeet-black w-screen py-3 text-clickmeet-white md:py-5">
        <section className="flex justify-between px-8">
          <CiHome onClick={goHome} className="cursor-pointer" />
          <div className="flex flex-nowrap">
            <CiLogin onClick={goToLogin} className="cursor-pointer mx-3" />
            <BiSolidBellRing className="cursor-pointer mx-3" />
          </div>
        </section>
      </nav>
    </>
  );
};

export default ClientNavBar;
