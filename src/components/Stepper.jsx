import React from 'react'
import { useState } from 'react';
export default function Stepper() {
    const steps = ["Sender", "Receiver", "Package", "Payment", "finish"];
    const [currentStep, setCurrentStep] = useState(1);
    return (
      <>
        <div className="flex justify-between ">
          {steps?.map((step, i) => (
            <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"}`}
                >
              <div className="step">{i + 1}</div>
              <p className="text-gray-600 ">{step}</p>
            </div>
          ))}
        </div>
        
            <form action="">
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="sender">Sender</label>
                        <input type="text" name="sender" id="sender" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="receiver">Receiver</label>
                        <input type="text" name="receiver" id="receiver" />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="package">Package</label>
                            <input type="text" name="package" id="package" />
                            
                        </div>
                        </div>
            </form>
        <button className='btn'>Next</button>
        </>
    );
}