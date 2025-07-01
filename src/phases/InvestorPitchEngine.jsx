// src/phases/InvestorPitchEngine.jsx
import React, { useState } from 'react';
import useGameStore from '../store/GameStore';
import { investors } from '../data/investors';

const sampleQuestions = [
  {
    id: 'scaling',
    question: "How do you plan to scale your app?",
    options: [
      { text: "AI-driven decentralization", traits: ['buzzwords', 'hype'] },
      { text: "We're onboarding influencers first", traits: ['hype'] },
      { text: "We have a 3-phase rollout plan", traits: ['metrics', 'reputation'] },
      { text: "We’ll scale when it breaks", traits: ['bugs'] }
    ]
  },
  {
    id: 'revenue',
    question: "What's your revenue model?",
    options: [
      { text: "Free forever, profit optional", traits: ['hype'] },
      { text: "User data licensing (but ethically)", traits: ['metrics', 'reputation'] },
      { text: "Premium tier with exclusive NFTs", traits: ['buzzwords', 'hype'] },
      { text: "Not sure yet", traits: ['bugs'] }
    ]
  },
  {
    id: 'team',
    question: "Tell us about your team.",
    options: [
      { text: "It's just me and a dream", traits: ['hype'] },
      { text: "We outsourced everything to a DAO", traits: ['buzzwords'] },
      { text: "Three devs, one PM, and a legal intern", traits: ['reputation', 'metrics'] },
      { text: "Our AI writes the code", traits: ['buzzwords', 'bugs'] }
    ]
  },
  {
    id: 'competition',
    question: "How do you compare to competitors?",
    options: [
      { text: "We're the Uber of everything", traits: ['buzzwords', 'hype'] },
      { text: "We pivot faster than they can load", traits: ['hype'] },
      { text: "We respect privacy and scale wisely", traits: ['reputation', 'metrics'] },
      { text: "We haven't checked, tbh", traits: ['bugs'] }
    ]
  },
  {
    id: 'vision',
    question: "Where do you see this app in 5 years?",
    options: [
      { text: "Running on Mars using quantum chips", traits: ['buzzwords', 'hype'] },
      { text: "Empowering communities with micro-ownership", traits: ['reputation', 'hype'] },
      { text: "Making passive income while we sleep", traits: ['metrics'] },
      { text: "Probably shut down and rebranded", traits: ['bugs'] }
    ]
  }
];

export default function InvestorPitchEngine() {
  const setPhase = useGameStore((state) => state.setPhase);
  const updateStat = useGameStore((state) => state.updateStat);

  const [investorIndex, setInvestorIndex] = useState(0);
  const [trust, setTrust] = useState(0);
  const investor = investors[investorIndex];
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleAnswer = (traits) => {
    let delta = 0;
    traits.forEach(trait => {
      delta += investor.preferences[trait] || 0;
    });
    setTrust(prev => prev + delta);

    if (questionIndex + 1 < sampleQuestions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (trust + delta >= investor.trustThreshold) {
        updateStat('funding', 5);
        updateStat('reputation', 1);
      } else {
        updateStat('reputation', -1);
      }

      if (investorIndex + 1 < investors.length) {
        setInvestorIndex(investorIndex + 1);
        setTrust(0);
        setQuestionIndex(0);
      } else {
        setPhase('build');
      }
    }
  };

  const currentQ = sampleQuestions[questionIndex];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">💼 Investor Pitch</h1>
        <h2 className="text-xl">{investor.emoji} {investor.name}</h2>
        <p className="text-gray-400 text-sm mt-1">{investor.description}</p>
        <p className="mt-2 text-green-400">Investor Trust: {trust}/{investor.trustThreshold}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg w-full max-w-xl">
        <p className="text-lg font-medium mb-4">{currentQ.question}</p>
        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.traits)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full text-left"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
