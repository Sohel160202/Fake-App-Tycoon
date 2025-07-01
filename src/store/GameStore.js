// src/store/GameStore.js
import { create } from 'zustand';

const useGameStore = create((set) => ({
  appName: '',
  funding: 0,
  hype: 0,
  reputation: 5,
  bugs: 0,
  users: 0,
  currentPhase: 'pitch',

  setAppName: (name) => set({ appName: name }),

  updateStat: (stat, amount) =>
    set((state) => ({ [stat]: Math.max(0, (state[stat] || 0) + amount) })),

  setPhase: (phase) => set({ currentPhase: phase }),

  resetGame: () =>
    set({
      appName: '',
      funding: 0,
      hype: 0,
      reputation: 5,
      bugs: 0,
      users: 0,
      currentPhase: 'pitch'
    })
}));

// ✅ Add this line to fix the issue:
export default useGameStore;
