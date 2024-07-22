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
        <div className="flex-col ">
          <div className="flex gap-4 mb-4">
            <div className="bg-neutral-800  h-fit py-1 w-1/2 rounded-md ">
              <div  className=" text-center font-semibold">
                Name
              </div>
              <p className="text-center text-zinc-400 font-semibold">xyz</p>
            </div>
              <div className="bg-neutral-800  h-fit py-1 w-1/2 rounded-md ">
                <div  className=" text-center font-semibold">
                  Date of Birth
                </div>
                <p className="text-center text-zinc-400 font-semibold">9 december 2004</p>
              </div>
          </div>
          <div className="flex gap-4">
              <div className="bg-neutral-800  h-fit py-1 w-1/2 rounded-md ">
                <div  className=" text-center font-semibold">
                  Email Id
                </div>
                <p className="text-center text-zinc-400 font-semibold">xyz@gmail.com</p>
              </div>
                <div className="bg-neutral-800  h-fit py-1 w-1/2 rounded-md ">
                  <div  className=" text-center font-semibold">
                    Mobile Number
                  </div>
                  <p className="text-center text-zinc-400 font-semibold">9232324433</p>
              </div>
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
