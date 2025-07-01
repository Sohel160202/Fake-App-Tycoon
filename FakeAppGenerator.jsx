// src/components/FakeAppGenerator.jsx
import React, { useState } from 'react';

const adjectives = [
  "Lazy", "Smart", "Quantum", "Virtual", "Hyper", "Clap", "Sleepy", "Woke", "Broken", "Viral"
];
const nouns = [
  "Wallet", "Brain", "Cat", "Chain", "GPT", "Clone", "Mirror", "Ghost", "Toilet", "Startup"
];
const buzzwords = [
  "on the Blockchain", "powered by AI", "for Mindfulness", "with Quantum Vibes",
  "backed by Gen Z", "using Deepfake Tech", "that Detects Emotions", "that Predicts Breakups"
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function FakeAppGenerator({ onConfirm }) {
  const [fakeApp, setFakeApp] = useState(generateFakeApp());

  function generateFakeApp() {
    const name = `${getRandom(adjectives)}${getRandom(nouns)}`;
    const tagline = `${name}: An app ${getRandom(buzzwords)}.`;
    return { name, tagline };
  }

  const regenerate = () => {
    const newApp = generateFakeApp();
    setFakeApp(newApp);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🚀 Your Fake Startup Idea</h1>
      <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
        <h2 className="text-2xl font-semibold">{fakeApp.name}</h2>
        <p className="mt-2 text-gray-300">{fakeApp.tagline}</p>
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={regenerate}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-medium"
          >
            🔄 Generate New Idea
          </button>
          <button
            onClick={() => onConfirm(fakeApp)}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl font-medium"
          >
            ✅ Use This Idea
          </button>
        </div>
      </div>
    </div>
  );
}
