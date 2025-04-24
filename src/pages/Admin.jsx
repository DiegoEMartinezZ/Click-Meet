import MenuAdmin from "../components/menu/MenuAdmin";
import Navbar from "../UI/navbar/Navbar";
import RolSession from "../UI/txt/RolSession";
import Title from "../UI/txt/Title";

const Admin = () => {
  return (
    <>
      <Navbar />
      <RolSession rol={"Admin"} />
      <Title />
      <MenuAdmin title={"Meetings and Overview"} />
    </>
  );
};

export default Admin;
