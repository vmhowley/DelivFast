import React from 'react'
import { useState } from 'react';
import Sender from './Sender';

export default function Stepper() {
    const steps = ["Sender", "Receiver", "Package", "Payment", "Finish"];
    const [currentStep, setCurrentStep] = useState(1);
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      
    }

    return (

      <div className=' divide-y divide-slate-200  text-sm mb-10'>
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item w-screen  ${currentStep === i + 1 && "active"}`}
            >
              <div className="step dark:bg-slate-600">{i + 1}</div>
              <p className="text-slate-500 text-xs ">{step}</p>
            </div>
          ))}
        </div>       
        <div className='flex justify-center mt-2' >
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}  className="rounded-lg px-6 pt-2 pb-8 mb-4">
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
          />
        </div>
        
        <div className="flex items-center justify-center">
          <button onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-emerald-400 hover:bg-emerald-300 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
            type="submit"
            >
            Continue
          </button>

        </div>
      </form>
    </div>
    </div>
        
      </div>
    );
}