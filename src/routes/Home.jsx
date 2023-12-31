import React from "react";
import Mnav from "../components/M-NavBar";
import Search from "../components/Search";
import Ccard from "../components/Ccard";
import Hero from "../components/Hero";
import TransactionHist from "../components/TransactionHist";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const  Home = () => {

  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

  }, []);
  const isLogged = localStorage.getItem("authenticated");

  if (!isLogged) {
    return <Navigate replace to="/login" />;
    // Redirect
  } else {
  return (
    <div className=" mt-4 mb-20">
      <Ccard />
      <Search />
      <Hero />
      <TransactionHist />

    </div>
  );
}
}
export default Home;

