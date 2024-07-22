import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className=" flex-1 p-4  ">
      {/* Search and Status */}
      <div className="flex items-center mt-10  ml-2 gap-3 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-neutral-800 p-2 rounded  text-white    "
        />
        <button className="bg-neutral-800  rounded-md ">
          {<BiSearchAlt className="size-10 px-2 text-zinc-500 hover:text-zinc-600" />}
        </button>
      </div>
      {/* Table */}
      <div className=" p-4 rounded-xl ">
        <div className="overflow-x-auto ">
          <table className="min-w-full ">
            <thead>
              <tr>
                <th className="px-4 bg-neutral-900 py-2 text-left text-sm font-medium text-neutral-300">
                  Name
                </th>
                <th className="px-4 bg-neutral-900 py-2 text-left text-sm font-medium text-neutral-300">
                  Objects
                </th>
                <th className="px-4 bg-neutral-900 py-2 text-left text-sm font-medium text-neutral-300">
                  Accuracy
                </th>
                <th className="px-4 bg-neutral-900 py-2 text-left text-sm font-medium text-neutral-300">
                  Type
                </th>
                <th className="px-4 bg-neutral-900 py-2 text-left text-sm font-medium text-neutral-300">
                  Images
                </th>
                <th className="px-4 bg-neutral-900 py-2 text-left text-sm font-medium text-neutral-300">
                  Date created
                </th>
                <th className="px-4 bg-neutral-900 py-2 text-left text-sm font-medium text-neutral-300">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="7"
                  className="px-2 py-2 h-96 w-full bg-neutral-800 text-center text-sm text-neutral-300"
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
