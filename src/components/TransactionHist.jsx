import React, { useState, useEffect } from "react";
import {  TruckIcon } from '@heroicons/react/24/solid';
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import TimeAgo from 'timeago-react';
import { Link, useLocation } from "react-router-dom";


export default function TransactionHist() {
  const [orders, setOrder] = useState([]);
  const [Keys, setKeys] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const uid = localStorage.getItem('uid')
    const query = ref(db, "users/" + uid + '/orders' );
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
    
      if (snapshot.exists()) {
        Object.entries(data).map((order) => {
          setOrder((orders) => [...orders, order]);
            
        });
        Object.keys(data).map((Key) => {
          setKeys((Keys) => [...Keys, Key]);
          
        })
      }
      
    });
  }, []);

    
    if (orders == 0) {
      return  <>
      <div className="flex justify-center flex-wrap mt-4">
      <div className="flex justify-between  w-96 items-center mb-4 text-emerald-400 ">
      <span className="font-bold text-xl">Transaction History</span>
      <a className="font-bold" href="/transactions">See All </a>
    </div>
      </div>  
      <span className="flex justify-center text-red-600 text-lg">You don't have any transactions</span>       
      </> 
    }else{
      return (
        <>
      <div className="text-black font-semibold dark:text-white  divide-y divide-slate-400/30 grid w-max m-auto mt-4">
        <div className="flex justify-between w-96 items-center mb-4 text-emerald-400 ">
          <span className="font-bold text-xl">Transaction History</span>
          
          {location.pathname == '/' ? 
            <Link to='/transactions' className="cursor-pointer"> See All  </Link> 
            
            : ''}
          
        </div>
        {location.pathname == '/transactions' ? orders.slice(0).reverse().map((order, index) => (
          
          <div
          key={index}
          className=" flex flex-row mb-2 items-center justify-around animate-pulse"
          >
            <div className="bg-emerald-400 w-[50px] h-[50px] rounded-full flex justify-center items-center bg-opacity-10 ">
              <TruckIcon  className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="flex flex-col gap-2 text-center w-52 ">
              <span className="tracking-wider text-sm">
                {order[1].title}
              </span>
              <p className="text-xs font-light  text-zinc-500 dark:text-zinc-300 ">
                {order[1].description}
              </p>

              <p className="text-xs font-light text-zinc-500 dark:text-zinc-300">
                TRACK ID:  {order[0]}
                </p>
            </div> 
            <a className="text-emerald-400 text-xs"><TimeAgo  locale='en' datetime={order[1].date + ' ' + order[1].time}/> </a>
          </div>
        )) : orders.slice(0).reverse().slice(0, 4).map((order, index) => (
          <div
          key={index}
          className=" flex flex-row mb-2 items-center justify-around"
          >
            <div className="bg-emerald-400 w-[50px] h-[50px] rounded-full flex justify-center items-center bg-opacity-10 ">
              <TruckIcon  className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="flex flex-col gap-2 text-center w-52 ">
              <span className="tracking-wider text-sm">
                {order[1].title}
              </span>
              <p className="text-xs font-light  text-zinc-500 dark:text-zinc-300 ">
                {order[1].description}
              </p>

              <p className="text-xs font-light text-zinc-500 dark:text-zinc-300">
                TRACK ID:  {order[0]}
                </p>
            </div> 
            <a className="text-emerald-400 text-xs"><TimeAgo  locale='en' datetime={order[1].date + ' ' + order[1].time}/> </a>
          </div>
        )) }
      </div>
    </>
  );
        }
}

