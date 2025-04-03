import { FaUserTie } from "react-icons/fa";
import Navbar from "../../UI/navbar/Navbar";
import TitleSection from "../../UI/sections/TitleSection";
import Title from "../../UI/txt/Title";
import ProfessionalOverviewTable from "../../UI/tables/ProfessionalOverviewTable";

const ProfessionalOverview = () => {
  return (
    <>
      <Navbar />
      <Title />
      <TitleSection icon={FaUserTie} text={"Professional Overview"} />
      <ProfessionalOverviewTable name={"Professional Overview"} />
    </>
  );
};

export default ProfessionalOverview;
