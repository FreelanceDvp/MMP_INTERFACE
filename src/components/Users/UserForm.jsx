// src/components/Users/UserForm.jsx
import React, { useState } from 'react';

const UserForm = ({ onSave, existingUser }) => {
  const [username, setUsername] = useState(existingUser ? existingUser.username : '');
  const [role, setRole] = useState(existingUser ? existingUser.role : 'user');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ username, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom d'utilisateur</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Rôle</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="editor">Éditeur</option>
          <option value="user">Utilisateur</option>
        </select>
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default UserForm;
