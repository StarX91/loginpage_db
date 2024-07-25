import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Starx from "../assets/starx91.jpg";
import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  const handleEditProfile = () => {
    navigate("/ss/edit-profile");
  };

  const handleSettings = () => {
    navigate("/ss/settings");
  };
  const handleDashboard = () => {
    navigate("/services");
  };
  return (
    <div className="h-12 bg-neutral-950 flex justify-between">
      <div className="pt-3 pl-2">
      <img src={Starx} className="px-4 w-full h-2/3 "/>

      </div>
      <div className="flex">
      <Link to='/services'>
        <button
        onClick={handleDashboard} 
        className="w-20 h-10 my-1 rounded-sm flex flex-col items-center">
          <MdDashboard className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[11px] font-semibold">Services</p>
        </button>
        </Link>

        <Link to='/ss/dashboard'>
        <button className="bg-zinc-800 w-20 h-10 my-1 rounded-sm flex flex-col items-center">
          <MdDashboard className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[11px] font-semibold">Dashboard</p>
        </button>
        </Link>
        <Link to='/ss/settings'>
        <button
        onClick={handleSettings} 
        className=" w-20 h-10 my-1 rounded-sm flex flex-col items-center">
          <IoSettingsSharp className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[12px] font-semibold">Settings</p>
        </button>
        </Link>
        <button className="w-20 h-10 my-2 rounded-sm flex flex-col items-center">
          <IoIosAddCircle className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[12px] my-1 font-semibold text-center">Add</p>
        </button>
      </div>
      <div className="relative">
        <button
          className="w-8 h-8 rounded-full bg-red-300 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {/* Circle button */}
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
            <button
              onClick={handleEditProfile}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Edit Profile
            </button>
            <button
              onClick={handleSettings}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

