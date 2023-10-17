/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
//Libredia de iconos
import { HomeIcon,
        ChatBubbleLeftEllipsisIcon,
        ShoppingCartIcon,
        UserCircleIcon } from "@heroicons/react/24/outline";


export default function NavBar() {
  let navigation = [
    { name: "Home", link: "/" },
    { name: "Envio", link: "/envio" },
    { name: "Contacto", link: "/contacto" },
  ];

  return (
<div className="fixed flex justify-center justify-around text-center content-center bottom-0  w-full text-emerald-400  font-semibold bg-white dark:bg-zinc-900   backdrop-blur-md text-xs ">
        <Link className="flex flex-col content-center items-center justify-between" to="/">
            <HomeIcon className="h-6" />
            Home
          </Link>
          <Link to="orders" className="flex flex-col content-center items-center justify-between">
            <ShoppingCartIcon className="h-6" />
            My Orders
        </Link>
          <Link to="inbox" className="flex flex-col content-center items-center justify-between">
            <ChatBubbleLeftEllipsisIcon className="h-6" />
            Inbox
        </Link>
          <Link to="profile" className="flex flex-col content-center items-center justify-between">
            <UserCircleIcon className="h-6" />
            Profile
        </Link>
         
     
</div>
  );
}
