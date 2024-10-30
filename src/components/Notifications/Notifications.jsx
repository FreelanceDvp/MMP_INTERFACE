// src/components/Notifications.jsx
import React from 'react';

const Notifications = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
        <p className="font-bold">New update available!</p>
        <p>Check the latest updates to improve your experience.</p>
      </div>
    </div>
  );
};

export default Notifications;
