import React from "react";
import VisaLogo from "../images/visa.png";
export default function Ccard() {
  const isFilled = true;
   if(isFilled) {
    const cardName = localStorage.getItem('name')
    localStorage.setItem('cardName', ' VICTOR MORILLO')
    localStorage.setItem('cardProvider', ' VICTOR MORILLO')
    localStorage.setItem('accountBalance', ' 45,055')
  }
  return (
    <>
    {isFilled ? cardFilled() : <div className="mb-2 rounded-3xl ">
    <div className="flex justify-center">

      <div className="w-[20rem] h-28 m-auto bg-gradient-to-r to-emerald-400 from-slate-800 rounded-3xl text-white shadow-xl mb-5 mt-7 transform ">
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-center items-center content-center">
            <div className="flex items-center content-center  justify-center">
              <span className="font-bold text-2xl"><button className="btn">Add Card</button></span>
              <p className="text-3xl">
            </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
}
    </>  
  );
}

const cardFilled = () => {
  const name = localStorage.getItem('cardName');
  const lastNums = localStorage.getItem('lastNums');
  const cardProvider = localStorage.getItem('cardProvider');
  const accountBalance = localStorage.getItem('accountBalance');
return (
  <>
  <div className="grid justify-center place-items-start">
      <div className="w-[311px] h-[12rem] bg-gradient-to-r to-emerald-400 from-slate-800 rounded-3xl text-white shadow-xl mb-3 ">
        <div className="flex flex-col relative">
        <span className="relative left-6 top-6 font-semibold tracking-wider">{name}</span>
        <span className="relative left-6 top-6 font-semibold tracking-widest">•••• •••• •••• {7895}</span>
        </div>
        <div className="flex justify-end  right-10 relative">
         <img className="h-5" src={VisaLogo} alt="" />
        </div>
        <div className="relative top-8 left-6 grid ">
          <span className="text-xs tracking-wider">Your Balance</span>
          <span className="text-4xl tracking-wider font-bold">{accountBalance}</span>
        </div>
        <div className="flex justify-end relative right-6">
          <button className="btn rounded-full bg-white text-emerald-400">Top Up</button>
        </div>
      </div>
  </div>
  </>
)
}