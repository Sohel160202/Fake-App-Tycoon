// src/phases/CrisisControl.jsx
import React, { useState } from 'react';
import useGameStore from '../store/GameStore';

const crisisEvents = [
  {
    id: 'dataleak',
    scenario: "A whistleblower claims your app is selling user data to a third-party 'emotion analytics' firm.",
    options: [
      {
        text: "Deny everything and blame a rogue intern.",
        effects: { reputation: -2, hype: 1 }
      },
      {
        text: "Admit fault and spin it as a learning moment.",
        effects: { reputation: 1, users: -2 }
      },
      {
        text: "Sue the whistleblower and go dark.",
        effects: { funding: -2, reputation: -3, hype: -1 }
      }
    ]
  },
  {
    id: 'platform-ban',
    scenario: "Your app has been removed from major app stores for violating unclear content policies.",
    options: [
      {
        text: "Launch an emotional video campaign about tech censorship.",
        effects: { hype: 2, reputation: 1, funding: -1 }
      },
      {
        text: "Quickly launch a web-only version.",
        effects: { users: 2, bugs: 2 }
      },
      {
        text: "Bribe a lobbyist to reverse the ban.",
        effects: { funding: -3, reputation: -2, bugs: -1 }
      }
    ]
  },
  {
    id: 'cofounder-exit',
    scenario: "Your co-founder goes public about internal conflict, citing 'toxic culture' and fraud.",
    options: [
      {
        text: "Discredit them with a fake lawsuit.",
        effects: { reputation: -2, hype: -1 }
      },
      {
        text: "Offer them a payout and NDA.",
        effects: { funding: -2, reputation: 1 }
      },
      {
        text: "Post a dramatic apology blog post.",
        effects: { reputation: 2, users: -1 }
      }
    ]
  },
  {
    id: 'feature-flop',
    scenario: "A fake feature you hyped doesn’t exist — and now it’s trending as a meme failure.",
    options: [
      {
        text: "Quickly build a minimal fake version.",
        effects: { bugs: 3, reputation: -1, hype: 1 }
      },
      {
        text: "Blame a translation error and remove all traces.",
        effects: { hype: -2, reputation: -2 }
      },
      {
        text: "Embrace the meme with ironic merchandise.",
        effects: { hype: 2, reputation: 1 }
      }
    ]
  },
  {
    id: 'investor-pressure',
    scenario: "Your lead investor demands a 10x return or threatens to expose your lies.",
    options: [
      {
        text: "Give them priority shares and stall.",
        effects: { funding: -2, reputation: -1 }
      },
      {
        text: "Expose them first in a reverse PR stunt.",
        effects: { hype: 2, reputation: -2 }
      },
      {
        text: "Negotiate a merger exit.",
        effects: { users: 1, funding: -1, reputation: 1 }
      }
    ]
  }
];

export default function CrisisControl() {
  const [step, setStep] = useState(0);
  const updateStat = useGameStore((s) => s.updateStat);
  const setPhase = useGameStore((s) => s.setPhase);

  const handleOption = (effects) => {
    Object.entries(effects).forEach(([stat, value]) => updateStat(stat, value));
    if (step + 1 < crisisEvents.length) {
      setStep(step + 1);
    } else {
      setPhase('end');
    }
  };

  const event = crisisEvents[step];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🧨 Crisis Control</h1>
      <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg w-full max-w-xl">
        <p className="text-lg font-medium mb-4">{event.scenario}</p>
        <div className="space-y-3">
          {event.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(opt.effects)}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl w-full text-left"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
