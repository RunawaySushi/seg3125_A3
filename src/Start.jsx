import React, { useState } from 'react';
import DifficultyBar from './DifficultyBar';
import HowToPlay from './HowToPlay';
import './Start.css';

export default function Start({ difficulty, onDifficultyChange, onStart }) {
    
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="start-card-overlay">
      <div className="start-card">
        <div className="start-title-row">
          <h1 className="start-card-title">Déjà View</h1>
          <button className="help-btn" onClick={() => setShowHelp(true)}>?</button>
        </div>
        {showHelp && <HowToPlay onClose={() => setShowHelp(false)} />}
        <h2 className="start-card-subtitle">Symbol Matching Memory Game</h2>
        <p className="start-card-label">Select difficulty</p>
        <DifficultyBar current={difficulty} onChange={onDifficultyChange} />
        <button className="start-card-start-btn" onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
}