import { FaUserCircle } from "react-icons/fa";
import Navbar from "../../UI/navbar/Navbar";
import TitleSection from "../../UI/sections/TitleSection";
import Title from "../../UI/txt/Title";
import ClientMetricsTable from "../../UI/tables/ClientMetricsTable";

const ClientMetrics = () => {
  return (
    <>
      <Navbar />
      <Title />
      <TitleSection icon={FaUserCircle} text={"Client Metrics"} />
      <ClientMetricsTable name={"Clients Database"} />
    </>
  );
};

export default ClientMetrics;
