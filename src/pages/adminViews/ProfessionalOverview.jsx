import { FaUserTie } from "react-icons/fa";
import Navbar from "../../UI/navbar/Navbar";
import TitleSection from "../../UI/sections/TitleSection";
import Title from "../../UI/txt/Title";
import ProfessionalOverviewTable from "../../UI/tables/ProfessionalOverviewTable";
import RolSession from "../../UI/txt/RolSession";

const ProfessionalOverview = () => {
  return (
    <>
      <Navbar />
      <RolSession rol={"Admin"} />
      <Title />
      <TitleSection icon={FaUserTie} text={"Professional Overview"} />
      <ProfessionalOverviewTable name={"Professional Overview"} />
    </>
  );
};

export default ProfessionalOverview;
