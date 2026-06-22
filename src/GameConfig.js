export const DIFFICULTIES = {
  easy:   { pairs: 6,  cols: 4, fontSize: '18px' },
  medium: { pairs: 8,  cols: 4, fontSize: '16px' },
  hard:   { pairs: 12, cols: 6, fontSize: '14px' },
};

export const SYMBOL_TYPES = ['numbers', 'letters'];

export function pickNumbers(count, max = 100) {
  const set = new Set();
  while (set.size < count) set.add(1 + Math.floor(Math.random() * max));
  return [...set];
}

export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function buildDeck(pairs) {
  return shuffle(
    [...pairs, ...pairs].map((n, i) => ({ n, id: i, pairKey: n }))
  );
}

export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

export function pickLetters(count) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shuffled = [...alphabet].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}