import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-1 p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-4 mb-4">
        <StatusCard title="Completed" count="0" />
        <StatusCard title="In Progress" count="0" />
        <StatusCard title="Pending" count="0" />
        <StatusCard title="Failed" count="0" />
      </div>
      <div className="bg-neutral-800 p-4 rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full h-96">
            <thead>
              <tr className=" rounded-xl">
                <th className="px-4 bg-neutral-900  text-center py-2  text-sm font-medium text-neutral-300">
                  Name
                </th>
                <th className="px-4 bg-neutral-900 text-center py-2  text-sm font-medium text-neutral-300">
                  Task type
                </th>
                <th className="px-4 bg-neutral-900 text-center py-2  text-sm font-medium text-neutral-300">
                  Status
                </th>
                <th className="px-4 bg-neutral-900 text-center py-2  text-sm font-medium text-neutral-300">
                  Images
                </th>
                <th className="px-4 bg-neutral-900 text-center py-2  text-sm font-medium text-neutral-300">
                  Date created
                </th>
                <th className="px-4 bg-neutral-900 text-center py-2  text-sm font-medium text-neutral-300">
                  Project
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-2 font-semibold text-center text-sm text-neutral-300 h-1/2"
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

const StatusCard = ({ title, count }) => {
  return (
    <div className="bg-neutral-700  p-4 rounded-md flex flex-col items-center">
      <h3 className="text-neutral-300 font-bold text-2xl mb-1">{count}</h3>
      <p className="text-neutral-400 font-semibold text-sm text-center">{title}</p>
    </div>
  );
};

export default Dashboard;