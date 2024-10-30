import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span>Notifications</span>
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
