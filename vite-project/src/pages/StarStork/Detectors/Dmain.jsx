import React from "react";
import Live from "../../../components/Live";
import { FaImages, FaCube, FaTasks, FaSearch } from "react-icons/fa";
import Dashboard from "./Dashboard";
import Navbar from "../../../components/Navbar";

const Dmain = () => {
  return (
    <>
    <Navbar/>
    <div className=" flex justify-center  ">
      <div className="bg-zinc-900 mt-12 flex flex-col lg:flex-row mx-6 lg:mx-28  w-full lg:w-10/12 rounded-3xl">
        <div className="flex-col w-full lg:w-1/5 mt-8 ">
          <Live
            name="Images"
            imgurl={<FaImages className="size-12 mx-2 my-2 text-white" />}
          />
          
        </div>
        <div className="w-full lg:w-10/12 p-4">
          <Dashboard />
        </div>
      </div>
    </div>
    </>
  );
};

export default Dmain;