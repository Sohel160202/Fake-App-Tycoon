// src/phases/GameEnd.jsx
import React from 'react';
import useGameStore from '../store/GameStore';
import { endings } from '../data/endings';

export default function GameEnd() {
  const { funding, reputation, hype, bugs, users, resetGame } = useGameStore();

  const finalStats = { funding, reputation, hype, bugs, users };
  const matchedEnding = endings.find(e => e.condition(finalStats));

  const title = matchedEnding?.title || '🤔 Something Weird Happened';
  const message = matchedEnding?.description || 'Your startup journey was... chaotic.';

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-300 mb-6 max-w-xl">{message}</p>
      <div className="bg-gray-800 p-4 rounded-xl max-w-sm w-full text-left">
        <p>💰 Funding: {funding}</p>
        <p>📈 Hype: {hype}</p>
        <p>🧠 Reputation: {reputation}</p>
        <p>🐛 Bugs: {bugs}</p>
        <p>👥 Users: {users}</p>
      </div>
      <button
        onClick={resetGame}
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl"
      >
        🔄 Restart Simulation
      </button>
    </div>
  );
}
