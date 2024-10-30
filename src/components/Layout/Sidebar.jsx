// src/components/Layout/Sidebar.jsx
import React from 'react';
import { FaHome, FaUsers, FaCogs } from 'react-icons/fa';

const Sidebar = () => (
  <nav className="w-64 bg-gray-200 p-4 h-full">
    <ul>
      <li><a href="/dashboard" className="flex items-center"><FaHome className="mr-2" /> Tableau de Bord</a></li>
      <li><a href="/collaborators" className="flex items-center"><FaUsers className="mr-2" /> Collaborateurs</a></li>
      <li><a href="/settings" className="flex items-center"><FaCogs className="mr-2" /> Paramètres</a></li>
    </ul>
  </nav>
);

export default Sidebar;
