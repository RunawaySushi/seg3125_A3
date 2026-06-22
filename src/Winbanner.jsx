import React from 'react';
import { formatTime } from './GameConfig.js';
import './WinBanner.css';

export default function WinBanner({ moves, seconds, onNewGame }) {
  if (moves === null) return null;

  return (
    <div className="win-banner">
      <p className="win-heading">All pairs found!</p>
      <p className="win-sub">
        {moves} moves &middot; {formatTime(seconds)}
      </p>
      <button className="win-btn" onClick={onNewGame}>
        Play again
      </button>
    </div>
  );
}