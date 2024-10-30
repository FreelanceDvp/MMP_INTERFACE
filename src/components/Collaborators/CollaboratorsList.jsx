// src/components/Collaborators/CollaboratorsList.jsx
import React from 'react';

const CollaboratorsList = ({ collaborators, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Liste des Collaborateurs</h2>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Rôle</th>
            <th>Accès</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {collaborators.map((collab) => (
            <tr key={collab.id}>
              <td>{collab.name}</td>
              <td>{collab.role}</td>
              <td>{collab.access}</td>
              <td>
                <button onClick={() => onEdit(collab.id)} className="text-blue-500">Modifier</button>
                <button onClick={() => onDelete(collab.id)} className="text-red-500 ml-2">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollaboratorsList;
