// src/phases/BuildSprint.jsx
import React, { useState } from 'react';
import useGameStore from '../store/GameStore';

const featureChoices = [
  {
    name: 'Dark Mode',
    type: 'real',
    effects: { users: 2, reputation: 1, bugs: 0 }
  },
  {
    name: 'Quantum Feedback AI',
    type: 'fake',
    effects: { hype: 3, reputation: -1, bugs: 2 }
  },
  {
    name: 'Decentralized Clap System',
    type: 'fake',
    effects: { hype: 2, bugs: 2, reputation: -1 }
  },
  {
    name: 'Invite-Only Growth Loop',
    type: 'real',
    effects: { users: 3, hype: 1, bugs: 1 }
  },
  {
    name: 'Vaporwave UI Pack',
    type: 'real',
    effects: { users: 1, hype: 2, bugs: 0 }
  }
];

export default function BuildSprint() {
  const [selected, setSelected] = useState([]);
  const updateStat = useGameStore((s) => s.updateStat);
  const setPhase = useGameStore((s) => s.setPhase);

  const toggleFeature = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const handleSubmit = () => {
    const chosen = featureChoices.filter((f) => selected.includes(f.name));
    chosen.forEach(({ effects }) => {
      Object.entries(effects).forEach(([key, value]) => updateStat(key, value));
    });
    setPhase('hype');
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🛠️ Build Sprint</h1>
      <p className="text-gray-400 text-center mb-6 max-w-lg">
        Choose 2–3 features to add this sprint. Mix real and fake features to keep the hype high — but watch your bug count.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {featureChoices.map((f, idx) => (
          <button
            key={idx}
            onClick={() => toggleFeature(f.name)}
            className={`p-4 rounded-xl border ${selected.includes(f.name) ? 'bg-purple-700 border-purple-500' : 'bg-gray-800 border-gray-700'} text-left`}
          >
            <h3 className="text-lg font-bold">{f.name}</h3>
            <p className="text-sm text-gray-400">Type: {f.type}</p>
            <p className="text-sm text-gray-400">
              Effects: {Object.entries(f.effects).map(([k, v]) => `${k} ${v > 0 ? '+' : ''}${v}`).join(', ')}
            </p>
          </button>
        ))}
      </div>

      <button
        disabled={selected.length < 2}
        onClick={handleSubmit}
        className="mt-8 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl disabled:opacity-50"
      >
        🚀 Launch Sprint
      </button>
    </div>
  );
}
