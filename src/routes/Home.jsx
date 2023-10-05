import React from "react";
import Mnav from "../components/M-NavBar";
import Search from "../components/Search";
import Ccard from "../components/Ccard";
import Hero from "../components/Hero";
import TransactionHist from "../components/TransactionHist";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const  Home = () => {
  const navigate = useNavigate();

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (authenticated === null) {
    
  // Redirect
  navigate('/login');
  } else {
  return (
    <div className="mt-[70px] mb-20">
      <Mnav />
      <Ccard />
      <Search />
      <Hero />
      <TransactionHist />
      <NavBar />

    </div>
  );
}
}
export default Home;

