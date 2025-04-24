import { BiSolidBellRing } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/select-user");
  };

  return (
    <>
      <nav className="bg-clickmeet-black w-screen py-3 text-clickmeet-white md:py-5">
        <section className="flex justify-between px-8">
          <CiHome onClick={goHome} className="cursor-pointer" />
          <BiSolidBellRing className="cursor-pointer" />
        </section>
      </nav>
    </>
  );
};

export default Navbar;
