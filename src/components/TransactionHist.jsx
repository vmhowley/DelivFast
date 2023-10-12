import React from "react";
import BankNotesIcon from "@heroicons/react/24/solid/BanknotesIcon"
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { db } from "../firebase";
import { get, ref, onValue } from "firebase/database";

export default function TransactionHist() {
const uid = localStorage.getItem('uid');
  const orderRef = ref(db, 'users/' + uid);
  onValue(orderRef, (snapshot) => {
    const data = snapshot.val();
    const transaction = (data);
    console.log(transaction)
  });

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
  
  return (
    <>
      <div className="text-black font-semibold dark:text-white  divide-y divide-slate-400/30 grid w-max m-auto mt-4">
        <div className="flex justify-between w-96 items-center mb-4 text-emerald-400 ">
          <span className="font-bold text-xl">Transaction History</span>
          <a className="font-bold" href="/transactions">See All </a>
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
              <span className="">{transaction.title}</span>
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
