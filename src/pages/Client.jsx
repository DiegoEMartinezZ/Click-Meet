import MenuClient from "../components/menu/MenuClient";
import Navbar from "../UI/navbar/Navbar";
import Title from "../UI/txt/Title";

const Client = () => {
  return (
    <>
      <Navbar />
      <Title />
      <MenuClient title={"Welcome, Client :)"} />
    </>
  );
};

export default Client;
