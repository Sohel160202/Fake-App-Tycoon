// src/layout/GameController.jsx
import React, { useState } from 'react';
import useGameStore from '../store/GameStore';

// Import all phase components
import InvestorPitchEngine from '../phases/InvestorPitchEngine';
import BuildSprint from '../phases/BuildSprint';
import HypeMachine from '../phases/HypeMachine';
import CrisisControl from '../phases/CrisisControl';
import GameEnd from '../phases/GameEnd';
import ChaosEventEngine from '../components/ChaosEventEngine';

export default function GameController() {
  const currentPhase = useGameStore((state) => state.currentPhase);
  const [showChaos, setShowChaos] = useState(false);
  const [afterChaosPhase, setAfterChaosPhase] = useState(null);

  const triggerChaos = (nextPhaseComponent) => {
    setAfterChaosPhase(nextPhaseComponent);
    setShowChaos(true);
  };

  const renderPhase = () => {
    switch (currentPhase) {
      case 'pitch':
        return <InvestorPitchEngine />;
      case 'build':
        return showChaos ? <ChaosEventEngine onComplete={() => setShowChaos(false)} /> : triggerChaos(<BuildSprint />);
      case 'hype':
        return showChaos ? <ChaosEventEngine onComplete={() => setShowChaos(false)} /> : triggerChaos(<HypeMachine />);
      case 'crisis':
        return showChaos ? <ChaosEventEngine onComplete={() => setShowChaos(false)} /> : triggerChaos(<CrisisControl />);
      case 'end':
        return <GameEnd />;
      default:
        return <div className="text-white text-center mt-20">Unknown phase: {currentPhase}</div>;
    }
  };

  return <>{showChaos ? <ChaosEventEngine onComplete={() => setShowChaos(false)} /> : renderPhase()}</>;
}
