import React, { useState } from 'react';
import DifficultyBar from './DifficultyBar';
import HUD from './HUD';
import Board from './Board';
import WinBanner from './Winbanner';
import useGameState from './UseGameState.js';
import { DIFFICULTIES } from './GameConfig.js';
import SymbolType from './SymbolType';
import Start from './Start';
import HowToPlay from './HowToPlay';
import './App.css';

export default function App() {
  const {
    difficulty, setDifficulty,
    symbolType, setSymbolType,
    started, setStarted,
    cards, flipped, matched, wrong,
    moves, seconds,
    winMoves, winSeconds,
    flip, newGame,
  } = useGameState();

  const [showHelp, setShowHelp] = useState(false);
  const cfg = DIFFICULTIES[difficulty];
  

  return (
  <div className="app-wrapper">
    {!started ? (
      <Start
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
        onStart={() => {
          newGame();
          setStarted(true);
        }}
      />
    ) : (
      <>
        <div className="title-row">      
          <h1 className="title">Déjà View</h1>
          <button className="help-btn" onClick={() => setShowHelp(true)}>?</button>
        </div>  
        {showHelp && <HowToPlay onClose={() => setShowHelp(false)} />} 
        <DifficultyBar current={difficulty} onChange={setDifficulty} />
        <SymbolType current={symbolType} onChange={setSymbolType} />
        <HUD moves={moves} seconds={seconds} onNewGame={newGame} />
        <Board
          cards={cards}
          flipped={flipped}
          matched={matched}
          wrong={wrong}
          onFlip={flip}
          cols={cfg.cols}
          fontSize={cfg.fontSize}
        />
        {winMoves !== null && (
          <WinBanner moves={winMoves} seconds={winSeconds} onNewGame={newGame} />
        )}
      </>
    )}
  </div>
);
}