import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import Stepper from '../components/Stepper';

export default function MakeOrder() {
  return (
    <>
      <div
        className="flex space-x-2 cursor-pointer text-white font-bold font-[Poppins] p-2 pt-8"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className='font-bold'>Make Order</span>
      </div>
      <Stepper />
    </>
  );
}
