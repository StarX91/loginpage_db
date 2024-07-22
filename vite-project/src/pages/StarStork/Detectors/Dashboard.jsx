import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className=" flex-1 p-4 ">
      {/* Search and Status */}
      <div className="flex items-center mt-16  ml-2 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-zinc-800 p-2 rounded  text-white  border-2 border-zinc-300 "
        />
        <button className="bg-zinc-800 ml-4 size-[3rem] rounded-md border-2 border-zinc-300">
          {<BiSearchAlt className="size-[2.5rem] pl-2 text-zinc-300" />}
        </button>
      </div>
      {/* Table */}
      <div className="bg-zinc-900 p-4 rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Objects
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Accuracy
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Images
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Date created
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="7"
                  className="px-2 py-2 h-96 w-full bg-neutral-800 text-center text-sm text-white"
                >
                  No Data found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
