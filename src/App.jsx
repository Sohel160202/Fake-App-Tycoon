// src/App.jsx
import React from 'react';
import GameController from './layout/GameController';
import HUD from './layout/HUD';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <HUD />
      <GameController />
    </div>
  );
}
