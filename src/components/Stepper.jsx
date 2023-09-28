import { useState } from "react";
import { Stepper } from 'react-form-stepper';
import Sender from "./Sender";


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
 
  const handleNext = () => {
    setStep(step + 1);
    setCurrentStep(currentStep+ 1);

  };

  const handleBack = () => {
    setStep(step - 1);
    setCurrentStep(currentStep - 1);

  };
  const steps = [ 'sender', 'receiver', 'package', 'payment', 'finish' ];

  return (
    <div className="mb-20">
      <div className="p-4 rounded-lg shadow-md  ">
        <Stepper
        connectorStyleConfig={{ activeColor: '#00BFA5', completedColor: '#00BFA5', inactiveColor: '#00BFA5',  style: 'soli', }}
        styleConfig={{ size:50, completedBgColor: '#00BFA5', activeBgColor: '#00BFA5', inactiveBgColor: 'gray',}} steps={steps.map(setStep => setStep.toLowerCase())} activeStep={currentStep}   />
        {step === 1 ? <SenderForm /> : <ReceiverForm />}
        <div className="flex justify-between">
          {step > 1 && (
            <button
              className="btn"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {step < 2 && (
            <button
              className="btn"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const SenderForm = () => (
    <Sender />
);

const ReceiverForm = () => (
  <div>
    <h3 className="text-lg font-medium mb-4">Step 2</h3>
    <div className="mb-4">
      <label
        className="block font-medium mb-2 text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full border border-gray-400 p-2"
      />
    </div>
  </div>
);

export default MultiStepForm;