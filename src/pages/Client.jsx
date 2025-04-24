import MenuClient from "../components/menu/MenuClient";
import ClientNavBar from "../UI/navbar/ClientNavBar";
import RolSession from "../UI/txt/RolSession";
import Title from "../UI/txt/Title";

const Client = () => {
  return (
    <>
      <ClientNavBar />
      <RolSession rol={"Client"} />
      <Title />
      <MenuClient title={"Welcome, Client :)"} />
    </>
  );
};

export default Client;
