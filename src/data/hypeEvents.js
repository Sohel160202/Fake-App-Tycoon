// src/data/hypeEvents.js
export const hypeEvents = [
  {
    id: 'celeb-endorsement',
    description: "A niche celebrity randomly tweets about your app.",
    effects: { hype: 3, users: 500 }
  },
  {
    id: 'blog-feature',
    description: "A viral tech blog names your app ‘Startup of the Month’.",
    effects: { hype: 2, funding: 10000 }
  },
  {
    id: 'meme-craze',
    description: "A meme using your logo goes viral on Instagram.",
    effects: { hype: 4, reputation: 1 }
  },
  {
    id: 'tech-award',
    description: "Your app wins a made-up tech innovation award.",
    effects: { hype: 1, reputation: 2 }
  },
  {
    id: 'rival-collapse',
    description: "A major competitor’s app gets pulled from stores.",
    effects: { users: 1000, hype: 2 }
  }
];
