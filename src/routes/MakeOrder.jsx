import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import Stepper from '../components/Stepper';

export default function MakeOrder() {
  return (
    <>
      <div
        className="flex space-x-2 cursor-pointer text-white mb-6"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <p>Make Order</p>
      </div>
      <Stepper />
    </>
  );
}
