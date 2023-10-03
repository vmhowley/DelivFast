import React from "react";
import VisaLogo from "../images/visa.png";
export default function Ccard() {
  return (
    <div className="relative m-auto   mb-2 rounded-3xl">
      <div className="w-96 h-52 m-auto bg-gradient-to-r to-emerald-400 from-slate-800 rounded-3xl text-white shadow-sm transition-transform transform hover:scale-110">
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="grid gap-1">
              <span className="font-bold text-2xl">BENITO HOWLEY</span>
              <p className="text-3xl">•••• •••• •••• 7632
            </p>
            </div>
          </div>
          <div className="pt-6 pr-6 flex justify-between items-center ">
            <div className="grid gap-2">
              <p className="font-semibold text-sm">Your Balance</p>
              <span className="font-bold text-4xl text-white">$9,500</span>           
            </div>
            <img className="w-16 h-6" src={VisaLogo} />

          </div>
        </div>
      </div>
    </div>
  );
}
