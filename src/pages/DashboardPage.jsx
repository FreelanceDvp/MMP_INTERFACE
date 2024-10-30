// src/pages/DashboardPage.jsx
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 500 },
  // Ajoute plus de données ici
];

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tableau de Bord</h1>
      <div className="flex">
        <LineChart width={400} height={200} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        {/* Ajoute d'autres cartes statistiques ici */}
      </div>
    </div>
  );
};

export default DashboardPage;
