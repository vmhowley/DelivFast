import React from 'react'
import { useState } from 'react'
import LoginWithPassword from '../login/LoginWithPassword'
import LoginPortal from '../login/LoginPortal';

function Login(steps, setSteps) {
 const [step, setStep] = useState(0)
  
return (
    <>
      {step === 0 ? <LoginPortal step={step} setStep={setStep}/> : <LoginWithPassword />}
    </>  
)
}


export default Login
