import { useState } from "react";
import { Stepper } from 'react-form-stepper';
import Sender from "./Sender";
import Receiver from "./receiver";
import Delivery from "./Delivery";
import PackageInfo from "./PackageCategory";
import { useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";
import { db } from "../firebase";
function  MultiStepForm () {


  const [orderData, setOrderData] = useState({
    orderId: "",
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
    package_shipping: "",
    payment: "",
    delivery: "",
    status: "",
  });
  const writeOrder = (orderData) => {
    set(ref(db, 'users/' + '5155564'), {
      orderData
    });
  }
  


  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
 
  const handleNext = () => {
    
  if (orderData.sender_name.length === 0) {
    alert('Please enter a sender name first before submitting your form.');
  }else if (orderData.sender_phone.length === 0) {
    alert('Please enter a valid Phone Number before submitting your form.');
  }else{
    setStep(step + 1);
    setCurrentStep(currentStep+ 1);
    console.log(orderData);
  }
    
    
  };

  
  
  const handleComplete = () => {
      writeOrder(orderData)
    console.log(orderData);
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
      <div className="p-4 mb-16 font-semibold">
        
        {step === 1 ? <Sender orderData={orderData} setOrderData={setOrderData}   /> : step === 2 ? <Receiver orderData={orderData} setOrderData={setOrderData} /> : step === 3 ? < PackageInfo orderData={orderData} setOrderData={setOrderData}/> : null }
        
        <div className="flex justify-around content-center items-center">
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