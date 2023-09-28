import React from 'react'
import { useState } from 'react';

export default   function MyForm(props) {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      props.setCurrentStep(props.currentStep + 1)
      
    }
    return(
    <div className='flex justify-center mt-2' >
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="rounded-lg px-6 pt-2 pb-8 mb-4">
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
          <button onSubmit={setInputs}
            disabled={props.currentStep === 0 ? true : false}
            className="bg-emerald-400 hover:bg-emerald-300 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
            type="submit"
            >
            Continue
          </button>
         
        </div>
      </form>
    </div>
    </div>
    )
}