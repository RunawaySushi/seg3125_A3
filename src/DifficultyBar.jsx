import React from 'react';
import './DifficultyBar.css';

const LEVELS = ['easy', 'medium', 'hard'];

export default function DifficultyBar({ current, onChange }) {
  return (
    <div className="diff-bar">
      {LEVELS.map((level) => (
        <button
          key={level}
          className={`diff-btn${current === level ? ' active' : ''}`}
          onClick={() => onChange(level)}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  );
}