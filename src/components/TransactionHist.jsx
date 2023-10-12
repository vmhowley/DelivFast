import React, { useState, useEffect } from "react";
import BankNotesIcon from "@heroicons/react/24/solid/BanknotesIcon"
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { db } from "../firebase";
import { get, ref, onValue } from "firebase/database";
import TimeAgo from 'timeago-react';

export default function TransactionHist() {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    const uid = localStorage.getItem('uid')
    const query = ref(db, "users/" + uid + '/orders' );
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((order) => {
          setOrder((orders) => [...orders, order]);
        });
      }
    });
  }, []);

    
    if (orders == 0) {
      return  <>
      <div className="flex justify-center flex-wrap">
      <div className="flex justify-between  w-96 items-center mb-4 text-emerald-400 ">
      <span className="font-bold text-xl">Transaction History</span>
      <a className="font-bold" href="/transactions">See All </a>
    </div>
      </div>  
      <span className="flex justify-center text-red-600 text-lg">You don't have any transactions</span>       
      </> 
    }else{
      console.log(window.location.pathname)
      return (
        <>
      <div className="text-black font-semibold dark:text-white  divide-y divide-slate-400/30 grid w-max m-auto mt-4">
        <div className="flex justify-between w-96 items-center mb-4 text-emerald-400 ">
          <span className="font-bold text-xl">Transaction History</span>
          {window.location.pathname == '/' ? 
          <a className="font-bold" href="/transactions">See All </a> : ''}
        </div>
        {orders.map((order, index) => (
          <div
          key={index}
          className="flex flex-row justify-between  mb-2 items-center content-center"
          >
            <div className="bg-emerald-400 w-[50px] h-[50px] rounded-full flex justify-center items-center bg-opacity-10 ">
              <BankNotesIcon  className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="grid  gap-2 p-2">
              <span className="">{order.orderData.transHist}</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-300 relative w-52">
                {order.orderData.status}
              </p>
            </div>
            <a className="text-emerald-400 "><TimeAgo datetime={order.orderData.date + ' ' + order.orderData.time} locale="en"/> </a>
          </div>
        ))}
      </div>
    </>
  );
        }
}

