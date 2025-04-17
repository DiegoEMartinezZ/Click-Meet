import React, { useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const DateSelector = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth, currentYear);

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <div
          key={i}
          className={`w-10 h-10 md:size-full flex items-center justify-center rounded-full cursor-pointer
                      ${isToday ? 'bg-gray-200 text-clickmeet-black' : ''}
                      ${selectedDate && selectedDate.toDateString() === date.toDateString() ? 'bg-orange-500 text-white' : 'hover:bg-gray-200'}`}
          onClick={() => handleDateSelect(date)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-clickmeet-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-2">Date</h2>
      <p className="text-center mb-6">Select a day for your appointment</p>

      <div className="flex items-center justify-center mb-4">
        <button
          className="p-2 rounded-full hover:bg-gray-800 focus:outline-none"
          onClick={previousMonth}
        >
          <FaAngleLeft className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mx-4">{monthNames[currentMonth]}</h3>
        <button
          className="p-2 rounded-full hover:bg-gray-800 focus:outline-none"
          onClick={nextMonth}
        >
          <FaAngleRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <FaCalendarCheck className="w-16 h-16" />
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="font-medium">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mt-2">
        {generateCalendarDays()}
      </div>
    </div>
  );
};

export default DateSelector;
