/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/NavBar";
import Mnav from "../components/M-NavBar";
import Search from "../components/Search";
import Ccard from "../components/Ccard";
import Hero from "../components/Hero";
import { PencilIcon } from "@heroicons/react/24/solid";
import TransactionHist from "../components/TransactionHist";
export default function Home() {
  return (
    <div className="mt-20 mb-20">
      <Mnav />
      <Ccard />
      <Search />
      <Hero />
      <div className="flex justify-between p-2 text-emerald-400">
        <span className="font-semibold">Transaction History</span>
        <a href="/transactions">See All</a>
      </div>
      <TransactionHist />
    </div>
  );
}
