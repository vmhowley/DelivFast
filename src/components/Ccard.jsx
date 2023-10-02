import React from "react";
import VisaLogo from "../images/visa.png";
export default function Ccard() {
  return (
    <div className="relative m-auto   mb-2 rounded-3xl">
      <div className="w-96 h-48 m-auto bg-gradient-to-r to-emerald-400 from-slate-800 rounded-3xl text-white transition-transform transform hover:scale-110">
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold text-lg text-white">BENITO ADAM</span>
              <p className="text-3xl">•••• •••• •••• 7632
            </p>
            </div>
          </div>
          <div className="pt-6 pr-6 flex justify-between items-center ">
            <div>
              <p className="font-normal text-xs">Your Balance</p>
              <span className="font-bold text-xl text-white">$9,500</span>           
            </div>
            <img className="w-16 h-6" src={VisaLogo} />

          </div>
        </div>
      </div>
    </div>
  );
}
