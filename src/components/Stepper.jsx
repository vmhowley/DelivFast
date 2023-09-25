import React from 'react'
import { useState } from 'react';

export default function Stepper() {
    const steps = ["Sender", "Receiver", "Package", "Payment", "Finish"];
    const [currentStep, setCurrentStep] = useState(1);
    return (
      <div className=' divide-y divide-slate-700'>
        <div className="flex justify-between p-4">
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
        <div className='flex justify-center mt-2' >
        <div className="w-full max-w-md">
          <form className="rounded-lg px-6 pt-2 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Sender Name
              </label>
              <input
                className="shadow appearance-none  rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
                id="name"
                type="text"
                placeholder="Jhon Smith"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none  rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
                id="phone"
                type="number"
                placeholder="809 402 XXXX"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none  rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
                id="email"
                type="text"
                placeholder="JhonSmith@delifast.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="city"
              >
                City / Province
              </label>
              <input
                className="shadow appearance-none  rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
                id="username"
                type="text"
                placeholder="Santo Domingo, Rep.Dom"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address Details
              </label>
              <input
                className="shadow appearance-none  rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
                id="address"
                type="text"
                placeholder="C/ Francisco prats Ramirez..."
              />
            </div>
            
            <div className="flex items-center justify-center">
              <button
                className="bg-emerald-400 hover:bg-emerald-300 text-white font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="button"
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