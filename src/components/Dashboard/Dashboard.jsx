// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import StatCard from './StatCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Utilisateurs" value="1,245" color="bg-blue-600" />
        <StatCard title="Ventes" value="$12,340" color="bg-green-600" />
        <StatCard title="Nouveaux inscrits" value="98" color="bg-purple-600" />
      </div>
    </div>
  );
};

export default Dashboard;
