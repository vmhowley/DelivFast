import React from 'react'
import { useState } from 'react';
import Sender from './Sender';



export default function Stepper(step, setCurrStep) {
    const steps = ["Sender", "Receiver", "Package", "Payment", "Finish"];
    const [currentStep, setCurrentStep] = useState(1);

    {currentStep === 1 && <Sender setCurrentStep={setCurrentStep} />}
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

        
      </div>
    );
}