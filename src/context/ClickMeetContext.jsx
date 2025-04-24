import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClickMeetContext = createContext();

export const ClickMeetProvider = ({ children }) => {
  // Navigation
  const navigate = useNavigate();

  // Form Data State
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    service: "",
    professionalName: "",
    appointmentTime: "",
    registrationDate: "",
  });

  // UI States
  const [isClicked, setIsClicked] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  const [filterBtn, setFilterBtn] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [status, setStatus] = useState("");

  // Submitted Data State Filtered
  const [submittedData, setSubmittedData] = useState(null);

  // Handlers
  const handleSubmit = () => {
    setSubmittedData({
      ...formData,
      month: selectedMonth,
      day: selectedDay,
      status: status,
    });
    setIsClicked(true);
  };

  const handleFilterBtn = () => {
    setFilterBtn(!filterBtn);
    resetFilters();
  };

  const deleteFilterSelection = (filterKey) => {
    if (!submittedData) return;
    // Create a new object excluding the deleted filter
    const updatedData = { ...submittedData };
    delete updatedData[filterKey];
    // Update submittedData with the new filtered data
    setSubmittedData(updatedData);

    if (filterKey === "month") {
      setSelectedMonth("");
    } else if (filterKey === "status") {
      setStatus("");
    } else {
      setFormData((prev) => ({
        ...prev,
        [filterKey]: "",
      }));
    }

    if (Object.keys(updatedData).length === 0) {
      resetFilters();
    }
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditBtn = () => {
    console.log("Quieres editar un dato");
    setEditBtn(!editBtn);
  };

  const handleDeleteBtn = () => {
    console.log("Quieres eliminar un dato");
  };

  // Reset Function
  const resetFilters = () => {
    setFormData({
      firstName: "",
      email: "",
      service: "",
      professionalName: "",
      appointmentTime: "",
      registrationDate: "",
    });
    setStatus("");
    setSelectedMonth("");
    setSelectedDay("");
    setSubmittedData(null);
    setIsClicked(false);
  };

  // Go back handler

  const goBack = () => {
    navigate(-1);
    setFilterBtn(false);
    resetFilters();
  };

  //Go to Login view
  const goToLogin = () => {
    navigate("/login");
  };

  //Go to Home view
  const goHome = () => {
    navigate("/select-user");
  };

  // Constants
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

  const days = [
    { value: "1", label: "Sunday" },
    { value: "2", label: "Monday" },
    { value: "3", label: "Tuesday" },
    { value: "4", label: "Wednesday" },
    { value: "5", label: "Thursday" },
    { value: "6", label: "Friday" },
    { value: "7", label: "Saturday" },
  ];

  const isAvailable = [
    { value: "1", label: "Active" },
    { value: "2", label: "Inactive" },
  ];

  return (
    <ClickMeetContext.Provider
      value={{
        goHome,
        goBack,
        goToLogin,
        deleteFilterSelection,
        editBtn,
        handleEditBtn,
        handleDeleteBtn,
        isClicked,
        handleSubmit,
        handleFilterBtn,
        filterBtn,
        selectedMonth,
        selectedDay,
        months,
        days,
        handleMonthChange,
        handleDayChange,
        status,
        isAvailable,
        handleStatusChange,
        resetFilters,
        formData,
        handleInputChange,
        submittedData,
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

export default ClickMeetContext;
