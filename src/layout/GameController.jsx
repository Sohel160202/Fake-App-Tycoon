// src/layout/GameController.jsx
import React, { useState, useEffect } from 'react';
import useGameStore from '../store/GameStore';

// Import all phase components
import InvestorPitchEngine from '../phases/InvestorPitchEngine';
import BuildSprint from '../phases/BuildSprint';
import HypeMachine from '../phases/HypeMachine';
import CrisisControl from '../phases/CrisisControl';
import GameEnd from '../phases/GameEnd';
import ChaosEventEngine from '../components/ChaosEventEngine';
import HUD from './HUD';

export default function GameController() {
  const currentPhase = useGameStore((state) => state.currentPhase);
  const [showChaos, setShowChaos] = useState(false);

  useEffect(() => {
    if (['build', 'hype', 'crisis'].includes(currentPhase)) {
      const timer = setTimeout(() => {
        const shouldTriggerChaos = Math.random() < 0.5;
        if (shouldTriggerChaos) {
          setShowChaos(true);
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentPhase]);

  const handleChaosComplete = () => {
    setShowChaos(false);
  };

  const renderPhase = () => {
    switch (currentPhase) {
      case 'pitch':
        return <InvestorPitchEngine />;
      case 'build':
        return <BuildSprint />;
      case 'hype':
        return <HypeMachine />;
      case 'crisis':
        return <CrisisControl />;
      case 'end':
        return <GameEnd />;
      default:
        return <div className="text-white text-center mt-20">Unknown phase: {currentPhase}</div>;
    }
  };

  return (
    <>
      <HUD />
      {showChaos ? <ChaosEventEngine onComplete={handleChaosComplete} /> : renderPhase()}
    </>
  );
}
