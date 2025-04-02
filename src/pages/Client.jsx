import Menu from "../components/menu/MenuAdmin";
import Navbar from "../UI/navbar/Navbar";
import Title from "../UI/txt/Title";

const Client = () => {
  return (
    <>
      <Navbar />
      <Title />
      <Menu title={"Welcome, Client :)"} />
    </>
  );
};

export default Client;
