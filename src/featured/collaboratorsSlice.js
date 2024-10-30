// src/features/collaborators/collaboratorsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const collaboratorsSlice = createSlice({
  name: 'collaborators',
  initialState: [],
  reducers: {
    addCollaborator: (state, action) => {
      state.push(action.payload);
    },
    updateCollaborator: (state, action) => {
      const index = state.findIndex(collab => collab.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeCollaborator: (state, action) => {
      return state.filter(collab => collab.id !== action.payload);
    },
  },
});

export const { addCollaborator, updateCollaborator, removeCollaborator } = collaboratorsSlice.actions;
export default collaboratorsSlice.reducer;
