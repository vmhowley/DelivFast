import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
<form className='relative m-auto w-max mt-2 mb-2'>
  <MagnifyingGlassIcon className='absolute top-1/2 left-2 -translate-y-1/2 h-8 w-8 '  />  
  <input 
  type="text" 
  placeholder='Enter a Track ID Number' 
  className="w-96 h-14 bg-slate-300 bg-opacity-30 rounded-xl placeholder:text-zinc-500 pl-14 " 
  />
</form>
  )
}
