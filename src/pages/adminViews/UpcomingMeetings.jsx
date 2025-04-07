import { FaCalendarCheck } from "react-icons/fa";
import Navbar from "../../UI/navbar/Navbar";
import TitleSection from "../../UI/sections/TitleSection";
import Title from "../../UI/txt/Title";
import UpcomingMeetingsTable from "../../UI/tables/UpcomingMeetingsTable";

const UpcomingMeetings = () => {
  return (
    <>
      <Navbar />
      <Title />
      <TitleSection icon={FaCalendarCheck} text={"Upcoming Meetings"} />
      <UpcomingMeetingsTable month={"April 2025"} />
    </>
  );
};

export default UpcomingMeetings;
