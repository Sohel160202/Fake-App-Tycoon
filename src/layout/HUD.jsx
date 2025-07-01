// src/layout/HUD.jsx
import React from 'react';
import useGameStore from '../store/GameStore';

const Stat = ({ icon, label, value, color }) => (
  <div className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${color}`}>
    <span>{icon}</span>
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default function HUD() {
  const { funding, hype, reputation, bugs, users } = useGameStore();

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 bg-gray-900 text-white z-50 shadow-md">
      <h1 className="text-xl font-bold">📱 Fake App Tycoon</h1>
      <div className="flex gap-4">
        <Stat icon="💰" label="Funding" value={`$${funding}k`} color="text-green-400" />
        <Stat icon="📈" label="Hype" value={hype} color="text-purple-400" />
        <Stat icon="🧠" label="Reputation" value={reputation} color="text-blue-400" />
        <Stat icon="🐛" label="Bugs" value={bugs} color="text-red-400" />
        <Stat icon="👥" label="Users" value={users} color="text-yellow-400" />
      </div>
    </div>
  );
}
