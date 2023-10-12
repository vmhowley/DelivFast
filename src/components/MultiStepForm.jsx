import { useState } from "react";
import { Stepper } from 'react-form-stepper';
import Sender from "./Sender";
import Payment from "./Payment";
import Receiver from "./receiver";
import PackageInfo from "./PackageCategory";
import { useNavigate } from "react-router-dom";
import { set, ref, push } from "firebase/database";
import { db } from "../firebase";

function  MultiStepForm () {
  
  
  const [orderData, setOrderData] = useState({
    transHist : "New Order Created",
    status : 'Pending'
    
  });
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}/${month}/${date}`;
  }
  
  const writeOrder = (orderData) => {
    const uid = localStorage.getItem('uid')
    const orderListRef = ref(db, 'users/' + uid +'/orders')
    const newOrderRef  = push(orderListRef)
    set( newOrderRef , { 
      orderData
    });
  }
  
  
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNext = () => {
    
    setStep(step + 1);
    setCurrentStep(currentStep+ 1);
    console.log(orderData);
  };
  
  const date = getDate();
  const date1 = new Date();
  const handleComplete = () => {
    const showTime = date1.getHours()
        + ':' + date1.getMinutes() 
        + ":" + date1.getSeconds()
    orderData.date = date;
    orderData.time = showTime;
    writeOrder(orderData)
    alert('order Created' + getDate())
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
        
        {step === 1 ? <Sender orderData={orderData} setOrderData={setOrderData}   /> : step === 2 ? <Receiver orderData={orderData} setOrderData={setOrderData} /> : step === 3 ? < PackageInfo orderData={orderData} setOrderData={setOrderData}/> : step == 4  ? < Payment orderData={orderData} setOrderData={setOrderData}/>: null }
        
        <div className="grid gap-2 justify-around content-center items-center">
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
            className="btn bg-emerald-400"
            value="Next"
              onClick={step === 5 ?  handleComplete : handleNext}    
            >
              {step === 5 ? "Finish" : "Continue"}
            </button>
          )}
          
        </div>
      </div>
</>
  );
}


export default MultiStepForm;