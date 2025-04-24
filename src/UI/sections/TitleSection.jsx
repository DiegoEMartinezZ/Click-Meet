import React from "react";
import { MdArrowLeft } from "react-icons/md";
import { useClickMeet } from "../../context/ClickMeetContext";

const TitleSection = ({ icon: Icon, text }) => {
  const { goBack } = useClickMeet();

  return (
    <div className="bg-clickmeet-orange flex items-center justify-center py-2 w-fit px-5 rounded-xl m-auto my-4 ">
      <MdArrowLeft className="text-2xl cursor-pointer" onClick={goBack} />
      {Icon && <Icon className="mx-2" />}
      <h1>{text}</h1>
    </div>
  );
};

export default TitleSection;
