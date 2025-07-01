// src/components/InvestorPitch.jsx
import React, { useState } from 'react';

const pitchQuestions = [
  {
    question: "What makes your product stand out?",
    options: [
      { text: "We're disrupting disruption itself", score: 2 },
      { text: "Blockchain + AI = 💰", score: 3 },
      { text: "We haven't figured that out yet", score: -1 },
      { text: "Our intern is super passionate", score: 1 }
    ]
  },
  {
    question: "How will you monetize this?",
    options: [
      { text: "Ads. On top of ads.", score: 1 },
      { text: "We don’t believe in profit, just vibes", score: -2 },
      { text: "Subscription model for features that don’t exist", score: 3 },
      { text: "We'll sell user data ethically", score: 2 }
    ]
  },
  {
    question: "How big is your market?",
    options: [
      { text: "Roughly the size of the universe", score: 3 },
      { text: "3 of my friends said they’d use it", score: -1 },
      { text: "If everyone on Earth downloaded it twice...", score: 2 },
      { text: "We have no clue, but sounds big", score: 1 }
    ]
  }
];

export default function InvestorPitch({ fakeApp }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (optionScore) => {
    const nextScore = score + optionScore;
    setScore(nextScore);

    if (current + 1 < pitchQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    if (score >= 7) return "🔥 Investors are throwing money at you!";
    if (score >= 4) return "💸 You secured some angel funding.";
    return "🫠 Your pitch flopped. Maybe try ghost-hunting apps next?";
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 Investor Pitch</h1>
      <h2 className="text-xl mb-2 text-gray-400">{fakeApp.name}</h2>

      {!finished ? (
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg w-full max-w-xl">
          <p className="text-lg font-medium mb-4">{pitchQuestions[current].question}</p>
          <div className="space-y-3">
            {pitchQuestions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt.score)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-full text-left"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-green-700 p-6 rounded-xl text-center shadow-lg w-full max-w-xl">
          <p className="text-2xl font-semibold mb-2">{getResult()}</p>
          <p className="text-gray-300">Your final pitch score: {score}</p>
        </div>
      )}
    </div>
  );
}
