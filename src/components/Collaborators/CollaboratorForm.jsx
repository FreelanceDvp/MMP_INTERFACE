// src/components/Collaborators/CollaboratorForm.jsx
import React, { useState } from 'react';

const CollaboratorForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Utilisateur');
  const [access, setAccess] = useState('Accès par défaut');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, role, access });
    setName('');
    setRole('Utilisateur');
    setAccess('Accès par défaut');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Nom du collaborateur"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 w-full mb-2">
        <option>Admin</option>
        <option>Éditeur</option>
        <option>Utilisateur</option>
      </select>
      <select value={access} onChange={(e) => setAccess(e.target.value)} className="border p-2 w-full mb-2">
        <option>Accès par défaut</option>
        <option>Accès complet</option>
        <option>Accès limité</option>
      </select>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Enregistrer</button>
    </form>
  );
};

export default CollaboratorForm;
