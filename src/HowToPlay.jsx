import React from 'react';
import './HowToPlay.css';

export default function HowToPlay({ onClose }) {
  return (
    <div className="htp-overlay" onClick={onClose}>
      <div className="htp-card" onClick={e => e.stopPropagation()}>
        <button className="htp-close" onClick={onClose}>✕</button>
        <h2 className="htp-title">How to Play</h2>
        <ul className="htp-list">
          <li>Flip two cards at a time by clicking them.</li>
          <li>If they match, they stay face up.</li>
          <li>If they don't, they flip back over.</li>
          <li>Match all pairs to win</li>
          <li>Try to finish in as few moves and as little time as possible.</li>
        </ul>
      </div>
    </div>
  );
}
