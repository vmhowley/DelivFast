import React from 'react'
import { useState } from 'react';

export default   function MyForm() {

    const [name, setName] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }

    return(
    <div className='flex justify-center' >
    <div className="w-full max-w-md">
      <form  onSubmit={handleSubmit} className="rounded-lg">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="name"
          >
            Package
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
            id="name"
            name='name'
            type="text"
            placeholder="...."
          />
        </div>


      </form>
    </div>
    </div>
    )
}