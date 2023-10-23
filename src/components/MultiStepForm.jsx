import { useState } from "react";
import { Stepper } from 'react-form-stepper';
import Sender from "./Sender";
import Payment from "./Payment";
import Receiver from "./receiver";
import PackageInfo from "./PackageCategory";
import { useNavigate } from "react-router-dom";
import { set, ref, push } from "firebase/database";
import { db } from "../firebase";
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'



function  MultiStepForm () {



  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (orderData.sender_name == undefined || orderData.sender_name == '') {
      alert('Invalid Form, First Name can not be empty')
      return
    }else if (orderData.sender_phone == undefined || orderData.sender_phone == '') {
        alert('Invalid Form, Phone Number can not be empty')
        return
      }else if (orderData.sender_email == undefined || orderData.sender_email == '') {
        alert('Invalid Form, Email  can not be empty')
        return
      }else if (orderData.sender_city == undefined || orderData.sender_city == '') {
        alert('Invalid Form, city can not be empty')
        return
      }else if (orderData.sender_address == undefined || orderData.sender_address == '') {
        alert('Invalid Form, address  can not be empty')
        return
    }else{
      handleNext()
    }
    
    // if all the conditions are valid, this means that the form is va
  }

  const [orderData, setOrderData] = useState({
    title : "New Order Made",
    description : 'You have created a new shipping order',
    sender_address : localStorage.getItem('sender_address'),
    receiver_address : localStorage.getItem('receiver_address')
    
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
    push(orderListRef, orderData);
   }
  
  
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNext = () => {
    setStep(step + 1);
    setCurrentStep(currentStep+ 1);
  };
  
  
  const handleComplete = () => {
    const date = getDate();
  const date1 = new Date();
    const showTime = date1.getHours()
        + ':' + date1.getMinutes() 
        + ":" + date1.getSeconds()
    orderData.date = date;
    orderData.time = showTime;
    writeOrder(orderData);
    navigate("/");    
    
  };

  const handleBack = () => {
    if (step > 1) {

      setStep(step - 1);
      setCurrentStep(currentStep - 1);
    }else{
      history.back()

    }

  };

  
  return (
    <> 
        
          <div
        className="flex space-x-2 cursor-pointer font-bold relative  m-2"
        onClick={handleBack}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className='font-bold '>Make Order</span>
      </div>
    <Stepper
    styleConfig={{ completedBgColor: '#00BFA5', activeBgColor: '#00BFA5'}} steps={[{label: 'Sender'}, {label: 'Receiver'}, {label: 'Package'}, {label: 'Payment'}, {label: 'Finish'}]} activeStep={currentStep}   />
      <div className="p-4 mb-16 font-semibold">
        
        {step === 1 ? <Sender orderData={orderData} setOrderData={setOrderData}   /> : step === 2 ? <Receiver orderData={orderData} setOrderData={setOrderData} /> : step === 3 ? < PackageInfo orderData={orderData} setOrderData={setOrderData}/> : step == 4  ? < Payment orderData={orderData} setOrderData={setOrderData}/>: <ReviewSummary orderData={orderData} setOrderData={setOrderData} /> }
        
        <div className="md:flex md:flex-row-reverse grid gap-2 justify-around content-center items-center">
          {step <= 5 && (
            <button
            className="btn bg-emerald-400 rounded-full w-96 h-14"
            value="Next"
            onClick={step === 5 ?   handleComplete : validateForm}    
            >
              {step === 5 ? "Confirm order" : "Continue"}
            </button>
          )}
          
          
        </div>
      </div>
</>
  );
}
const ReviewSummary = ({orderData, setOrderData}) => {
 
  return (
    <>

    <div className="flex mb-2 font-light">
      <span className="text-lg">Review Summary</span>
    </div>
    <div className="md:grid md:grid-cols-2 justify-center items-center content-center gap-3">
    <div className="mb-5 shadow-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <div className="grid grid-cols-2 gap-3 place-content-between">
      <span className="font-light ">Sender Name:</span>
      <p className="text-sm place-self-end">{orderData.sender_name}</p>
      <span className="font-light">Phone:</span>
      <p className="text-sm place-self-end">{orderData.sender_phone}</p>
      <span className="font-light">Email:</span>
      <p className="text-sm place-self-end">{orderData.sender_email}</p>
      <span className="font-light">Address:</span>
      <p className="text-sm place-self-end">{orderData.sender_address}</p>

      </div>
    </div>
    
    <div className="mb-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div className="grid grid-cols-2 gap-3 place-content-between">

      <span className="font-light">Receiver Name:</span>
      <p className="text-sm  place-self-end">{orderData.receiver_name}</p>
      <span className="font-light">Phone:</span>
      <p className=" text-sm place-self-end">{orderData.receiver_phone}</p>
      <span className="font-light">Email:</span>
      <p className="text-sm place-self-end">{orderData.sender_email}</p>
      <span className="font-light">Address:</span>
      <p className=" text-sm place-self-end">{orderData.receiver_address}</p>

    </div>
    </div>
    <div className="mb-5 shadow-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div className="grid grid-cols-2 gap-3 ">
      <span className="font-light">Shipping Fee</span>
      <p className=" text-sm place-self-end">$12</p>
      <span className="font-light">Payment Method:</span>
      <p className=" text-sm place-self-end">{orderData.payment_type}</p>
      </div>
    </div>
    </div>
   

</>
  )
}



export default MultiStepForm;