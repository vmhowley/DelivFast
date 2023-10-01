import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import Stepper from '../components/MultiStepForm';
import Sender from '../components/Sender';
export default function MakeOrder() {
  return (
    <>
      <div
        className="flex space-x-2 cursor-pointer font-bold relative  m-2"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className='font-bold '>Back</span>
      </div>
      <Stepper />
    </>
  );
}
