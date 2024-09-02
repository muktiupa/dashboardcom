// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4 text-xl font-semibold">Sidebar</div>
      <ul>
      <li className="flex items-center p-4 hover:bg-gray-700">
          {/* Activity */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
          <span>Activity</span>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700">
          {/* Icon for Inquari Management */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
          <span>Inquari Management</span>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700">
          {/* Icon for Student Management (Profile Icon) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 13.182a4 4 0 0 1 5.758 0l.121.121.121-.121a4 4 0 0 1 5.758 0A6 6 0 1 1 5.121 13.182z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m-5-7h10" />
          </svg>
          <span>Student Management</span>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700">
          {/* Icon for UI Management */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-9 5h9" />
          </svg>
          <span>UI Management</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
