// src/components/ChaosEventEngine.jsx
import React, { useState, useEffect } from 'react';
import useGameStore from '../store/GameStore';
import { chaosEvents } from '../data/chaosEvents';

export default function ChaosEventEngine({ onComplete }) {
  const [event, setEvent] = useState(null);
  const updateStat = useGameStore((s) => s.updateStat);

  useEffect(() => {
    const randomEvent = chaosEvents[Math.floor(Math.random() * chaosEvents.length)];
    setEvent(randomEvent);
  }, []);

  const handleOption = (effects) => {
    Object.entries(effects).forEach(([key, value]) => updateStat(key, value));
    if (typeof onComplete === 'function') onComplete();
  };

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center text-white">
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">🌀 Chaos Event!</h2>
        <p className="mb-6 text-lg">{event.description}</p>
        <div className="space-y-3">
          {event.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(opt.effects)}
              className="bg-red-600 hover:bg-red-700 w-full text-left px-4 py-2 rounded-xl"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
