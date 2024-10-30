// src/components/Dashboard/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${color} text-white`}>
      <h3>{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
