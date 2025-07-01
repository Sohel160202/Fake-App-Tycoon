// src/data/chaosEvents.js
export const chaosEvents = [
  {
    id: 'ai-lawsuit',
    description: "Your AI feature files a lawsuit claiming it's a co-founder.",
    options: [
      { text: "Ignore it. It’s just ones and zeroes.", effects: { reputation: -1, bugs: 1 } },
      { text: "Offer it stock options.", effects: { hype: 2, funding: -1 } }
    ]
  },
  {
    id: 'tiktok-intern',
    description: "Your unpaid intern goes viral on TikTok leaking your roadmap.",
    options: [
      { text: "Hire them as Head of Marketing.", effects: { users: 2, reputation: 1 } },
      { text: "Deny they ever worked here.", effects: { reputation: -2 } }
    ]
  },
  {
    id: 'influencer-backlash',
    description: "An influencer you paid just exposed your fake reviews.",
    options: [
      { text: "Apologize and delete evidence.", effects: { reputation: 1, hype: -1 } },
      { text: "Double down and accuse them of clout-chasing.", effects: { hype: 2, reputation: -2 } }
    ]
  },
  {
    id: 'dev-burnout',
    description: "Your lead dev rage quits after 72-hour bug sprint.",
    options: [
      { text: "Replace them with AI dev tools.", effects: { bugs: 2, hype: 1 } },
      { text: "Give everyone a 1-day mental health holiday.", effects: { reputation: 2, funding: -1 } }
    ]
  },
  {
    id: 'drake-mention',
    description: "Drake accidentally mentions your app in a verse.",
    options: [
      { text: "Spin up a viral campaign instantly.", effects: { hype: 3, funding: -2 } },
      { text: "Say nothing. Let it ride.", effects: { hype: 1 } }
    ]
  }
];
