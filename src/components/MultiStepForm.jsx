import { useState } from "react";
import { Stepper } from 'react-form-stepper';
import Sender from "./Sender";
import Receiver from "./receiver";
import Delivery from "./Delivery";
import PackageInfo from "./PackageCategory";
import { useNavigate } from "react-router-dom";
function  MultiStepForm () {

  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    sender_phone: "",
    sender_address: "",
    sender_city: "",
    receiver_name: "",
    receiver_email: "",
    receiver_phone: "",
    receiver_address: "",
    receiver_city: "",
    package_category: "",
    package_weight: "",
    package_height: "",
    package_width: "",
    package_dimension: "",
    package_price: "",
    payment: "",
    delivery: "",
    status: "",
  });

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
 
  const handleNext = () => {
    setStep(step + 1);
    setCurrentStep(currentStep+ 1);
    
    
  };
  
  const handleComplete = () => {
    console.log(formData);
    navigate("/");    
    
  };

  const handleBack = () => {
    setStep(step - 1);
    setCurrentStep(currentStep - 1);

  };


  return (
    <> 
    <Stepper
    styleConfig={{ completedBgColor: '#00BFA5', activeBgColor: '#00BFA5', inactiveBgColor: 'gray',}} steps={[{label: 'Sender'}, {label: 'Receiver'}, {label: 'Package'}, {label: 'Payment'}, {label: 'Finish'}]} activeStep={currentStep}   />
      <div className="p-4 mb-16">
       
        {step === 1 ? <Sender formData={formData} setFormData={setFormData}   /> : step === 2 ? <Receiver formData={formData} setFormData={setFormData} /> : step === 3 ? < PackageInfo formData={formData} setFormData={setFormData}/> : null }
        
        <div className="flex justify-around ">
          {step > 1 && (
            <button
            className="btn"
            onClick={handleBack}
            >
              Back
            </button>
          )}
          {step <= 5 && (
            <button
            className="btn bg-slate-800"
            value="Next"
              onClick={step === 5 ?  handleComplete : handleNext}    
            >
              {step === 5 ? "Finish" : "Next"}
            </button>
          )}
          
        </div>
      </div>
</>
  );
}

export default MultiStepForm;