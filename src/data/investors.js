// src/data/investors.js
export const investors = [
  {
    id: 'mr-metrics',
    name: 'Mr. Metrics',
    emoji: '📊',
    description: 'Obsessed with numbers, hates uncertainty. Loves ROI, KPIs, and scalable models.',
    preferences: {
      funding: +2,
      reputation: +1,
      hype: -1,
      buzzwords: -2
    },
    trustThreshold: 5
  },
  {
    id: 'ms-vision',
    name: 'Ms. Vision',
    emoji: '🌀',
    description: 'Loves bold dreams and impossible ideas. Buzzwords = bonus.',
    preferences: {
      hype: +2,
      buzzwords: +3,
      reputation: -1,
      metrics: -2
    },
    trustThreshold: 4
  },
  {
    id: 'veteran-vc',
    name: 'The Veteran VC',
    emoji: '🧓',
    description: 'Seen it all. Hates fluff. Only funds grounded ideas.',
    preferences: {
      reputation: +2,
      hype: -2,
      buzzwords: -2,
      bugs: -3
    },
    trustThreshold: 6
  },
  {
    id: 'cryptobro',
    name: 'CryptoBro',
    emoji: '🚀',
    description: 'If it has "chain" or "meta" in the pitch, he’s sold. Literally.',
    preferences: {
      buzzwords: +3,
      hype: +2,
      reputation: -2
    },
    trustThreshold: 3
  }
];
