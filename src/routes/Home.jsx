import React from "react";
import Mnav from "../components/M-NavBar";
import Search from "../components/Search";
import Ccard from "../components/Ccard";
import Hero from "../components/Hero";
import TransactionHist from "../components/TransactionHist";

export default function Home() {
  return (
    <div className="mt-[70px] mb-20">
      <Mnav />
      <Ccard />
      <Search />
      <Hero />
      <TransactionHist />
    </div>
  );
}
