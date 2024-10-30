// src/components/Dashboard.jsx
import React from 'react';
import StatCard from './StatCard';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Users" value="1,245" color="bg-blue-500" />
        <StatCard title="Sales" value="$12,340" color="bg-green-500" />
        <StatCard title="New Sign-ups" value="98" color="bg-purple-500" />
      </div>
    </div>
  );
};

export default Dashboard;
