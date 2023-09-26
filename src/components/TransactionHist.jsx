import React from "react";
import {BankNotesIcon, PencilSquareIcon} from "@heroicons/react/24/solid"


export default function TransactionHist() {
  return (
    <>
      
      <div className="text-black  divide-y divide-slate-400/30 m-2 w-max md:w-auto md:grid ">
        <div className="flex flex-row justify-between  mb-2 items-center content-center">
          <div className="bg-emerald-400 w-[50px] h-[50px] rounded-full flex justify-center items-center bg-opacity-10 ">
            <PencilSquareIcon className="h-6 w-6 text-emerald-400" />
          </div>
          <div className="grid  gap-2 p-2">
            <span className="font-semibold">New Order Made!</span>
            <p className="text-xs text-zinc-500 relative w-52">
              You have created a new shipping order
            </p>
          </div>
            <a className="text-emerald-400 ">4 hours ago</a>
        </div>
        <div className="flex flex-row justify-between  mb-2 items-center ">
          <div className="bg-emerald-400 w-[50px] h-[50px] rounded-full flex justify-center items-center bg-opacity-10 ">
            <BankNotesIcon className="h-6 w-6 text-emerald-400" />
          </div>
          <div className="grid  gap-2 p-2">
            <span className="font-semibold">Payment Succeful!</span>
            <p className="text-xs text-zinc-500 relative w-52">
              You have created a new shipping ordersadsdasd
            </p>
          </div>
            <a className="text-emerald-400 ">4 hours ago</a>
        </div>
        <div className="flex flex-row justify-between  mb-2 items-center ">
          <div className="bg-emerald-400 w-[50px] h-[50px] rounded-full flex justify-center items-center bg-opacity-10 ">
            <PencilSquareIcon className="h-6 w-6 text-emerald-400" />
          </div>
          <div className="grid  gap-2 p-2">
            <span className="font-semibold">New Order Made!</span>
            <p className="text-xs text-zinc-500 relative w-52">
              You have created a new shipping order
            </p>
          </div>
            <a className="text-emerald-400 ">4 hours ago</a>
        </div>
      </div>
    </>
  );
}
