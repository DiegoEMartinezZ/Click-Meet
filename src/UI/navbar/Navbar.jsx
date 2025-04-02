import { BiSolidBellRing } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-clickmeet-black w-screen py-3 text-clickmeet-white md:py-5">
        <section className="flex justify-between px-8">
          <FaBars />
          <BiSolidBellRing />
        </section>
      </nav>
    </>
  );
};

export default Navbar;
