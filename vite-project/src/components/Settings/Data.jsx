import React from "react";

const Data = () => {
  return (
    <div className="bg-zinc-900 text-white w-full p-4 lg:p-8 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-zinc-700 rounded-full mb-4"></div>
        <button className="text-zinc-300">Change profile picture</button>
      </div>
      <div className="w-full lg:w-2/3 mt-8">
        <h2 className="text-2xl text-zinc-200 text-center font-semibold mb-4">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <div type="text" className=" text-center font-semibold">
              Name
            </div>
            <p className="text-center text-zinc-400 font-semibold">xyz</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <p className="text-white text-center font-semibold">
              Date of Birth
            </p>
            <p className="text-zinc-400 text-center font-semibold">
              18 December 1857
            </p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <p className="text-white text-center font-semibold">Email Id</p>
            <p className="text-zinc-400 text-center font-semibold">
              xyz@gmail.com
            </p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <p className="text-white text-center font-semibold">Phone Number</p>
            <p className="text-zinc-400 text-center font-semibold">
              9483847234
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 mt-8">
        <h2 className="text-2xl text-zinc-200 text-center font-semibold mb-4">
          Address
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <p className="text-white text-center font-semibold">Country</p>
            <p className="text-zinc-400 text-center font-semibold">India</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <p className="text-white text-center font-semibold">State</p>
            <p className="text-zinc-400 text-center font-semibold">
              Maharashtra
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 bg-zinc-800 p-4 rounded-md border-2 border-zinc-400">
            <p className="text-white text-center font-semibold">Address</p>
            <p className="text-zinc-400 text-center font-semibold">-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
