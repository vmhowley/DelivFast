import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <div className='flex justify-center'>

    <div className='relative mt-2 mb-2 '>

  <button 
  className="flex  justify-start items-center w-[20rem] h-14 rounded-xl bg-slate-100 pl-14 focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-300 tracking-wider dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  >
  Enter a track ID Number
  <MagnifyingGlassIcon className='absolute left-3  w-8'  />  
  </button>
  </div>
    </div>
  )
}
