import React, { useState } from 'react';
import useGameStore from '../store/GameStore';
import { investorQuestions } from '../data/investorQuestions';

export default function InvestorPitch() {
  const [step, setStep] = useState(0);
  const updateStat = useGameStore((s) => s.updateStat);
  const setPhase = useGameStore((s) => s.setPhase);

  const handleAnswer = (effects) => {
    Object.entries(effects).forEach(([stat, value]) => {
      updateStat(stat, value);
    });

    if (step + 1 < investorQuestions.length) {
      setStep(step + 1);
    } else {
      setPhase('build'); // move to next phase
    }
  };

  const question = investorQuestions[step];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 Investor Pitch</h1>
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-xl text-center">
        <p className="text-lg font-medium mb-6">{question.prompt}</p>
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.effects)}
              className="bg-blue-600 hover:bg-blue-700 w-full px-4 py-2 rounded-xl text-left"
            >
              {opt.text}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4">Question {step + 1} of {investorQuestions.length}</p>
      </div>
    </div>
  );
}
