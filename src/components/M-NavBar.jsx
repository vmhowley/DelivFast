/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar'
import { BellIcon } from '@heroicons/react/24/solid'

export default function Mnav() {
  return (
<div className="p-4 bg-zinc-900 bg-opacity-90 justify-between items-center flex fixed top-0  text-white  w-screen z-50">
    <div className=" justify-start items-center gap-4 flex">
        <img className="w-[49px] h-[49px] rounded-[56px] border border-white border-opacity-30" src="https://unavatar.io/benitoxx25" />
        <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className=" text-xl font-semibold leading-normal">Benito, Adam!</div>
            <div className="text-zinc-400 text-xs font-normal ">25 Septiembre, 2023</div>
        </div>
    </div>
  <div className='flex'>
  <BellIcon className="h-6 w-6 text-gray-600" />
    </div>      
</div>
  )
}
