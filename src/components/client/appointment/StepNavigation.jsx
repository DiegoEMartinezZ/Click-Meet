import React from 'react';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const StepNavigation = ({
  currentStep,
  totalSteps,
  canContinue,
  onContinue,
  onBack,
  onConfirm,
  confirmDisabled
}) => {
  const showContinueButton = currentStep < totalSteps;
  const showBackButton = currentStep > 1;
  const showConfirmButton = currentStep === totalSteps;

  return (
    <>
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 w-full">
        {showBackButton && (
          <button
            className="flex items-center bg-clickmeet-gray hover:bg-gray-400 text-black font-medium py-2 px-4 rounded-lg"
            onClick={onBack}
          >
            <MdNavigateBefore className="mr-1" size={20} />
            Back
          </button>
        )}

        {showContinueButton && (
          <button
            className={`ml-auto flex items-center bg-clickmeet-orange hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg ${!canContinue ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            onClick={onContinue}
            disabled={!canContinue}
          >
            Continue
            <MdNavigateNext className="ml-1" size={20} />
          </button>
        )}

        {showConfirmButton && (
          <button
            className={`ml-auto bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg ${confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            onClick={onConfirm}
            disabled={confirmDisabled}
          >
            Confirm Appointment
          </button>
        )}
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`h-2 w-10 mx-1 rounded-full ${currentStep === index + 1 ? 'bg-clickmeet-orange' : 'bg-clickmeet-gray'
              }`}
          />
        ))}
      </div>
    </>
  );
};

export default StepNavigation;