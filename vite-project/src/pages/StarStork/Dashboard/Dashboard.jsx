import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import ObjectsDetected from "./ObjectDetected";
import TaskAnalysis from './TaskAnalysis'

const ProjectDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [projects, setProjects] = useState([
    { id: 1, title: "Sample Windmill", image: null, date: "10 June 2024", details: "0" },
    { id: 2, title: "Sample Windmill", image: null, date: "10 June 2024", details: "0" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  const handleAddProject = () => {
    const today = new Date();
    const formattedDate = `${today.getDate()} ${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}`;
    const newProject = {
      id: projects.length + 1,
      title: newProjectName,
      image: null,
      date: formattedDate,
      details: "0"
    };
    setProjects([...projects, newProject]);
    setModalOpen(false);
    setNewProjectName("");
  };

  return (
    <div className="p-4  rounded-lg">
      <div className="flex items-center mb-4">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center px-3 py-1 bg-neutral-800 border border-neutral-900 text-neutral-500 font-semibold text-sm rounded-md shadow-sm hover:bg-neutral-800"
          >
            Projects <FaCaretDown className="ml-2 size-6" />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 text-neutral-600 font-semibold rounded-md shadow-lg z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer overflow-hidden hover:text-neutral-500">Projects</li>
                <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer overflow-hidden hover:text-neutral-500">Imageset</li>
              </ul>
            </div>
          )}
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="ml-4 flex items-center justify-center w-10 h-10 text-white bg-neutral-800 rounded-md shadow-md hover:bg-neutral-800"
        >
          <IoIosAddCircle className="w-6 h-6" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 bg-neutral-900 p-5 rounded-2xl">
          {projects.map((project) => (
            <div className="flex-col">
            <div
              key={project.id}
              className="flex-shrink-0 w-28 h-28 bg-gray-200 flex items-center justify-center rounded-lg"
              style={{
                backgroundImage: project.image ? `url(${project.image})` : "none",
                backgroundSize: "cover",
                backgroundColor: project.image ? "transparent" : "#4f4f4f", // Default solid color
              }}
            >
              </div>
              {/* {!project.image && ( */}
                <div className="text-left text-neutral-500 font-semibold">
                  <span className="text-sm text-neutral-400">{project.title}</span>
                  <p className="text-xs">{project.date}</p>
                  <p className="text-xs">{project.details}</p>
                </div>
               {/* )} */}
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-neutral-950 bg-opacity-70 flex items-center justify-center">
          <div className="bg-neutral-900 p-4 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg text-neutral-500 font-semibold mb-4">Add New Project</h2>
            <input
              type="text"
              className="w-full px-3 py-2 mb-4 border border-neutral-900 bg-neutral-800 rounded-md placeholder-neutral-600 text-neutral-500"
              placeholder="Project Name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <div className="flex justify-end font-semibold">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-1 border-solid border-2 border-neutral-600 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-400 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-800 text-neutral-400 rounded-md"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex">
        <div 
        className="w-1/2
        lg:mt-5 
        2xl:mt-10">
          <ObjectsDetected/>
        </div>
        <div 
        className="w-1/2
        lg:mt-9 lg:ml-5
        2xl:mt-16 2xl:mx-7 2xl:mb-10">
          <TaskAnalysis/>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;