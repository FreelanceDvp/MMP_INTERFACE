// src/components/Layout/Header.jsx
import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Interface Admin</h1>
      <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">
        Déconnexion
      </button>
    </header>
  );
};

export default Header;
