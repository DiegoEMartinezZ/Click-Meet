import React, { useState } from "react";
import Navbar from "../../UI/navbar/Navbar";
import Title from "../../UI/txt/Title";
import TitleSection from "../../UI/sections/TitleSection";
import DateSelector from "../../components/client/DateSelector";
import TimeSelector from "../../components/client/TimeSelector";
import ServiceSelector from "../../components/client/ServiceSelector";
import { FaCalendarCheck } from "react-icons/fa";
import StepNavigation from "../../components/client/appointment/StepNavigation";
import { useNavigate } from "react-router-dom";
import RolSession from "../../UI/txt/RolSession";

const AppointmentScheduler = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleScheduleAppointment = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      alert("Please select date, time, and service to schedule an appointment");
      return;
    }

    // TODO: Api Call
    const appointmentData = {
      date: selectedDate,
      time: selectedTime,
      serviceId: selectedService.id,
    };

    console.log("Scheduling appointment:", appointmentData);
    navigate("/client/appointment-success");
  };

  // Determine if the continue button should be enabled based on current step
  const canContinue =
    (currentStep === 1 && selectedDate) || (currentStep === 2 && selectedTime);

  return (
    <>
      <Navbar />
      <RolSession rol={"Client"} />
      <Title />
      <TitleSection icon={FaCalendarCheck} text={"Appointment"} />

      {/* Mobile View */}
      <div className="md:hidden container mx-auto p-4">
        {currentStep === 1 && <DateSelector onDateSelect={handleDateSelect} />}

        {currentStep === 2 && (
          <TimeSelector
            onTimeSelect={handleTimeSelect}
            isEnabled={!!selectedDate}
          />
        )}

        {currentStep === 3 && (
          <ServiceSelector
            onServiceSelect={handleServiceSelect}
            isEnabled={!!selectedDate && !!selectedTime}
          />
        )}

        <StepNavigation
          currentStep={currentStep}
          totalSteps={3}
          canContinue={canContinue}
          onContinue={handleContinue}
          onBack={handleBack}
          onConfirm={handleScheduleAppointment}
          confirmDisabled={!selectedService}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div
            className={`transition-opacity duration-300 h-full flex flex-col`}
          >
            <div className="bg-white rounded-lg shadow-md p-4 flex-1 flex flex-col">
              <DateSelector
                onDateSelect={handleDateSelect}
                isActive={currentStep === 1}
              />
            </div>
          </div>

          <div
            className={`transition-opacity duration-300 h-full flex flex-col ${
              !selectedDate ? "opacity-50" : "opacity-100"
            }`}
          >
            <div className="bg-white rounded-lg shadow-md p-4 flex-1 flex flex-col">
              <TimeSelector
                onTimeSelect={handleTimeSelect}
                isActive={currentStep === 2}
                isEnabled={!!selectedDate}
              />
            </div>
          </div>

          <div
            className={`transition-opacity duration-300 h-full flex flex-col ${
              !selectedDate || !selectedTime ? "opacity-50" : "opacity-100"
            }`}
          >
            <div className="bg-white rounded-lg shadow-md p-4 flex-1 flex flex-col">
              <ServiceSelector
                onServiceSelect={handleServiceSelect}
                isActive={currentStep === 3}
                isEnabled={!!selectedDate && !!selectedTime}
              />
            </div>
          </div>
        </div>

        {/* Confirm Button for Desktop */}
        <div className="text-center mt-8">
          <button
            className={`bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg ${
              !selectedDate || !selectedTime || !selectedService
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleScheduleAppointment}
            disabled={!selectedDate || !selectedTime || !selectedService}
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default AppointmentScheduler;
