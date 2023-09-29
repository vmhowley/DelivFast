import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import Stepper from '../components/Stepper';
import OrderForm from '../components/OrderForm';
export default function MakeOrder() {
  return (
    <>
      <div
        className="flex space-x-2 cursor-pointer font-bold relative z-50 w-max h-10 m-2"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className='font-bold '>Back</span>
      </div>
      <Stepper />
      <div className='flex justify-center mt-2' >
    <div className="w-full max-w-md">
      <form  className="rounded-lg px-6 pt-2 pb-8 mb-4">
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
          <button 
            className="bg-emerald-400 hover:bg-emerald-300 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
            type="submit"
            >
            Continue
          </button>
         
        </div>
      </form>
    </div>
    </div>
    </>
  );
}
