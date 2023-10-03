import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
<form className='relative mt-2 mb-2  m-auto w-96'>
  <MagnifyingGlassIcon className='absolute top-1/2 left-2 -translate-y-1/2 h-8 w-8'  />  
  <input 
  type="text" 
  placeholder='Enter a Track ID Number' 
  className="w-96 h-14  rounded-xl bg-slate-100 pl-14 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  />
</form>
  )
}
