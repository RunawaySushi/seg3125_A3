import React from 'react';
import './SymbolType.css';

const TYPES = ['numbers', 'letters'];

export default function SymbolType({ current, onChange }) {
  return (
    <div className="symbol-bar">
      {TYPES.map((type) => (
        <button
          key={type}
          className={`symbol-btn${current === type ? ' active' : ''}`}
          onClick={() => onChange(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}