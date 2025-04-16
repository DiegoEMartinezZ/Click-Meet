import React, { useState, useEffect } from 'react';

const ServiceSelector = ({ onServiceSelect }) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching services from API
  useEffect(() => {
    // TODO: Call API with services. 
    const fetchServices = async () => {
      // Simulating API delay
      setTimeout(() => {
        const mockServices = [
          { id: 1, name: 'Haircut', duration: 30 },
          { id: 2, name: 'Massage', duration: 60 },
          { id: 3, name: 'Consultation', duration: 45 },
          { id: 4, name: 'Treatment', duration: 90 },
          { id: 5, name: 'Check-up', duration: 30 },
          { id: 6, name: 'Therapy', duration: 60 }
        ];
        setServices(mockServices);
        setLoading(false);
      }, 500);
    };

    fetchServices();
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    if (onServiceSelect) {
      onServiceSelect(service);
    }
  };

  return (
    <div className="w-full md:size-full max-w-md mx-auto rounded-2xl bg-clickmeet-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-2">Service</h2>
      <p className="text-center mb-6">Select a service for the appointment</p>

      {loading ? (
        <div className="text-center py-8">Loading services...</div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              className={`p-4 border-2 border-gray-400 rounded hover:border-white focus:outline-none
                        ${selectedService?.id === service.id ? 'border-white' : ''}`}
              onClick={() => handleServiceSelect(service)}
            >
              <div className="font-medium">{service.name}</div>
              <div className="text-sm text-gray-300">{service.duration} min</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;