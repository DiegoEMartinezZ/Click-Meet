import MenuClient from "../components/menu/MenuClient";
import Navbar from "../UI/navbar/Navbar";
import RolSession from "../UI/txt/RolSession";
import Title from "../UI/txt/Title";

const Client = () => {
  return (
    <>
      <Navbar />
      <RolSession rol={"Client"} />
      <Title />
      <MenuClient title={"Welcome, Client :)"} />
    </>
  );
};

export default Client;
