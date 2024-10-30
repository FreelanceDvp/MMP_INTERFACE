// src/components/Collaborators/MissionAssignment.jsx
import React, { useState } from 'react';

const MissionAssignment = ({ collaborator, onAssign }) => {
  const [mission, setMission] = useState('');

  const handleAssign = () => {
    onAssign(collaborator.id, mission);
    setMission('');
  };

  return (
    <div className="mt-4">
      <h3>Assigner une mission à {collaborator.name}</h3>
      <input
        type="text"
        placeholder="Description de la mission"
        value={mission}
        onChange={(e) => setMission(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleAssign} className="bg-blue-500 text-white px-4 py-2 rounded">Assigner</button>
    </div>
  );
};

export default MissionAssignment;
