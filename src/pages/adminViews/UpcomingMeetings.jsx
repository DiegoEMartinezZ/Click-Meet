import { FaCalendarCheck } from "react-icons/fa";
import Navbar from "../../UI/navbar/Navbar";
import TitleSection from "../../UI/sections/TitleSection";
import Title from "../../UI/txt/Title";
import UpcomingMeetingsTable from "../../UI/tables/UpcomingMeetingsTable";
import RolSession from "../../UI/txt/RolSession";

const UpcomingMeetings = () => {
  return (
    <>
      <Navbar />
      <RolSession rol={"Admin"} />
      <Title />
      <TitleSection icon={FaCalendarCheck} text={"Upcoming Meetings"} />
      <UpcomingMeetingsTable month={"April 2025"} />
    </>
  );
};

export default UpcomingMeetings;
