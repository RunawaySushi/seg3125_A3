import { useState, useEffect, useRef, useCallback } from 'react';
import { DIFFICULTIES, pickNumbers, pickLetters, buildDeck } from './GameConfig.js';

export default function useGameState() {
  const [difficulty, setDifficulty] = useState('easy');
  const [symbolType, setSymbolType] = useState('numbers');
  const [cards, setCards]           = useState([]);
  const [flipped, setFlipped]       = useState([]);
  const [matched, setMatched]       = useState(new Set());
  const [wrong, setWrong]           = useState([]);
  const [moves, setMoves]           = useState(0);
  const [seconds, setSeconds]       = useState(0);
  const [winMoves, setWinMoves]     = useState(null);
  const [winSeconds, setWinSeconds] = useState(null);
  const [started, setStarted] = useState(false);

  const lockedRef   = useRef(false);
  const timerRef    = useRef(null);
  const secondsRef  = useRef(0);

  useEffect(() => { secondsRef.current = seconds; }, [seconds]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setSeconds(0);
    timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
  }, []);

  const newGame = useCallback((diff = difficulty, symType = symbolType) => {
    clearInterval(timerRef.current);
    const cfg  = DIFFICULTIES[diff];
    const symbols = symType === 'letters' ? pickLetters(cfg.pairs) : pickNumbers(cfg.pairs);
    const deck = buildDeck(symbols);
    setCards(deck);
    setFlipped([]);
    setMatched(new Set());
    setWrong([]);
    setMoves(0);
    setWinMoves(null);
    setWinSeconds(null);
    lockedRef.current = false;
    startTimer();
  }, [difficulty, symbolType, startTimer]);

  useEffect(() => { newGame(difficulty, symbolType); }, [difficulty, symbolType]); 

  useEffect(() => () => clearInterval(timerRef.current), []);

  const flip = useCallback((i) => {
    if (lockedRef.current) return;
    if (flipped.includes(i)) return;
    if (matched.has(cards[i]?.pairKey)) return;

    const next = [...flipped, i];
    setFlipped(next);

    if (next.length === 2) {
      lockedRef.current = true;
      const [a, b] = next;
      const newMoves = moves + 1;
      setMoves(newMoves);

      if (cards[a].pairKey === cards[b].pairKey) {
        setTimeout(() => {
          const newMatched = new Set(matched);
          newMatched.add(cards[a].pairKey);
          setMatched(newMatched);
          setFlipped([]);
          lockedRef.current = false;

          if (newMatched.size === DIFFICULTIES[difficulty].pairs) {
            clearInterval(timerRef.current);
            setWinMoves(newMoves);
            setWinSeconds(secondsRef.current);
          }
        }, 400);
      } else {
        setWrong(next);
        setTimeout(() => {
          setFlipped([]);
          setWrong([]);
          lockedRef.current = false;
        }, 900);
      }
    }
  }, [flipped, matched, cards, moves, difficulty]);

  return {
    difficulty, setDifficulty,
    symbolType, setSymbolType,
    started, setStarted,
    cards, flipped, matched, wrong,
    moves, seconds,
    winMoves, winSeconds,
    flip,
    newGame: () => newGame(difficulty, symbolType),
  };
}