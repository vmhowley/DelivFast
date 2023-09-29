import { useState } from "react";
import { Stepper } from 'react-form-stepper';
import Sender from "./Sender";
import Receiver from "./receiver";
import Delivery from "./Delivery";


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
        {step === 1 ? <SenderForm /> : step === 2 ? <ReceiverForm /> : step === 3 ? < DeiveryForm /> : null }
        
        <div className="flex justify-between">
          {step > 1 && (
            <button
              className="btn"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {step < 5 && (
            <button
              className="btn"
              onClick={handleNext}

            >
              Next
            </button>
          )}
          {step === 5 && (
            <button
              className="btn"
              onClick={handleNext}
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


function  SenderForm (){
  const { name, email, username, password, firstName, lastName, country } = this.state;
  const values = { name, email, username, password, firstName, lastName, country }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  
  return(
 <div className='flex justify-center' >
  <div className="w-full max-w-md">
    <form  onSubmit={handleSubmit} className="rounded-lg">
      <div className="mb-4">
        <label
          className="block font-bold mb-2"
          htmlFor="name"
        >
          Sender Name
        </label>
        <input
          className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
          id="name"
          name='name'
          type="text"
          placeholder="Jhon Smith"
          value={values.name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-bold mb-2"
          htmlFor="name"
        >
          Package
        </label>
        <input
          className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
          id="name"
          name='name'
          type="text"
          placeholder="...."
        />
      </div>


    </form>
  </div>
  </div>
  )
}

function ReceiverForm () {
  return(
  <Receiver />
)}

function  DeiveryForm () {
  return (
  <Delivery />
)}

export default MultiStepForm;