import React from "react";
import Live from "./Live";
import { FaImages, FaCube, FaTasks, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black h-fit flex justify-center ">

      <div className="bg-neutral-950 flex flex-col lg:flex-row mx-6 lg:mx-5 lg:my-5  w-full lg:w-full rounded-3xl">
        <div className="w-1/6  overflow-hidden p-4 ml-5 py-24 flex-col">
          <Live/>
        </div>
        <div className="w-full bg-neutral-950 lg:w-10/12 ">
          <Dashboard />
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
