// src/phases/HypeMachine.jsx
import React, { useState } from 'react';
import useGameStore from '../store/GameStore';

const hypeEvents = [
  {
    id: 'celebrity-shout',
    scenario: "A washed-up celebrity offers to tweet about your app for $50K.",
    options: [
      {
        text: "Do it. Fame is fame.",
        effects: { hype: 3, funding: -2, reputation: -1 }
      },
      {
        text: "Politely decline and invest in community building.",
        effects: { reputation: 2, hype: 1 }
      }
    ]
  },
  {
    id: 'bug-viral',
    scenario: "A bug makes your app crash into a rainbow screen. Users love it and think it’s intentional.",
    options: [
      {
        text: "Call it the 'Rainbow Zen Mode'.", effects: { hype: 2, reputation: 1 } },
      {
        text: "Fix it and apologize publicly.", effects: { bugs: -2, reputation: 2 } }
    ]
  },
  {
    id: 'trend-chase',
    scenario: "#SleepAppChallenge is trending. Your app doesn't do that, but you could fake a tie-in.",
    options: [
      {
        text: "Fake a collab with influencers.", effects: { hype: 3, reputation: -1 } },
      {
        text: "Ignore trends. Focus on product.", effects: { reputation: 2 } }
    ]
  }
];

export default function HypeMachine() {
  const [step, setStep] = useState(0);
  const updateStat = useGameStore((s) => s.updateStat);
  const setPhase = useGameStore((s) => s.setPhase);

  const handleOption = (effects) => {
    Object.entries(effects).forEach(([stat, value]) => updateStat(stat, value));
    if (step + 1 < hypeEvents.length) {
      setStep(step + 1);
    } else {
      setPhase('crisis');
    }
  };

  const event = hypeEvents[step];

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
      </div>
    </div>
  );
}
