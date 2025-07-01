// src/phases/GameEnd.jsx
import React from 'react';
import useGameStore from '../store/GameStore';

export default function GameEnd() {
  const { funding, reputation, hype, bugs, users, resetGame } = useGameStore();

  let title = '🤔 Something Weird Happened';
  let message = 'Your startup journey was... chaotic.';

  if (funding >= 10 && reputation >= 7) {
    title = '🚀 IPO Billionaire';
    message = 'You faked it just enough to make it. Wall Street loves you.';
  } else if (reputation <= 1 && bugs >= 5) {
    title = '💥 Cancelled & Exposed';
    message = 'A viral thread destroyed your company overnight.';
  } else if (hype >= 10 && users <= 2) {
    title = '🔥 Hype Machine, No Substance';
    message = 'Millions knew your name. Nobody used your app.';
  } else if (reputation >= 6 && funding <= 2 && users >= 5) {
    title = '🧠 Real Startup Hero';
    message = 'You accidentally built something that helped people.';
  } else if (bugs >= 10) {
    title = '🐞 Bugged Out';
    message = 'Your app became self-aware and deleted itself.';
  } else if (funding >= 8 && reputation <= 2) {
    title = '👔 Silicon Valley Sociopath';
    message = 'You sold out fast and left faster.';
  } else if (reputation >= 4 && users >= 8 && bugs <= 3) {
    title = '🌱 Organic Growth Legend';
    message = 'Slow and steady won the race. Somehow.';
  }

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
