import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentConfirmation = ({
  clientName = "John Doe",
  email = "test@test.com",
  date = "April 4th 2025",
  time = "1:00p.m",
  service = "Service Name",
  professionalName = "Ana"
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-20rem)] flex justify-center items-start px-8 md:p-0">
      <div className="border-2 border-clickmeet-gray rounded-3xl p-6 md:p-10 max-w-md w-full">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">Appointment Complete!</h1>
          <p className="mb-8">Here is the information of your appointment</p>

          <div className="text-base md:text-lg space-y-1 md:space-y-2 ml-4 md:ml-10 text-left mb-8">
            <p className=""><span className="font-bold">Name:</span> {clientName}</p>
            <p className=""><span className="font-bold">Email:</span> {email}</p>
            <p className=""><span className="font-bold">Date:</span> {date}</p>
            <p className=""><span className="font-bold">Time:</span> {time}</p>
            <p className=""><span className="font-bold">Service:</span> {service}</p>
            <p className=""><span className="font-bold">Profesisonal Name:</span> {professionalName}</p>
          </div>

          <button className="bg-clickmeet-orange text-white py-3 px-4 rounded-full w-full mb-4"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;