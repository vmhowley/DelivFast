import React from "react";
import BankNotesIcon from "@heroicons/react/24/solid/BanknotesIcon"
import { PencilSquareIcon } from '@heroicons/react/24/solid'


export default function TransactionHist() {
  const transactions = 
    [{
      "id": 1,
      "title": "New Order Made!",
      "description":
        "You have created a new shipping order",
        "time": "4 hours ago",
        "icon": "BanknotesIcon"
    },
    {
      "id": 2,
      "title": "Payment Successful!",
      "description":
        "your Payment was successful",
        "time": "4 hours ago",
        "icon": "BanknotesIcon"
        },
        {
          "id": 3,
          "title": "New Order Made!",
          "description":
            "You have created a new shipping order",
            "time": "4 hours ago",
            "icon": "BanknotesIcon"
        },
        {
          "id": 4,
          "title": "New Order Made!",
          "description":
            "You have created a new shipping order",
            "time": "4 hours ago",
            "icon": "BanknotesIcon"
        },
        {
          "id": 5,
          "title": "New Order Made!",
          "description":
            "You have created a new shipping order",
            "time": "4 hours ago",
            "icon": "BanknotesIcon"
        },
        
    
       ]
  ;
  const icon = "<BankNotesIcon />"
  
  return (
    <>
      <div className="text-black dark:text-white  divide-y divide-slate-400/30 grid w-max m-auto">
        <div className="flex justify-between p-2 text-emerald-400">
          <span className="font-semibold">Transaction History</span>
          <a href="/transactions">See All </a>
        </div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-row justify-between  mb-2 items-center content-center"
          >
            <div className="bg-emerald-400 w-[50px] h-[50px] rounded-full flex justify-center items-center bg-opacity-10 ">
              <BankNotesIcon  className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="grid  gap-2 p-2">
              <span className="font-semibold">{transaction.title}</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-300 relative w-52">
                {transaction.description}
              </p>
            </div>
            <a className="text-emerald-400 ">4 hours ago</a>
          </div>
        ))}
      </div>
    </>
  );
}
