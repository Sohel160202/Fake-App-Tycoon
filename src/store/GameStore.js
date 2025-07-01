const useGameStore = create((set) => ({
  // Core App Info
  appName: '',

  // Simulation Stats
  funding: 0,
  hype: 0,
  reputation: 5,
  bugs: 0,
  users: 0,
  buzzwords: 0,   // <--- Added
  metrics: 0,     // <--- Added

  // Current Phase
  currentPhase: 'pitch',

  // Actions
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
      buzzwords: 0,  // <--- Reset too
      metrics: 0,    // <--- Reset too
      currentPhase: 'pitch'
    })
}));
