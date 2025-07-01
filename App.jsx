// src/App.jsx
import React, { useState } from 'react';
import FakeAppGenerator from './components/FakeAppGenerator';
import InvestorPitch from './components/InvestorPitch';

export default function App() {
  const [step, setStep] = useState('generator');
  const [fakeApp, setFakeApp] = useState(null);

  const handleConfirmApp = (app) => {
    setFakeApp(app);
    setStep('pitch');
  };

  return (
    <>
      {step === 'generator' && <FakeAppGenerator onConfirm={handleConfirmApp} />}
      {step === 'pitch' && fakeApp && <InvestorPitch fakeApp={fakeApp} />}
    </>
  );
}
