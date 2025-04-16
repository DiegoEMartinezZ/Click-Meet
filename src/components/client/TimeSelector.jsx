import React, { useState } from 'react';

const TimeSelector = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  // TODO: Set according disponibility
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (onTimeSelect) {
      onTimeSelect(time);
    }
  };


  return (
    <div className="w-full md:size-full max-w-md mx-auto rounded-2xl bg-clickmeet-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-2">Time</h2>
      <p className="text-center mb-6">Select a time of the day for the appointment</p>

      <div className="grid grid-cols-3 gap-4">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            className={`p-4 border-2 border-gray-400 rounded hover:border-white focus:outline-none
                      ${selectedTime === time ? 'border-white' : ''}`}
            onClick={() => handleTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;