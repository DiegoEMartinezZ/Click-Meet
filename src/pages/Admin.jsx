import MenuAdmin from "../components/menu/MenuAdmin";
import Navbar from "../UI/navbar/Navbar";
import Title from "../UI/txt/Title";

const Admin = () => {
  return (
    <>
      <Navbar />
      <Title />
      <MenuAdmin title={"Overview and Analytics"} />
    </>
  );
};

export default Admin;
