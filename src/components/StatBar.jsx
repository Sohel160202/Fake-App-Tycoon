// src/components/StatBar.jsx
import React from 'react';
import useGameStore from '../store/GameStore';

export default function StatBar() {
  const { stats } = useGameStore();

  const getColor = (key, value) => {
    switch (key) {
      case 'funding':
        return value > 1000000 ? 'text-green-400' : 'text-yellow-400';
      case 'hype':
        return value > 75 ? 'text-pink-400' : value > 40 ? 'text-yellow-300' : 'text-gray-300';
      case 'bugs':
        return value > 20 ? 'text-red-500' : value > 10 ? 'text-yellow-500' : 'text-green-400';
      case 'users':
        return value > 50000 ? 'text-green-400' : 'text-gray-300';
      case 'reputation':
        return value > 75 ? 'text-green-400' : value > 40 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white p-2 flex justify-around text-sm z-50 shadow-md">
      <div className={getColor('funding', stats.funding)}>💰 Funding: ${stats.funding.toLocaleString()}</div>
      <div className={getColor('hype', stats.hype)}>📣 Hype: {stats.hype}%</div>
      <div className={getColor('bugs', stats.bugs)}>🐛 Bugs: {stats.bugs}</div>
      <div className={getColor('users', stats.users)}>🧑‍🤝‍🧑 Users: {stats.users.toLocaleString()}</div>
      <div className={getColor('reputation', stats.reputation)}>🤝 Reputation: {stats.reputation}</div>
    </div>
  );
}
