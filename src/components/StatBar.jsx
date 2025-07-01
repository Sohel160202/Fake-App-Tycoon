// src/components/StatBar.jsx
import React from 'react';
import useGameStore from '../store/GameStore';

export default function StatBar() {
  const { stats } = useGameStore();

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white p-2 flex justify-around text-sm z-50 shadow-md">
      <div>💰 Funding: ${stats.funding.toLocaleString()}</div>
      <div>📣 Hype: {stats.hype}%</div>
      <div>🐛 Bugs: {stats.bugs}</div>
      <div>🧑‍🤝‍🧑 Users: {stats.users.toLocaleString()}</div>
      <div>🤝 Reputation: {stats.reputation}</div>
    </div>
  );
}
