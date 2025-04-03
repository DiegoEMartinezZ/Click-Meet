import { createContext, useContext } from "react";
import { useState } from "react";
const ClickMeetContext = createContext();

export const ClickMeetProvider = ({ children }) => {
  //
  // Handle Submit
  //
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //
  // Select Month
  //
  const [selectedMonth, setSelectedMonth] = useState("");

  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  //
  // Select Month
  //
  const [status, setStatus] = useState("");

  const isAvailable = [
    { value: "1", label: "Active" },
    { value: "2", label: "Inactive" },
  ];

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  //
  // Reset Status and Month option Values
  //
  const resetFilters = () => {
    setStatus("");
    setSelectedMonth("");
  };

  //
  // Filter Btn (Active or inactive)
  //
  const [filterBtn, setFilterBtn] = useState(false);
  const handleFilterBtn = () => {
    setFilterBtn(!filterBtn);
    resetFilters();
  };
  return (
    <ClickMeetContext.Provider
      value={{
        handleSubmit,
        handleFilterBtn,
        filterBtn,
        selectedMonth,
        months,
        handleMonthChange,
        status,
        isAvailable,
        handleStatusChange,
        resetFilters,
      }}
    >
      {children}
    </ClickMeetContext.Provider>
  );
};

export const useClickMeet = () => {
  const context = useContext(ClickMeetContext);
  if (!context) {
    throw new Error("UseClickMeet must be used within a ClickMeetProvider");
  }
  return context;
};
