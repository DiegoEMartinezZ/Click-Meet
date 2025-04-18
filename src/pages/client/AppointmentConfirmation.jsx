import React from "react";
import Navbar from "../../UI/navbar/Navbar";
import Title from "../../UI/txt/Title";
import AppointmentConfirmation from "../../components/client/appointment/AppointmentComplete";

const AppointmentConfirmationPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Title />
      </div>
      <AppointmentConfirmation />
    </>
  );
};

export default AppointmentConfirmationPage;
