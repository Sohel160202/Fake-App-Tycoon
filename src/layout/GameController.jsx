// src/layout/GameController.jsx
import React from 'react';
import useGameStore from '../store/GameStore';

// Import all phase components
import InvestorPitch from '../phases/InvestorPitch';
import BuildSprint from '../phases/BuildSprint';
import HypeMachine from '../phases/HypeMachine';
import CrisisControl from '../phases/CrisisControl';
import GameEnd from '../phases/GameEnd';

export default function GameController() {
  const currentPhase = useGameStore((state) => state.currentPhase);

  switch (currentPhase) {
    case 'pitch':
      return <InvestorPitch />;
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
}
