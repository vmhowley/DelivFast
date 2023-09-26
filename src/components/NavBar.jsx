/* eslint-disable no-unused-vars */

import React from "react";
//Libredia de iconos
import { HomeIcon, 
         ChatBubbleLeftEllipsisIcon, 
         ShoppingCartIcon,
         UserCircleIcon   
        } 
        from "@heroicons/react/24/outline";

export default function NavBar() {
  let navigation = [
    { name: "Home", link: "/" },
    { name: "Envio", link: "/envio" },
    { name: "Contacto", link: "/contacto" },
  ];

  return (
    <div className="fixed  bottom-0 shadow-md  w-screen   text-emerald-400  text-xs bg-opacity-70 backdrop-blur-sm">
      <ul className="flex justify-around content-center items-center p-2 text-[0.60rem]">
        <li className="hover:bg-emerald-400 hover:text-white rounded-md">
          <a className="flex flex-col content-center items-center justify-between " href="/">
            <HomeIcon className="h-6" />
            <span className="" >Home</span>
          </a>
        </li>
        <li className="hover:bg-emerald-400 hover:text-white rounded-md ">
          <a className="flex flex-col content-center items-center justify-between " href="/orders">
            <ShoppingCartIcon className="h-6" />
            <span>My Orders</span>
          </a>
        </li>
        <li className="hover:bg-emerald-400 hover:text-white rounded-md ">
          <a className="flex flex-col content-center items-center justify-between " href="/">
            <ChatBubbleLeftEllipsisIcon className="h-6" />
            <span>inbox</span>
          </a>
        </li>
        <li className="hover:bg-emerald-400 hover:text-white rounded-md ">
          <a className="flex flex-col content-center items-center justify-between " href="/">
            <UserCircleIcon className="h-6" />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
