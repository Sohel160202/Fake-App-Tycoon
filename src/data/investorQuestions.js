// src/data/investorQuestions.js
export const investorQuestions = [
  {
    prompt: "What’s the core value proposition of your app?",
    options: [
      {
        text: "We optimize synergistic paradigms to empower next-gen engagement.",
        effects: { hype: 2, buzzwords: 3, reputation: -1 }
      },
      {
        text: "A real-time language learning assistant for travelers.",
        effects: { reputation: 2, funding: 1 }
      },
      {
        text: "An AI NFT DAO built on quantum chain proof of vibes.",
        effects: { hype: 3, buzzwords: 5, reputation: -2 }
      }
    ]
  },
  {
    prompt: "How do you plan to grow your user base?",
    options: [
      {
        text: "Referral-only waitlist with social validation boosts.",
        effects: { users: 2, hype: 1 }
      },
      {
        text: "Bot farms and clickbait ads. Let’s be honest.",
        effects: { reputation: -2, users: 4, hype: 1 }
      },
      {
        text: "Partner with local communities to solve actual needs.",
        effects: { reputation: 2, users: 1 }
      }
    ]
  },
  {
    prompt: "What will you do with the funding?",
    options: [
      {
        text: "Massive influencer launch + private yacht retreat.",
        effects: { funding: -2, hype: 3 }
      },
      {
        text: "Hire real devs and ship MVP in 30 days.",
        effects: { reputation: 2, bugs: -1 }
      },
      {
        text: "3D billboard on the moon, baby.",
        effects: { hype: 4, funding: -3, reputation: -1 }
      }
    ]
  }
];
