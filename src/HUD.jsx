import React from 'react';
import { formatTime } from './GameConfig';
import './HUD.css';

export default function HUD({ moves, seconds, onNewGame }) {
  return (
    <div className="hud">
      <Stat label="Moves" value={moves} />
      <Stat label="Time" value={formatTime(seconds)} />
      <button className="new-btn" onClick={onNewGame}>
        New game
      </button>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  );
}