import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import Stepper from '../components/Stepper';

export default function MakeOrder() {
  return (
    <>
      <span
        className="flex space-x-2 cursor-pointer font-bold p-2 pt-8"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className='font-bold '>Make Order</span>
      </span>
      <Stepper />
    </>
  );
}
