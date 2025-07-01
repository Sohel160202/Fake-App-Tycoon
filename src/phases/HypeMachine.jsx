// src/phases/HypeMachine.jsx
import React, { useState, useEffect } from 'react';
import useGameStore from '../store/GameStore';
import { hypeEvents } from '../data/hypeEvents';

export default function HypeMachine() {
  const [eventQueue, setEventQueue] = useState([]);
  const [step, setStep] = useState(0);
  const updateStat = useGameStore((s) => s.updateStat);
  const setPhase = useGameStore((s) => s.setPhase);

  useEffect(() => {
    // Shuffle events on mount
    const shuffled = [...hypeEvents].sort(() => Math.random() - 0.5);
    setEventQueue(shuffled);
  }, []);

  const handleOption = (effects) => {
    Object.entries(effects).forEach(([stat, value]) => updateStat(stat, value));
    if (step + 1 < eventQueue.length) {
      setStep(step + 1);
    } else {
      setPhase('crisis'); // Move to next phase
    }
  };

  const event = eventQueue[step];

  if (!event) return null;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">📢 Hype Machine</h1>
      <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg w-full max-w-xl">
        <p className="text-lg font-medium mb-4">{event.scenario}</p>
        <div className="space-y-3">
          {event.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(opt.effects)}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl w-full text-left"
            >
              {opt.text}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Event {step + 1} of {eventQueue.length}
        </p>
      </div>
    </div>
  );
}
