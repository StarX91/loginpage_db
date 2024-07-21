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
      <div className="bg-zinc-800 p-4 rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full h-96">
            <thead>
              <tr className="bg-zinc-900 rounded-sm">
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Task type
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Images
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Date created
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white">
                  Project
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-2 font-semibold text-center text-sm text-white h-1/2"
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
    <div className="bg-zinc-700  p-4 rounded-md flex flex-col items-center">
      <h3 className="text-white text-xl mb-2">{count}</h3>
      <p className="text-white text-sm">{title}</p>
    </div>
  );
};

export default Dashboard;